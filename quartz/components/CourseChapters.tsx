import { QuartzComponent, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
import { resolveRelative } from "../util/path"

const titleOf = (f: QuartzPluginData) => f.frontmatter?.title ?? f.slug ?? "Senza titolo"
const chapterOf = (f: QuartzPluginData) => {
  const chapter = f.frontmatter?.chapter
  return typeof chapter === "number" ? chapter : Number.POSITIVE_INFINITY
}

export const CourseChapters: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const course = fileData.frontmatter?.title
  if (fileData.frontmatter?.kind !== "course" || typeof course !== "string") return null

  const chapters = allFiles
    .filter((f) => f.frontmatter?.course === course)
    .sort((a, b) => chapterOf(a) - chapterOf(b) || titleOf(a).localeCompare(titleOf(b), "it"))

  return <div class="course-chapters">
    <h3>Capitoli</h3>
    <ol>
      {chapters.map((chapter) => (
        <li>
          <a class="internal" href={resolveRelative(fileData.slug!, chapter.slug!)}>{titleOf(chapter)}</a>
        </li>
      ))}
    </ol>
  </div>
}
