---
title: "Building GoANPR: A Cloud-Native License Plate Recognition SaaS Platform"
description: "How I built a complete Automatic Number Plate Recognition system as a scalable SaaS product using Go, PaddleDetection, and PostgreSQL - designed for parking operators, access control, and fleet management."
pubDate: 2025-12-06
tags: ["Go", "Computer Vision", "SaaS", "PaddlePaddle", "PostgreSQL", "Docker", "ANPR"]
---

# Building GoANPR: A Cloud-Native License Plate Recognition SaaS Platform

How I built a complete Automatic Number Plate Recognition system as a scalable SaaS product using Go, PaddleDetection, and PostgreSQL - designed for parking operators, access control, and fleet management.

---

## Introduction

After years of working with ANPR (Automatic Number Plate Recognition) systems, I noticed a significant gap in the market: most solutions are either expensive enterprise software with long contracts, or unreliable DIY projects that require constant maintenance. Small to medium businesses—parking operators, gated communities, fleet managers—needed something in between.

That's why I built **GoANPR**: a cloud-native, subscription-based license plate recognition platform that combines the reliability of enterprise solutions with the accessibility of modern SaaS products.

## The Problem with Existing Solutions

Traditional ANPR systems come with significant pain points:

| Challenge | Traditional Solutions | GoANPR Approach |
|-----------|----------------------|-----------------|
| **High upfront costs** | £10,000+ hardware + software licenses | Pay-as-you-go subscription |
| **Complex installation** | Weeks of on-site setup | Deploy in minutes with Docker |
| **Vendor lock-in** | Proprietary formats | Open APIs, export anytime |
| **Limited scalability** | Buy new hardware | Scale instantly in the cloud |
| **Maintenance burden** | On-site IT support required | Managed updates, zero downtime |

## Why Go + PaddleDetection?

### The Go Backend Advantage

I chose Go for the core platform for several reasons:

```go
// Concurrent processing of multiple camera streams
g := errgroup.Group{}

// HTTP server for plate detection API (port 8080)
g.Go(func() error {
    return http.ListenAndServe(":8080", alprdRouter)
})

// HTTPS server for web dashboard (port 5000)
g.Go(func() error {
    return http.ListenAndServe(":5000", router)
})
```

**Performance Benefits:**
- **Goroutines** enable handling thousands of concurrent camera connections
- **Low memory footprint** - runs efficiently on minimal cloud instances
- **Fast compilation** - rapid deployment cycles
- **Static binaries** - simple Docker images, no runtime dependencies

### PaddleDetection for UK Plates

For the actual plate recognition, I integrated PaddlePaddle's detection pipeline, specifically tuned for UK license plates:

```python
# UK plate format validation
standard_formats = [
    r'^[A-Z]{2}[0-9]{2}\s?[A-Z]{3}$',  # AB12 CDE (post-2001)
    r'^[A-Z][0-9]{1,3}\s?[A-Z]{3}$',    # M123 ABC (prefix)
    r'^[A-Z]{3}\s?[0-9]{1,3}[A-Z]$',    # ABC 123D (suffix)
]
```

The system achieves **97%+ accuracy** on standard UK plates, with support for:
- Post-2001 format (AB12 CDE)
- Prefix style (M123 ABC)
- Suffix style (ABC 123D)
- Dateless plates
- EU and Middle East formats

## SaaS Architecture

### Multi-Tenant Design

The platform is built from the ground up as a multi-tenant SaaS:

