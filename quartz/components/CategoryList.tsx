import { QuartzComponent, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
import { resolveRelative } from "../util/path"

// Notes stay flat in content/. Their `category` frontmatter drives the grouping,
// and this list fixes the order in which categories appear.
const CATEGORY_ORDER = ["Corsi"]

const titleOf = (f: QuartzPluginData) => f.frontmatter?.title ?? f.slug ?? "Senza titolo"
const orderOf = (f: QuartzPluginData) => {
  const order = f.frontmatter?.order
  return typeof order === "number" ? order : Number.POSITIVE_INFINITY
}
const categoryRank = (category: string) => {
  const index = CATEGORY_ORDER.indexOf(category)
  return index === -1 ? Number.POSITIVE_INFINITY : index
}

export const CategoryList: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null

  const groups = new Map<string, QuartzPluginData[]>()
  for (const f of allFiles) {
    const category = f.frontmatter?.category
    if (!f.slug || f.slug === "index" || typeof category !== "string" || !category.trim()) continue
    if (typeof f.frontmatter?.course === "string") continue // chapters live on their course page
    if (!groups.has(category)) groups.set(category, [])
    groups.get(category)!.push(f)
  }

  const categories = [...groups.keys()]
    .filter((category) => CATEGORY_ORDER.includes(category))
    .sort((a, b) => categoryRank(a) - categoryRank(b) || a.localeCompare(b, "it"))

  return <div class="category-index">
    {categories.map((category) => (
      <section class="category-group">
        <h3>
          {category}
          <span class="category-count">{groups.get(category)!.length}</span>
        </h3>
        <ul>
          {groups.get(category)!
            .sort((a, b) => orderOf(a) - orderOf(b) || titleOf(a).localeCompare(titleOf(b), "it"))
            .map((note) => (
              <li>
                <a class="internal" href={resolveRelative(fileData.slug!, note.slug!)}>{titleOf(note)}</a>
              </li>
            ))}
        </ul>
      </section>
    ))}
  </div>
}
