import { QuartzComponent, QuartzComponentProps } from "./types"
import { resolveRelative } from "../util/path"

export const CourseNav: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const courses = allFiles.filter((f) => f.frontmatter?.kind === "course" && !!f.slug)
  if (courses.length === 0) return null

  return <details class="course-nav">
    <summary>courses</summary>
    <ul>
      {courses.map((course) => (
        <li>
          <a href={resolveRelative(fileData.slug!, course.slug!)}>{course.frontmatter?.title ?? course.slug}</a>
        </li>
      ))}
    </ul>
  </details>
}
