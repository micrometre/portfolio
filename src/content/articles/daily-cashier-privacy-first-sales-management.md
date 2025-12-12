---
title: 'Daily Cashier: A Privacy-First Sales Management System'
description: 'Offline-first sales tracking and invoice management system using WebAssembly, SQLite, and Next.js - with zero server dependencies.'
pubDate: 2025-11-20
tags: ['Next.js', 'WebAssembly', 'SQLite', 'TypeScript', 'Privacy', 'OPFS', 'PWA']
image: '/assets/daily-cashier-cover.jpg'
featured: true
---

# 🚀 <a href="https://daily-cashier.vercel.app/" target="_blank" rel="noopener">Try Daily Cashier Live</a> | 📂 <a href="https://github.com/micrometre/cashier" target="_blank" rel="noopener">View Source Code</a>

# Building Daily Cashier: A Privacy-First Sales Management System



In response to growing privacy concerns, I built **Daily Cashier** a serverless, browser-based sales management system. 

This article explores the technical decisions behind creating this privacy-first business application.

---

## Privacy vs. Functionality

Most modern business applications require cloud storage, user accounts, and third-party services. While convenient, this approach raises several significant concerns:

* **Data Privacy**: Business data is stored on external servers, creating a potential liability.
* **Vendor Lock-in**: Businesses become dependent on specific cloud providers.
* **Recurring Costs**: Users often face monthly subscription fees.
* **Internet Dependency**: Applications cannot work reliably offline.
* **GDPR Compliance**: Complex data protection requirements must be managed.

I wanted to build a full-featured sales management system that gives users **complete control over their data** while maintaining professional functionality.

## Local-First Architecture

Daily Cashier adopts a **local-first** approach where all data processing and storage happens directly in the user's browser. This architecture delivers powerful benefits:

* ✅ **Complete Privacy**: Data never leaves the user's device.
* ✅ **Offline Operation**: Works perfectly without an internet connection.
* ✅ **Zero Costs**: No server infrastructure or recurring subscription fees.
* ✅ **GDPR Compliance**: The user inherently owns and controls all data.
* ✅ **Performance**: Near-native speed achieved through WebAssembly.

---

## Technical Architecture: A Stack for Privacy

The application leverages cutting-edge web technologies to deliver a desktop-quality experience:

| Component | Technology Used |
| :--- | :--- |
| **Frontend** | Next.js 15, TypeScript |
| **Styling** | Tailwind CSS |
| **Database** | SQLite WASM (WebAssembly) |
| **Storage** | Origin Private File System (OPFS) |
| **PDF Generation** | jsPDF |
| **Deployment** | Vercel (Static Site) |
| **License** | MIT |

### The Database Core

The heart of the application is a full **SQLite database running in WebAssembly**. This allows complex relational queries to be executed at near-native speed directly in the browser.

### Persistent Storage Strategy

Data persistence is crucial. I utilized the **Origin Private File System (OPFS)**, a modern browser API that provides native file system access for highly efficient and reliable local storage of the SQLite database file (`daily-cashier.db`).

---

## Key Features and Real-World Impact

Daily Cashier is designed to be a complete solution for small businesses, offering:

1.  **Sales Recording System**: Tracks cash, card, and digital payment methods with automatic total calculations.
2.  **Invoice Generation**: Creates professional, customizable PDF invoices with VAT calculations.
3.  **Financial Reporting**: Comprehensive reporting with date filtering and export capabilities.
4.  **HMRC Export Integration**: Tax-ready reports formatted specifically for UK HMRC submissions.

### Business Benefits

The local-first design provides measurable benefits to small businesses:

* **Cost Savings**: £0 monthly fees compared to £30–100 for similar cloud solutions.
* **Reliability**: 100% uptime with zero server dependencies.
* **Performance**: Sub-100ms query responses even with thousands of records.
* **Peace of Mind**: Users report complete data control and privacy as a key benefit.

---

## Technical Challenges and Solutions

Building an enterprise-grade application entirely on the client-side presented unique challenges:

| Challenge | Problem Description | Solution Implemented |
| :--- | :--- | :--- |
| **Large Data Sets** | Browser memory limitations with thousands of records. | Implemented lazy loading and virtual scrolling for lists. |
| **Cross-Browser Compatibility** | OPFS is not supported in all browsers. | Graceful fallback to IndexedDB for persistence. |
| **PDF Generation** | Large invoices caused the UI to freeze (blocking). | Used **Web Workers** to offload PDF generation to a background thread. |

---

## Lessons Learned and Future Vision

### Technical Insights

1.  **WebAssembly is Production-Ready**: Using SQLite WASM provided the necessary performance and reliability.
2.  **OPFS is the Future**: Native file system access in browsers is a game-changer for data-intensive applications.
3.  **Local-First is Viable**: Complex applications *can* work entirely offline without compromising functionality.

### Future Enhancements

The roadmap includes exciting features to expand the system's capabilities:

* **Inventory Management**: Track product stock levels.
* **Multi-Currency Support**: Handle international transactions.
* **Advanced Analytics**: Revenue forecasting and trend analysis.
* **Encryption**: Optional client-side database encryption.
* **Mobile App**: Native iOS/Android applications.

## Conclusion

Building Daily Cashier has demonstrated what is possible when modern web technologies meet a privacy-first mindset. This project proves that powerful business applications don't need to compromise user data control or require expensive cloud infrastructure.

The combination of WebAssembly, modern storage APIs, and thoughtful architecture creates an application that is **Fast, Private, Reliable, and Cost-Effective**. Local-first applications represent a compelling alternative to traditional cloud-based solutions, offering the benefits of modern software while maintaining a critical balance: **complete control over your business's data.**

***

