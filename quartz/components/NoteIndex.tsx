import { QuartzComponent, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
import { resolveRelative } from "../util/path"

const iso = (d: Date) => d.toISOString().slice(0, 10)
const dateOf = (f: QuartzPluginData) => f.dates?.created ?? f.dates?.modified ?? f.dates?.published
const titleOf = (f: QuartzPluginData) => String(f.frontmatter?.title ?? f.slug ?? "Senza titolo")

export const NoteIndex: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null

  const notes = allFiles
    .filter((f) => !!f.slug && f.slug !== "index" && !("unlisted" in f && f.unlisted === true))
    .map((f) => ({ f, date: dateOf(f) }))
    .sort((a, b) => {
      if (a.date && b.date) return b.date.getTime() - a.date.getTime()
      return titleOf(a.f).localeCompare(titleOf(b.f), "it")
    })

  if (notes.length === 0) return null

  return <section class="note-index">
    <h3>Note <span class="note-count">{notes.length}</span></h3>
    <ul class="note-list">
      {notes.map(({ f, date }) => (
        <li>
          <time dateTime={date ? iso(date) : undefined}>{date ? iso(date) : ""}</time>
          <a href={resolveRelative(fileData.slug!, f.slug!)}>{titleOf(f)}</a>
          {f.frontmatter?.description && <p>{String(f.frontmatter.description)}</p>}
        </li>
      ))}
    </ul>
  </section>
}
