const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cvitae-readme-md": hot(preferDefault(require("C:\\Users\\user\\Desktop\\cvitae\\cvitae\\README.md"))),
  "component---cvitae-src-hello-mdx": hot(preferDefault(require("C:\\Users\\user\\Desktop\\cvitae\\cvitae\\src\\hello.mdx"))),
  "component---cvitae-src-index-mdx": hot(preferDefault(require("C:\\Users\\user\\Desktop\\cvitae\\cvitae\\src\\index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\user\\Desktop\\cvitae\\.docz\\src\\pages\\404.js")))
}

