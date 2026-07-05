/**
 * Markdown loader service.
 *
 * Uses Vite's import.meta.glob to collect all .md files at build time,
 * then lazily loads them on demand with an in-memory cache.
 *
 * Why glob instead of dynamic import()?
 *   Dynamic imports with variable paths (import(`.../${path}`)) are not
 *   statically analysable by Vite and won't be included in the build.
 *   import.meta.glob lets Vite know the full set of files at build time
 *   while still loading them lazily at runtime.
 *
 * Usage:
 *   const content = await loadMarkdown('timeline/role-director.md');
 */

// Collect every .md file inside src/assets/markdown/ as raw strings.
// The `query: '?raw'` option imports file contents as a plain string.
const markdownModules = import.meta.glob<string>(
  '/src/assets/markdown/**/*.md',
  { query: '?raw', import: 'default' }
);

const cache = new Map<string, string>();

/**
 * Load a Markdown file by its path relative to src/assets/markdown/.
 * @example loadMarkdown('timeline/role-director.md')
 * @throws  Error if the file does not exist in the asset folder
 */
export async function loadMarkdown(filePath: string): Promise<string> {
  const key = `/src/assets/markdown/${filePath}`;

  if (cache.has(key)) {
    return cache.get(key)!;
  }

  const loader = markdownModules[key];

  if (!loader) {
    throw new Error(
      `[markdownLoader] File not found: "${filePath}". ` +
        `Make sure it exists inside src/assets/markdown/.`
    );
  }

  const content = await loader();
  cache.set(key, content);
  return content;
}

/** Clear the cache — useful during development hot-reloads */
export function clearMarkdownCache(): void {
  cache.clear();
}