```
┌─────────────────────────────────────────────────────────────┐
│                    GoANPR Cloud Platform                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ Tenant A │  │ Tenant B │  │ Tenant C │  │ Tenant D │    │
│  │ Parking  │  │ Gated    │  │ Fleet    │  │ Retail   │    │
│  │ Operator │  │ Community│  │ Manager  │  │ Car Park │    │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘    │
│       │             │             │             │           │
│       └─────────────┴──────┬──────┴─────────────┘           │
│                            │                                 │
│                    ┌───────▼───────┐                        │
│                    │   API Gateway  │                        │
│                    │   (Go + Gin)   │                        │
│                    └───────┬───────┘                        │
│                            │                                 │
│       ┌────────────────────┼────────────────────┐           │
│       │                    │                    │           │
│  ┌────▼────┐         ┌─────▼─────┐        ┌────▼────┐      │
│  │  Plate  │         │  Database │        │  Media  │      │
│  │Detector │         │  (Postgres)│        │ Storage │      │
│  └─────────┘         └───────────┘        └─────────┘      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Key SaaS Features

#### 1. Real-Time Streaming Dashboard

Using Server-Sent Events (SSE), customers see plates as they're detected:

```go
func (h *StreamHandler) HandleStream(c *gin.Context) {
    c.Writer.Header().Set("Content-Type", "text/event-stream")
    c.Writer.Header().Set("Cache-Control", "no-cache")
    c.Writer.Header().Set("Connection", "keep-alive")
    
    c.Stream(func(w io.Writer) bool {
        if msg, ok := <-clientChan; ok {
            c.SSEvent("message", msg) // plate|uuid format
            return true
        }
        return false
    })
}
```

#### 2. Group-Based Access Control

Perfect for parking management with different permit types:

```sql
-- Organize plates by group (Staff, Students, Visitors, VIP)
CREATE TABLE groups (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE group_members (
    group_id VARCHAR(36) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    permit_id TEXT NOT NULL,
    plate TEXT,
    FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE
);
```

#### 3. Flexible Data Export

Customers can export their data anytime—no vendor lock-in:

- **CSV** - For spreadsheet analysis
- **Excel** - Formatted reports
- **PDF** - Professional documentation with plate images
- **SQL** - Full database dumps for migration

#### 4. Built-In Tariff Calculator

For parking operators, integrated fee calculation:

```go
type TariffRequest struct {
    DayType   string  `json:"dayType"`   // weekday/weekend
    Duration  string  `json:"duration"`  // hours
    BaseRate  float64 `json:"baseRate"`  // per hour
    StartDate string  `json:"startDate"`
    EndDate   string  `json:"endDate"`
}
```

## Deployment Options

### Option 1: Fully Managed (SaaS)

For customers who want zero infrastructure overhead:

- **Pricing**: From £49/month (up to 1,000 plates/month)
- **Includes**: Dashboard, API access, 90-day data retention
- **Support**: Email + live chat during business hours

### Option 2: Self-Hosted (On-Premise License)

For enterprises with strict data residency requirements:

```bash
# Deploy with Docker Compose
docker compose up -d

# Services started:
# - PostgreSQL database (port 5432)
# - Go API server (ports 5000, 8080)
# - Plate detector (Python)
```

### Option 3: Hybrid

Camera processing on-site, data and dashboard in the cloud:

```
On-Premise                          Cloud
┌─────────────┐                    ┌──────────────┐
│   Camera    │──── HTTPS ────────▶│   GoANPR     │
│   + Edge    │                    │   Cloud API  │
│   Detector  │                    └──────────────┘
└─────────────┘
```

## API-First Design

Every feature is accessible via REST API, enabling integrations:

### Quick Start

```bash
# Detect plate from video upload
curl -X POST -F "file=@parking-entry.mp4" \
  https://api.goanpr.io/v1/upload \
  -H "Authorization: Bearer YOUR_API_KEY"

# Response
{
  "job_id": "abc123",
  "status": "processing",
  "webhook_url": "https://your-app.com/webhook"
}
```

### Webhook Notifications

Get real-time alerts when plates are detected:

```json
{
  "event": "plate.detected",
  "timestamp": "2025-12-06T14:30:00Z",
  "data": {
    "plate": "AB12 CDE",
    "confidence": 0.98,
    "image_url": "https://api.goanpr.io/images/uuid.jpg",
    "camera_id": "entrance-1",
    "group_match": {
      "group": "Staff Parking",
      "member": "John Smith",
      "permit_id": "STAFF001"
    }
  }
}
```

## Use Cases

### 🅿️ Parking Management

- Automatic barrier control
- Permit validation
- Overstay detection
- Revenue tracking

### 🏠 Gated Communities

- Resident/visitor recognition
- Delivery vehicle logging
- Security alerts for unknown plates
- Guest pre-registration

### 🚛 Fleet Management

- Vehicle check-in/check-out
- Mileage tracking
- Unauthorized usage alerts
- Maintenance scheduling

### 🛒 Retail & Shopping Centres

- Loyalty program integration
- VIP customer recognition
- Parking duration analytics
- Peak time reporting


## Technical Stack

| Component | Technology | Why |
|-----------|------------|-----|
| **Backend** | Go 1.23 + Gin | Performance, concurrency |
| **Database** | PostgreSQL 18 | Reliability, JSON support |
| **Detection** | PaddleDetection | Accuracy, CPU-friendly |
| **OCR** | PaddleOCR | UK plate optimization |
| **Frontend** | HTML + JavaScript | Lightweight, fast loading |
| **Deployment** | Docker + Ansible | Reproducible, scalable |
| **CDN** | Cloudflare | Global edge caching |

## What's Next?

The roadmap for GoANPR includes:

- [ ] **Mobile app** - iOS/Android for on-the-go monitoring
- [ ] **Edge device support** - Raspberry Pi and Jetson Nano
- [ ] **Multi-language plates** - European, Asian formats
- [ ] **AI analytics** - Traffic patterns, predictions
- [ ] **Stripe integration** - Self-service billing
- [ ] **SSO support** - SAML, OAuth for enterprise

## Try It Today

Ready to modernize your parking or access control system?


📧 **Contact Sales**: sales@goanpr.io

📖 **Documentation**: [docs.goanpr.io](https://docs.goanpr.io)

💻 **Article** (Self-Hosted): [https://henok.cloud/articles/](https://github.com/micrometre/goanpr)

---

## Conclusion

Building GoANPR as a SaaS product taught me that the best enterprise solutions don't have to be complex or expensive. By combining Go's performance with modern AI/ML capabilities and wrapping it in a user-friendly subscription model, we can democratize technology that was previously only accessible to large corporations.

Whether you're managing a 10-space car park or a multi-site enterprise operation, GoANPR scales with your needs—and you only pay for what you use.

---

*Have questions about ANPR systems or building SaaS products? Feel free to [reach out](https://henok.cloud/#contact) or check out my other articles on [computer vision](https://henok.cloud/articles/anpr-part-1-image-preprocessing) and [infrastructure automation](https://henok.cloud/articles/ansible-events-infrastructure).*
