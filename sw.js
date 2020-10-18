<<<<<<< HEAD
<<<<<<< HEAD
const options = {
  workboxURL:
    'https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/workbox-sw.js',
  importScripts: [],
  config: { debug: false },
  clientsClaim: true,
  skipWaiting: true,
  cleanupOutdatedCaches: true,
  offlineAnalytics: false,
  preCaching: ['/', '/'],
  runtimeCaching: [
    {
      urlPattern: '/_nuxt/',
      handler: 'CacheFirst',
      method: 'GET',
      strategyPlugins: [],
    },
    {
      urlPattern: '/',
      handler: 'NetworkFirst',
      method: 'GET',
      strategyPlugins: [],
    },
    {
      urlPattern: '/_nuxt/',
      handler: 'CacheFirst',
      method: 'GET',
      strategyPlugins: [],
    },
    {
      urlPattern: '/',
      handler: 'NetworkFirst',
      method: 'GET',
      strategyPlugins: [],
    },
  ],
  offlinePage: null,
  pagesURLPattern: '/',
  offlineStrategy: 'NetworkFirst',
}
=======
importScripts(
  'https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/workbox-sw.js'
)
>>>>>>> parent of 4c199a7... Update Portfolio
=======
const options = {"workboxURL":"https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/workbox-sw.js","importScripts":[],"config":{"debug":false},"clientsClaim":true,"skipWaiting":true,"cleanupOutdatedCaches":true,"offlineAnalytics":false,"preCaching":["/","/"],"runtimeCaching":[{"urlPattern":"/_nuxt/","handler":"CacheFirst","method":"GET","strategyPlugins":[]},{"urlPattern":"/","handler":"NetworkFirst","method":"GET","strategyPlugins":[]},{"urlPattern":"/_nuxt/","handler":"CacheFirst","method":"GET","strategyPlugins":[]},{"urlPattern":"/","handler":"NetworkFirst","method":"GET","strategyPlugins":[]}],"offlinePage":null,"pagesURLPattern":"/","offlineStrategy":"NetworkFirst"}
>>>>>>> parent of 8e572d1... Update Portfolio

importScripts(...[options.workboxURL, ...options.importScripts])

<<<<<<< HEAD
initWorkbox(workbox, options)
workboxExtensions(workbox, options)
precacheAssets(workbox, options)
cachingExtensions(workbox, options)
runtimeCaching(workbox, options)
offlinePage(workbox, options)
routingExtensions(workbox, options)
=======
// Set workbox config
workbox.setConfig({
  debug: false,
})
>>>>>>> parent of 4c199a7... Update Portfolio

function getProp(obj, prop) {
  return prop.split('.').reduce((p, c) => p[c], obj)
}

function initWorkbox(workbox, options) {
  if (options.config) {
    // Set workbox config
    workbox.setConfig(options.config)
  }

  if (options.cacheNames) {
    // Set workbox cache names
    workbox.core.setCacheNameDetails(options.cacheNames)
  }

  if (options.clientsClaim) {
    // Start controlling any existing clients as soon as it activates
    workbox.core.clientsClaim()
  }

  if (options.skipWaiting) {
    workbox.core.skipWaiting()
  }

  if (options.cleanupOutdatedCaches) {
    workbox.precaching.cleanupOutdatedCaches()
  }

<<<<<<< HEAD
  if (options.offlineAnalytics) {
    // Enable offline Google Analytics tracking
    workbox.googleAnalytics.initialize()
  }
}

function precacheAssets(workbox, options) {
  if (options.preCaching.length) {
    workbox.precaching.precacheAndRoute(options.preCaching, options.cacheOptions)
  }
}

function runtimeCaching(workbox, options) {
  for (const entry of options.runtimeCaching) {
    const urlPattern = new RegExp(entry.urlPattern)
    const method = entry.method || 'GET'

    const plugins = (entry.strategyPlugins || [])
      .map(p => new (getProp(workbox, p.use))(...p.config))

    const strategyOptions = { ...entry.strategyOptions, plugins }

    const strategy = new workbox.strategies[entry.handler](strategyOptions)

    workbox.routing.registerRoute(urlPattern, strategy, method)
  }
}

function offlinePage(workbox, options) {
  if (options.offlinePage) {
    // Register router handler for offlinePage
    workbox.routing.registerRoute(new RegExp(options.pagesURLPattern), ({ request, event }) => {
      const strategy = new workbox.strategies[options.offlineStrategy]
      return strategy
        .handle({ request, event })
        .catch(() => caches.match(options.offlinePage))
    })
  }
}

function workboxExtensions(workbox, options) {
  
}

function cachingExtensions(workbox, options) {
  
}

<<<<<<< HEAD
function routingExtensions(workbox, options) {}
=======
// Register route handlers for runtimeCaching
workbox.routing.registerRoute(
  new RegExp('/PortfolioNuxtJS/_nuxt/'),
  new workbox.strategies.CacheFirst({}),
  'GET'
)
workbox.routing.registerRoute(
  new RegExp('/PortfolioNuxtJS/'),
  new workbox.strategies.NetworkFirst({}),
  'GET'
)
>>>>>>> parent of 4c199a7... Update Portfolio
=======
function routingExtensions(workbox, options) {
  
}
>>>>>>> parent of 8e572d1... Update Portfolio
