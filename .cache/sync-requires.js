
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/vanessabarrera/Desktop/new-challenge/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/vanessabarrera/Desktop/new-challenge/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/vanessabarrera/Desktop/new-challenge/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/vanessabarrera/Desktop/new-challenge/src/pages/page-2.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/Users/vanessabarrera/Desktop/new-challenge/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/vanessabarrera/Desktop/new-challenge/src/pages/using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("/Users/vanessabarrera/Desktop/new-challenge/src/templates/using-dsg.js"))
}

