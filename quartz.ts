import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { registerCondition } from "./quartz/plugins/loader/conditions"
import { BlogLink } from "./quartz/components/BlogLink"

registerCondition("index", ({ fileData }) => fileData.slug === "index")

const config = await loadQuartzConfig()
export default config

// Read the plugin-built header once so the blog link can sit next to the title.
const header = [...((await loadQuartzLayout()).defaults.header ?? [])]
header.splice(1, 0, BlogLink)

export const layout = await loadQuartzLayout({
  // Match Doxa: no sidebars; the header and content span the full width.
  defaults: { header, left: [], right: [] },
  byPageType: {
    content: { frame: "full-width" },
    folder: { frame: "full-width" },
    tag: { frame: "full-width" },
    canvas: { frame: "full-width" },
    bases: { frame: "full-width" },
    "404": { frame: "full-width" },
  },
})
