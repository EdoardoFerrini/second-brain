import { QuartzComponent } from "./types"

// Same origin as the second brain, so opt out of the SPA router to reach the blog.
export const BlogLink: QuartzComponent = () => (
  <a class="blog-link" href="https://edoardoferrini.github.io/" data-router-ignore="true" aria-label="blog" title="blog">
    <svg class="header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M12 18v-1.5" />
    </svg>
  </a>
)
