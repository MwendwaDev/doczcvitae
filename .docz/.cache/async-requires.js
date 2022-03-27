// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cvitae-readme-md": () => import("./../../../../cvitae/README.md" /* webpackChunkName: "component---cvitae-readme-md" */),
  "component---cvitae-src-hello-mdx": () => import("./../../../../cvitae/src/hello.mdx" /* webpackChunkName: "component---cvitae-src-hello-mdx" */),
  "component---cvitae-src-index-mdx": () => import("./../../../../cvitae/src/index.mdx" /* webpackChunkName: "component---cvitae-src-index-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

