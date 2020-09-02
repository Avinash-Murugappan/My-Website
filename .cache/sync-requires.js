const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/avinasharunachalam/amurugappan-website/My-Website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/avinasharunachalam/amurugappan-website/My-Website/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/avinasharunachalam/amurugappan-website/My-Website/src/pages/index.js"))),
  "component---src-pages-pensieve-index-js": hot(preferDefault(require("/Users/avinasharunachalam/amurugappan-website/My-Website/src/pages/pensieve/index.js"))),
  "component---src-pages-pensieve-tags-js": hot(preferDefault(require("/Users/avinasharunachalam/amurugappan-website/My-Website/src/pages/pensieve/tags.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/avinasharunachalam/amurugappan-website/My-Website/src/templates/post.js"))),
  "component---src-templates-tag-js": hot(preferDefault(require("/Users/avinasharunachalam/amurugappan-website/My-Website/src/templates/tag.js")))
}

