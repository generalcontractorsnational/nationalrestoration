/// <reference lib="webworker" />

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.

declare const self: ServiceWorkerGlobalScope

const CACHE_NAME = "storm-damage-assessment-cache-v1"
const urlsToCache = [
  "/",
  "/storm-damage-assessment",
  "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/storm-damaged-roof",
  "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/newly-sided-home",
  "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/residential-roof-install",
  "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/cozy-reading-nook",
  "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/cozy-basement-living",
  "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/suburban-garage-organization",
  "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/suburban-backyard-gathering",
]

// Install a service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    }),
  )
})

// Cache and return requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }
      return fetch(event.request).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Clone the response
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    }),
  )
})

// Update a service worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Background sync for offline submissions
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-damage-reports") {
    event.waitUntil(syncDamageReports())
  }
})

async function syncDamageReports() {
  try {
    // Get all pending reports from IndexedDB
    const pendingReports = await getPendingReportsFromDB()

    // Submit each report
    for (const report of pendingReports) {
      await submitReport(report)
      await markReportAsSynced(report.id)
    }

    // Notify the client that sync is complete
    const clients = await self.clients.matchAll()
    for (const client of clients) {
      client.postMessage({
        type: "SYNC_COMPLETE",
        reports: pendingReports.length,
      })
    }
  } catch (error) {
    console.error("Background sync failed:", error)
  }
}

// These functions would be implemented to work with IndexedDB
async function getPendingReportsFromDB() {
  // Implementation would depend on your IndexedDB structure
  return []
}

async function submitReport(report: any) {
  // Implementation would depend on your API
}

async function markReportAsSynced(id: string) {
  // Implementation would depend on your IndexedDB structure
}

export {}
