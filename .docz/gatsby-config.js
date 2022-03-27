const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Next Gen Documentation',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Users\\user\\Desktop\\cvitae\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Next Gen Documentation',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Users\\user\\Desktop\\cvitae',
          templates:
            'C:\\Users\\user\\Desktop\\cvitae\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Users\\user\\Desktop\\cvitae\\.docz',
          cache: 'C:\\Users\\user\\Desktop\\cvitae\\.docz\\.cache',
          app: 'C:\\Users\\user\\Desktop\\cvitae\\.docz\\app',
          appPackageJson: 'C:\\Users\\user\\Desktop\\cvitae\\package.json',
          appTsConfig: 'C:\\Users\\user\\Desktop\\cvitae\\tsconfig.json',
          gatsbyConfig: 'C:\\Users\\user\\Desktop\\cvitae\\gatsby-config.js',
          gatsbyBrowser: 'C:\\Users\\user\\Desktop\\cvitae\\gatsby-browser.js',
          gatsbyNode: 'C:\\Users\\user\\Desktop\\cvitae\\gatsby-node.js',
          gatsbySSR: 'C:\\Users\\user\\Desktop\\cvitae\\gatsby-ssr.js',
          importsJs: 'C:\\Users\\user\\Desktop\\cvitae\\.docz\\app\\imports.js',
          rootJs: 'C:\\Users\\user\\Desktop\\cvitae\\.docz\\app\\root.jsx',
          indexJs: 'C:\\Users\\user\\Desktop\\cvitae\\.docz\\app\\index.jsx',
          indexHtml: 'C:\\Users\\user\\Desktop\\cvitae\\.docz\\app\\index.html',
          db: 'C:\\Users\\user\\Desktop\\cvitae\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
