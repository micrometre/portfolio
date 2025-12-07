---
title: "Building MicroANPR: A Cloud-Native License Plate Recognition SaaS Platform"
description: "A deep dive into building a production ready Automatic Number Plate Recognition (ANPR) SaaS platform. Learn how to leverage Go, PaddleDetection, and PostgreSQL to create a scalable solution for parking operators, access control, and fleet management."

pubDate: 2025-12-06
tags: ["Go", "Computer Vision", "SaaS", "PaddlePaddle", "PostgreSQL", "Docker", "ANPR"]
---


---

<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 my-12 shadow-xl backdrop-blur-sm">
  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
    Introduction
  </h2>
  <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
        <p className="border-l-4 border-blue-500 pl-6 italic bg-blue-500/5 py-2 rounded-r-lg">
      <strong className="text-blue-400 not-italic"><a href="https://MicroANPR.com" target="_blank" rel="noopener noreferrer">MicroANPR(https://MicroANPR.com)</a></strong>  is a cloud native, subscription-based platform that brings enterprise grade license plate recognition to everyone. By combining the performance of Go with the flexibility of SaaS, it delivers a robust, compliant, and easy to deploy solution that grows with your business.
        </p>
  </div>
</div>



Traditional ANPR systems come with significant pain points:

<div className="overflow-x-auto my-8">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <th className="border border-gray-700 px-4 py-3 text-left text-blue-300 font-semibold">Challenge</th>
        <th className="border border-gray-700 px-4 py-3 text-left text-red-300 font-semibold">Traditional Solutions</th>
        <th className="border border-gray-700 px-4 py-3 text-left text-green-300 font-semibold">MicroANPR Approach</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium"> High upfront costs</td>
        <td className="border border-gray-700 px-4 py-3 text-gray-400">£100,000+ hardware + software licenses</td>
        <td className="border border-gray-700 px-4 py-3 text-green-400">Pay-as-you-go subscription</td>
      </tr>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium"> Complex installation</td>
        <td className="border border-gray-700 px-4 py-3 text-gray-400">Weeks of on-site setup</td>
        <td className="border border-gray-700 px-4 py-3 text-green-400">Deploy in minutes </td>
      </tr>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium"> Vendor lock-in</td>
        <td className="border border-gray-700 px-4 py-3 text-gray-400">Proprietary formats</td>
        <td className="border border-gray-700 px-4 py-3 text-green-400">Open APIs, export anytime</td>
      </tr>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium"> Limited scalability</td>
        <td className="border border-gray-700 px-4 py-3 text-gray-400">Buy new hardware</td>
        <td className="border border-gray-700 px-4 py-3 text-green-400">Scale instantly in the cloud</td>
      </tr>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium">️ Maintenance burden</td>
        <td className="border border-gray-700 px-4 py-3 text-gray-400">On-site IT support required</td>
        <td className="border border-gray-700 px-4 py-3 text-green-400">Managed updates, zero downtime</td>
      </tr>
    </tbody>
  </table>
</div>

## ⚡ The Stack: Go + PaddleDetection

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

<div className="overflow-x-auto my-8">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <th className="border border-gray-700 px-4 py-3 text-left text-blue-300 font-semibold">Go Feature</th>
        <th className="border border-gray-700 px-4 py-3 text-left text-green-300 font-semibold">Performance Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium text-white"> Goroutines</td>
        <td className="border border-gray-700 px-4 py-3 text-gray-300">Handle thousands of concurrent camera connections</td>
      </tr>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium text-white"> Low memory footprint</td>
        <td className="border border-gray-700 px-4 py-3 text-gray-300">Runs efficiently on minimal cloud instances</td>
      </tr>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium text-white"> Fast compilation</td>
        <td className="border border-gray-700 px-4 py-3 text-gray-300">Rapid deployment cycles</td>
      </tr>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium text-white"> Static binaries</td>
        <td className="border border-gray-700 px-4 py-3 text-gray-300">Simple Docker images, no runtime dependencies</td>
      </tr>
    </tbody>
  </table>
</div>

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

The system achieves **97%+ accuracy** on standard UK plates, supporting all major formats:

<div className="overflow-x-auto my-8">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <th className="border border-gray-700 px-4 py-3 text-left text-blue-300 font-semibold">Supported Format</th>
        <th className="border border-gray-700 px-4 py-3 text-left text-green-300 font-semibold">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium text-white">🆕 Post-2001</td>
        <td className="border border-gray-700 px-4 py-3 font-mono text-yellow-400 bg-black/20 rounded">AB12 CDE</td>
      </tr>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium text-white">⏮️ Prefix Style</td>
        <td className="border border-gray-700 px-4 py-3 font-mono text-yellow-400 bg-black/20 rounded">A123 ABC</td>
      </tr>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium text-white">⏭️ Suffix Style</td>
        <td className="border border-gray-700 px-4 py-3 font-mono text-yellow-400 bg-black/20 rounded">ABC 123A</td>
      </tr>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium text-white">🏛️ Dateless</td>
        <td className="border border-gray-700 px-4 py-3 font-mono text-yellow-400 bg-black/20 rounded">1 ABC</td>
      </tr>
      <tr className="hover:bg-gray-800/50 transition-colors">
        <td className="border border-gray-700 px-4 py-3 font-medium text-white">🌍 International</td>
        <td className="border border-gray-700 px-4 py-3 text-gray-300">EU & Middle East Support</td>
      </tr>
    </tbody>
  </table>
</div>

## ️ Cloud-Native SaaS Architecture

### Multi-Tenant Design

The platform is built from the ground up as a multi-tenant SaaS:

<div className="my-12 p-6 md:p-8 bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
  <div className="text-center mb-8">
    <h3 className="text-sm font-bold tracking-wide uppercase text-gray-500 mb-1">Architecture Diagram</h3>
    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Multi-Tenant Cloud Platform</div>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center hover:border-blue-500/50 transition-all hover:-translate-y-1">
      <div className="text-2xl mb-2">🅿️</div>
      <div className="font-semibold text-white text-sm">Tenant A</div>
      <div className="text-xs text-gray-400">Parking Operator</div>
    </div>
    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center hover:border-purple-500/50 transition-all hover:-translate-y-1">
      <div className="text-2xl mb-2">🏠</div>
      <div className="font-semibold text-white text-sm">Tenant B</div>
      <div className="text-xs text-gray-400">Gated Community</div>
    </div>
    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center hover:border-green-500/50 transition-all hover:-translate-y-1">
      <div className="text-2xl mb-2">🚛</div>
      <div className="font-semibold text-white text-sm">Tenant C</div>
      <div className="text-xs text-gray-400">Fleet Manager</div>
    </div>
    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-center hover:border-yellow-500/50 transition-all hover:-translate-y-1">
      <div className="text-2xl mb-2">🛒</div>
      <div className="font-semibold text-white text-sm">Tenant D</div>
      <div className="text-xs text-gray-400">Retail Car Park</div>
    </div>
  </div>

  <div className="flex justify-center mb-4">
    <svg className="w-6 h-6 text-gray-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
  </div>

  <div className="max-w-md mx-auto mb-4">
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 rounded-xl shadow-lg shadow-blue-500/20">
      <div className="bg-gray-900 p-4 rounded-[10px] text-center">
        <div className="font-bold text-white text-lg mb-1">API Gateway</div>
        <div className="text-sm text-blue-300 font-mono">Go + Gin Framework</div>
      </div>
    </div>
  </div>

  <div className="flex justify-center mb-4">
    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex items-center gap-4">
      <div className="bg-blue-500/20 p-3 rounded-lg text-2xl">👁️</div>
      <div>
        <div className="font-semibold text-white">Plate Detector</div>
        <div className="text-xs text-gray-400">PaddleDetection</div>
      </div>
    </div>
    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex items-center gap-4">
      <div className="bg-purple-500/20 p-3 rounded-lg text-2xl">🗄️</div>
      <div>
        <div className="font-semibold text-white">Database</div>
        <div className="text-xs text-gray-400">PostgreSQL</div>
      </div>
    </div>
    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex items-center gap-4">
      <div className="bg-green-500/20 p-3 rounded-lg text-2xl">💾</div>
      <div>
        <div className="font-semibold text-white">Media Storage</div>
        <div className="text-xs text-gray-400">Object Store</div>
      </div>
    </div>
  </div>
</div>

<div className="space-y-12 my-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white mb-4">Key SaaS Features</h2>
    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
  </div>

  <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-blue-500/30 transition-colors">
    <div className="p-6 border-b border-gray-700/50 flex items-center gap-4 bg-gray-800/30">
      <div className="bg-blue-500/20 p-3 rounded-lg text-2xl">📡</div>
      <div>
        <h3 className="text-xl font-bold text-white">Real-Time Streaming Dashboard</h3>
        <p className="text-sm text-gray-400">Server-Sent Events (SSE) for instant updates</p>
      </div>
    </div>

  ```go
  // HandleStream manages Server-Sent Events (SSE) connections for real-time plate detection updates
  // This allows the dashboard to receive instant notifications when a new plate is detected
  // without polling or WebSocket overhead
  func (h *StreamHandler) HandleStream(c *gin.Context) {
    // Configure response headers for SSE protocol
    c.Writer.Header().Set("Content-Type", "text/event-stream")  // Tell browser this is an event stream
    c.Writer.Header().Set("Cache-Control", "no-cache")          // Prevent caching of events
    c.Writer.Header().Set("Connection", "keep-alive")           // Maintain persistent connection
    
    // Stream creates a long-lived HTTP connection that pushes events to the client
    c.Stream(func(w io.Writer) bool {
      // Listen for new plate detections on the client-specific channel
      if msg, ok := <-clientChan; ok {
        // Send the plate detection data (format: "plate|uuid")
        // The uuid can be used to fetch the full plate image and metadata
        c.SSEvent("message", msg)
        return true  // Keep connection alive for more events
      }
      return false  // Close connection if channel is closed
    })
  }
  ```
  </div>

  <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-purple-500/30 transition-colors">
    <div className="p-6 border-b border-gray-700/50 flex items-center gap-4 bg-gray-800/30">
      <div className="bg-purple-500/20 p-3 rounded-lg text-2xl">🛡️</div>
      <div>
        <h3 className="text-xl font-bold text-white">Group-Based Access Control</h3>
        <p className="text-sm text-gray-400">Granular permissions for parking management</p>
      </div>
    </div>


  </div>

  <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-green-500/30 transition-colors">
    <div className="p-6 border-b border-gray-700/50 flex items-center gap-4 bg-gray-800/30">
      <div>
        <h3 className="text-xl font-bold text-white">Flexible Data Export</h3>
        <p className="text-sm text-gray-400">Full data ownership with no vendor lock-in</p>
      </div>
    </div>
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
        <div>
          <div className="font-bold text-white">CSV / Excel</div>
          <div className="text-xs text-gray-400">Spreadsheet analysis</div>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
        <div>
          <div className="font-bold text-white">PDF Reports</div>
          <div className="text-xs text-gray-400">Professional documentation</div>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
        <div>
          <div className="font-bold text-white">SQL Dump</div>
          <div className="text-xs text-gray-400">Full database migration</div>
        </div>
      </div>
      <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
        <div>
          <div className="font-bold text-white">JSON API</div>
          <div className="text-xs text-gray-400">Programmatic access</div>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-yellow-500/30 transition-colors">
    <div className="p-6 border-b border-gray-700/50 flex items-center gap-4 bg-gray-800/30">
      <div>
        <h3 className="text-xl font-bold text-white">Built-In Tariff Calculator</h3>
        <p className="text-sm text-gray-400">Integrated fee calculation engine</p>
      </div>
    </div>


  </div>
</div>

<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 my-12 shadow-xl backdrop-blur-sm">
  <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 text-white">
    Flexible Deployment Options
  </h2>
  <p className="text-gray-400 mb-8">
    Choose the deployment model that fits your infrastructure, compliance, and budget requirements from fully managed cloud to complete on-premise control.
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-gray-800/50 p-5 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all relative">
      <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded">POPULAR</div>
      <div className="text-2xl mb-2">☁️</div>
      <h3 className="font-bold text-white mb-1">Fully Managed (SaaS)</h3>
      <p className="text-sm text-gray-400">Zero infrastructure overhead. </p>
    </div>
    <div className="bg-gray-800/50 p-5 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all">
      <div className="text-2xl mb-2">🏢</div>
      <h3 className="font-bold text-white mb-1">Self-Hosted License</h3>
      <p className="text-sm text-gray-400">Full control for strict data residency. </p>
    </div>
    <div className="bg-gray-800/50 p-5 rounded-xl border border-green-500/30 hover:border-green-500/60 transition-all">
      <div className="text-2xl mb-2">⚡</div>
      <h3 className="font-bold text-white mb-1">Hybrid Deployment</h3>
      <p className="text-sm text-gray-400">Edge processing on-site with cloud.</p>
    </div>
  </div>
</div>






<div className="my-8 p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm flex flex-col md:flex-row items-center justify-center gap-8">
  <div className="text-center">
    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">On-Premise</div>
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg relative group">
      <div className="absolute -top-3 -left-3 bg-green-500/20 text-green-400 p-1.5 rounded-lg border border-green-500/30">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <div className="text-4xl mb-3">📹</div>
      <div className="font-bold text-white">Camera + Edge</div>
      <div className="text-xs text-gray-400 mt-1">Local Detection</div>
    </div>
  </div>

  <div className="flex flex-col items-center gap-2">
    <div className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">HTTPS / TLS</div>
    <svg className="w-8 h-8 text-gray-500 animate-pulse hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    <svg className="w-8 h-8 text-gray-500 animate-pulse md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
  </div>

  <div className="text-center">
    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Cloud</div>
    <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-6 rounded-xl border border-blue-500/30 shadow-lg shadow-blue-500/10 relative">
      <div className="text-4xl mb-3">☁️</div>
      <div className="font-bold text-white">MicroANPR Cloud</div>
      <div className="text-xs text-blue-200 mt-1">API & Dashboard</div>
    </div>
  </div>
</div>

<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 my-12 shadow-xl backdrop-blur-sm">
  <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 text-white">
    API-First Design
  </h2>
  <p className="text-gray-400 mb-8">
    Every feature is accessible via REST API, enabling seamless integrations with your existing systems.
  </p>

  <div className="space-y-8">
    <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-gray-700/50 flex items-center gap-3 bg-gray-800/30">
        <div>
          <h3 className="font-bold text-white">Quick Start</h3>
          <p className="text-xs text-gray-400">Upload a video and detect plates</p>
        </div>
      </div>

```bash
# Detect plate from video upload
curl -X POST -F "file=@parking-entry.mp4" \
  https://api.MicroANPR.io/v1/upload \
  -H "Authorization: Bearer YOUR_API_KEY"

# Response
{
  "job_id": "abc123",
  "status": "processing",
  "webhook_url": "https://your-app.com/webhook"
}
```

```json
{
  "event": "plate.detected",
  "timestamp": "2025-12-06T14:30:00Z",
  "data": {
    "plate": "AB12 CDE",
    "confidence": 0.98,
    "image_url": "https://api.MicroANPR.io/images/uuid.jpg",
    "camera_id": "entrance-1",
    "group_match": {
      "group": "Staff Parking",
      "member": "John Smith",
      "permit_id": "STAFF001"
    }
  }
}
```
  </div>
</div>

<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 my-12 shadow-xl backdrop-blur-sm">
  <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 text-white">
    Real-World Use Cases
  </h2>
  <p className="text-gray-400 mb-8">
    MicroANPR powers a variety of applications across different industries.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all">
      <div className="text-2xl mb-3">🅿️</div>
      <h3 className="font-bold text-white mb-2">Parking Management</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li className="flex items-center gap-2"><span className="text-green-400">•</span> Automatic barrier control</li>
        <li className="flex items-center gap-2"><span className="text-green-400">•</span> Permit validation</li>
        <li className="flex items-center gap-2"><span className="text-green-400">•</span> Overstay detection</li>
        <li className="flex items-center gap-2"><span className="text-green-400">•</span> Revenue tracking</li>
      </ul>
    </div>
    <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all">
      <div className="text-2xl mb-3">🏠</div>
      <h3 className="font-bold text-white mb-2">Gated Communities</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li className="flex items-center gap-2"><span className="text-purple-400">•</span> Resident/visitor recognition</li>
        <li className="flex items-center gap-2"><span className="text-purple-400">•</span> Delivery vehicle logging</li>
        <li className="flex items-center gap-2"><span className="text-purple-400">•</span> Security alerts for unknown plates</li>
        <li className="flex items-center gap-2"><span className="text-purple-400">•</span> Guest pre-registration</li>
      </ul>
    </div>
    <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 hover:border-green-500/50 transition-all">
      <div className="text-2xl mb-3">🚛</div>
      <h3 className="font-bold text-white mb-2">Fleet Management</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li className="flex items-center gap-2"><span className="text-green-400">•</span> Vehicle check-in/check-out</li>
        <li className="flex items-center gap-2"><span className="text-green-400">•</span> Mileage tracking</li>
        <li className="flex items-center gap-2"><span className="text-green-400">•</span> Unauthorized usage alerts</li>
        <li className="flex items-center gap-2"><span className="text-green-400">•</span> Maintenance scheduling</li>
      </ul>
    </div>
    <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50 hover:border-yellow-500/50 transition-all">
      <div className="text-2xl mb-3">🛒</div>
      <h3 className="font-bold text-white mb-2">Retail & Shopping Centres</h3>
      <ul className="space-y-2 text-sm text-gray-400">
        <li className="flex items-center gap-2"><span className="text-yellow-400">•</span> Loyalty program integration</li>
        <li className="flex items-center gap-2"><span className="text-yellow-400">•</span> VIP customer recognition</li>
        <li className="flex items-center gap-2"><span className="text-yellow-400">•</span> Parking duration analytics</li>
        <li className="flex items-center gap-2"><span className="text-yellow-400">•</span> Peak time reporting</li>
      </ul>
    </div>
  </div>
</div>

<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 my-12 shadow-xl backdrop-blur-sm">
  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
    Complete Technical Stack
  </h2>
  
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <th className="border border-gray-700 px-4 py-3 text-left text-blue-300 font-semibold">Component</th>
          <th className="border border-gray-700 px-4 py-3 text-left text-purple-300 font-semibold">Technology</th>
          <th className="border border-gray-700 px-4 py-3 text-left text-green-300 font-semibold">Why</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-800/50 transition-colors">
          <td className="border border-gray-700 px-4 py-3 font-medium text-white">Backend</td>
          <td className="border border-gray-700 px-4 py-3 font-mono text-blue-400">Go  + Gin</td>
          <td className="border border-gray-700 px-4 py-3 text-gray-400">Performance, concurrency</td>
        </tr>
        <tr className="hover:bg-gray-800/50 transition-colors">
          <td className="border border-gray-700 px-4 py-3 font-medium text-white">Database</td>
          <td className="border border-gray-700 px-4 py-3 font-mono text-blue-400">PostgreSQL </td>
          <td className="border border-gray-700 px-4 py-3 text-gray-400">Reliability, JSON support</td>
        </tr>
        <tr className="hover:bg-gray-800/50 transition-colors">
          <td className="border border-gray-700 px-4 py-3 font-medium text-white">Detection</td>
          <td className="border border-gray-700 px-4 py-3 font-mono text-blue-400">PaddleDetection</td>
          <td className="border border-gray-700 px-4 py-3 text-gray-400">Accuracy, CPU-friendly</td>
        </tr>
        <tr className="hover:bg-gray-800/50 transition-colors">
          <td className="border border-gray-700 px-4 py-3 font-medium text-white">OCR</td>
          <td className="border border-gray-700 px-4 py-3 font-mono text-blue-400">PaddleOCR</td>
          <td className="border border-gray-700 px-4 py-3 text-gray-400">UK plate optimization</td>
        </tr>
        <tr className="hover:bg-gray-800/50 transition-colors">
          <td className="border border-gray-700 px-4 py-3 font-medium text-white">Frontend</td>
          <td className="border border-gray-700 px-4 py-3 font-mono text-blue-400">Nextjs</td>
          <td className="border border-gray-700 px-4 py-3 text-gray-400">Full-stack React, SEO-friendly</td>
        </tr>
        <tr className="hover:bg-gray-800/50 transition-colors">
          <td className="border border-gray-700 px-4 py-3 font-medium text-white">Deployment</td>
          <td className="border border-gray-700 px-4 py-3 font-mono text-blue-400">Docker + Ansible</td>
          <td className="border border-gray-700 px-4 py-3 text-gray-400">Reproducible, scalable</td>
        </tr>
        <tr className="hover:bg-gray-800/50 transition-colors">
          <td className="border border-gray-700 px-4 py-3 font-medium text-white">CDN</td>
          <td className="border border-gray-700 px-4 py-3 font-mono text-blue-400">Cloudflare</td>
          <td className="border border-gray-700 px-4 py-3 text-gray-400">Global edge caching</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 my-12 shadow-xl backdrop-blur-sm">
  <h2 className="text-3xl font-bold mb-2 flex items-center gap-3 text-white">
    <span className="text-4xl"></span> Roadmap & Future
  </h2>
  <p className="text-gray-400 mb-8">
    Upcoming features and enhancements planned for MicroANPR.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
      <div>
        <div className="font-bold text-white text-sm">Mobile App</div>
        <div className="text-xs text-gray-400">iOS/Android monitoring</div>
      </div>
    </div>
    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
      <div>
        <div className="font-bold text-white text-sm">Edge Devices</div>
        <div className="text-xs text-gray-400">Raspberry Pi & Jetson</div>
      </div>
    </div>
    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
      <div>
        <div className="font-bold text-white text-sm">Multi-Language Plates</div>
        <div className="text-xs text-gray-400">EU & Asian formats</div>
      </div>
    </div>
    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
      <div>
        <div className="font-bold text-white text-sm">AI Analytics</div>
        <div className="text-xs text-gray-400">Traffic predictions</div>
      </div>
    </div>
    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
      <div>
        <div className="font-bold text-white text-sm">Stripe Integration</div>
        <div className="text-xs text-gray-400">Self-service billing</div>
      </div>
    </div>
    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
      <div>
        <div className="font-bold text-white text-sm">SSO Support</div>
        <div className="text-xs text-gray-400">SAML & OAuth</div>
      </div>
    </div>
  </div>
</div>

<div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 my-12 text-center">
  <h2 className="text-3xl font-bold mb-4 text-white"> Get Started</h2>
  <p className="text-gray-300 mb-6">Ready to modernize your parking or access control system?</p>
  <a href="https://gist.github.com/micrometre/87c4c19cf1f85031d25803679f38f03a" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
     View on GitHub
  </a>
</div>

<div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 my-12 shadow-xl backdrop-blur-sm">
  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
  </h2>
  <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
    <p>
      Building MicroANPR as a SaaS product taught me that the best enterprise solutions don't have to be complex or expensive. By combining Go's performance with modern AI/ML capabilities and wrapping it in a user-friendly subscription model, we can democratize technology that was previously only accessible to large corporations.
    </p>
    <p className="border-l-4 border-purple-500 pl-6 italic bg-purple-500/5 py-2 rounded-r-lg">
      Whether you're managing a 10-space car park or a multi site enterprise operation, MicroANPR scales with your needs and you only pay for what you use.
    </p>
  </div>
</div>

---

*Have questions about ANPR systems or building SaaS products? Feel free to [reach out](https://henok.cloud/#contact) or check out my other articles on [computer vision](https://henok.cloud/articles/anpr-part-1-image-preprocessing) and [infrastructure automation](https://henok.cloud/articles/ansible-events-infrastructure).*
