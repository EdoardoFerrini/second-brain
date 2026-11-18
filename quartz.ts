import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config

export const layout = await loadQuartzLayout({
  // Match Doxa: no sidebars; the header and content span the full width.
  defaults: { left: [], right: [] },
  byPageType: {
    content: { frame: "full-width" },
    folder: { frame: "full-width" },
    tag: { frame: "full-width" },
    canvas: { frame: "full-width" },
    bases: { frame: "full-width" },
    "404": { frame: "full-width" },
  },
})
