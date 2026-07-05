/// <reference types="vite/client" />

// Declare Markdown files imported as raw strings via ?raw
// Used by the markdownLoader service.
declare module '*.md' {
  const content: string;
  export default content;
}
