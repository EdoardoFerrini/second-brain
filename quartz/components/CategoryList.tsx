import { QuartzComponent, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
import { resolveRelative } from "../util/path"

type Category = {
  slug: string
  title: string
  order: number
  notes: QuartzPluginData[]
}

const titleOf = (f: QuartzPluginData) => f.frontmatter?.title ?? f.slug ?? "Senza titolo"
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export const CategoryList: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null

  const categories = new Map<string, Category>()
  const categoryPages = new Map<string, QuartzPluginData>()

  for (const f of allFiles) {
    if (!f.slug || f.slug.startsWith("tags/") || f.slug === "index") continue
    const parts = f.slug.split("/").filter(Boolean)
    if (parts.length === 0) continue

    // A category's index.md is emitted as "guida/index".
    if (parts.length === 2 && parts[1] === "index") {
      categoryPages.set(parts[0], f)
      continue
    }
    if (parts.length === 1) continue

    const key = parts[0]
    if (!categories.has(key)) {
      categories.set(key, {
        slug: key,
        title: capitalize(key),
        order: Number.POSITIVE_INFINITY,
        notes: [],
      })
    }
    categories.get(key)!.notes.push(f)
  }

  for (const [key, page] of categoryPages) {
    const category = categories.get(key)
    if (!category) continue
    const order = page.frontmatter?.order
    category.title = titleOf(page)
    category.order = typeof order === "number" ? order : Number.POSITIVE_INFINITY
  }

  const sorted = [...categories.values()].sort(
    (a, b) => a.order - b.order || a.title.localeCompare(b.title, "it"),
  )

  return <div class="category-index">
    {sorted.map((category) => (
      <section class="category-group">
        <h3>
          <a href={resolveRelative(fileData.slug!, category.slug)}>{category.title}</a>
          <span class="category-count">{category.notes.length}</span>
        </h3>
        <ul>
          {category.notes
            .sort((a, b) => titleOf(a).localeCompare(titleOf(b), "it"))
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
