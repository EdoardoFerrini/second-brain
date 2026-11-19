import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { registerCondition } from "./quartz/plugins/loader/conditions"
import { BlogLink } from "./quartz/components/BlogLink"
import { NoteIndex } from "./quartz/components/NoteIndex"

registerCondition("index", ({ fileData }) => fileData.slug === "index")

const config = await loadQuartzConfig()
export default config

// Read the plugin-built layout once so we can insert the blog link and the note index.
const baseLayout = await loadQuartzLayout()
const header = [...(baseLayout.defaults.header ?? [])]
header.splice(1, 0, BlogLink)

export const layout = await loadQuartzLayout({
  // Match Doxa: no sidebars; the header and content span the full width.
  defaults: {
    header,
    afterBody: [NoteIndex, ...(baseLayout.defaults.afterBody ?? [])],
    left: [],
    right: [],
  },
  byPageType: {
    content: { frame: "full-width" },
    folder: { frame: "full-width" },
    tag: { frame: "full-width" },
    canvas: { frame: "full-width" },
    bases: { frame: "full-width" },
    "404": { frame: "full-width" },
  },
})
