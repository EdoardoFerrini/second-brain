import { QuartzComponent, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
import { resolveRelative } from "../util/path"

const RECENT_NOTE_COUNT = 5
const iso = (d: Date) => d.toISOString().slice(0, 10)

const dateOf = (f: QuartzPluginData) => f.dates?.created ?? f.dates?.modified ?? f.dates?.published

export const RecentNotes: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null

  const notes = allFiles
    .filter((f) => {
      const date = dateOf(f)
      return (
        !!f.slug &&
        f.slug !== "index" &&
        !("unlisted" in f && f.unlisted === true) &&
        f.frontmatter?.kind !== "course" &&
        !!date
      )
    })
    .map((f) => ({ f, date: dateOf(f)! }))
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, RECENT_NOTE_COUNT)

  if (notes.length === 0) return null

  return <section class="recent-notes">
    <h3>Note recenti</h3>
    <ul class="recent-note-list">
      {notes.map(({ f, date }) => (
        <li>
          <time dateTime={iso(date)}>{iso(date)}</time>
          <a href={resolveRelative(fileData.slug!, f.slug!)}>{f.frontmatter?.title ?? f.slug}</a>
        </li>
      ))}
    </ul>
  </section>
}
