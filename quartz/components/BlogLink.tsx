import { QuartzComponent } from "./types"

// Same origin as the second brain, so opt out of the SPA router to reach the blog.
export const BlogLink: QuartzComponent = () => (
  <a class="blog-link" href="https://edoardoferrini.github.io/" data-router-ignore="true">
    blog
  </a>
)
