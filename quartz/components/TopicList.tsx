import { QuartzComponent, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
import { resolveRelative } from "../util/path"

const TOPIC_ORDER = ["programmazione", "cybersecurity", "matematica"]

const titleOf = (f: QuartzPluginData) => String(f.frontmatter?.title ?? f.slug ?? "Senza titolo")
const isMap = (f: QuartzPluginData) => f.frontmatter?.kind === "mappa"
const orderOf = (f: QuartzPluginData) => {
  const order = f.frontmatter?.order
  return typeof order === "number" ? order : Number.POSITIVE_INFINITY
}

export const TopicList: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null

  const groups = new Map<string, QuartzPluginData[]>(TOPIC_ORDER.map((topic) => [topic, []]))
  for (const f of allFiles) {
    const topic = f.frontmatter?.topic
    if (!f.slug || f.slug === "index" || typeof topic !== "string") continue
    const normalized = topic.trim().toLowerCase()
    if (!groups.has(normalized)) continue
    groups.get(normalized)!.push(f)
  }

  return <section class="topic-index">
    {TOPIC_ORDER.map((topic) => (
      <section class="topic-group">
        <h3>{topic}</h3>
        <ul>
          {groups.get(topic)!
            .filter(isMap)
            .sort((a, b) => orderOf(a) - orderOf(b) || titleOf(a).localeCompare(titleOf(b), "it"))
            .map((note) => (
              <li>
                <a class="internal" href={resolveRelative(fileData.slug!, note.slug!)}>{titleOf(note)}</a>
              </li>
            ))}
        </ul>
      </section>
    ))}
  </section>
}
