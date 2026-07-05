import { useState, useEffect } from 'react';
import { loadMarkdown } from '@services/markdownLoader';

// ─────────────────────────────────────────────────────────────────────────────
// useMarkdown
//
// Loads a Markdown file from src/assets/markdown/ on demand.
// The file path is relative to that directory.
//
// Usage:
//   const { content, isLoading, error } = useMarkdown('timeline/role-director.md');
// ─────────────────────────────────────────────────────────────────────────────

export interface UseMarkdownResult {
  content: string | null;
  isLoading: boolean;
  error: Error | null;
}

export function useMarkdown(filePath: string | undefined): UseMarkdownResult {
  const [content, setContent]     = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError]         = useState<Error | null>(null);

  useEffect(() => {
    if (!filePath) {
      setContent(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    let cancelled = false;

    setIsLoading(true);
    setError(null);

    loadMarkdown(filePath)
      .then((text) => {
        if (!cancelled) {
          setContent(text);
          setIsLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err
              : new Error(`Failed to load markdown: ${filePath}`)
          );
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [filePath]);

  return { content, isLoading, error };
}
