import { QuartzComponent } from "./types"

// Same origin as the second brain, so opt out of the SPA router to reach the blog.
export const BlogLink: QuartzComponent = () => (
  <a class="blog-link" href="https://edoardoferrini.github.io/" data-router-ignore="true" aria-label="blog" title="blog">
    <svg class="header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9.5 2a2.5 2.5 0 0 1 2.5 2.5v.3a3 3 0 0 1 3 3v.2a2.5 2.5 0 0 1 2 2.45V12a2.5 2.5 0 0 1-2 2.45v.55a3 3 0 0 1-3 3v.5A2.5 2.5 0 0 1 9.5 21H9a3 3 0 0 1-3-3v-.55A2.5 2.5 0 0 1 4 15v-2a2.5 2.5 0 0 1 2-2.45V10a3 3 0 0 1 3-3v-.5A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M12 5v14M9 8h.01M9 12h.01M9 16h.01M15 8h-.01M15 12h-.01M15 16h-.01" />
    </svg>
  </a>
)
