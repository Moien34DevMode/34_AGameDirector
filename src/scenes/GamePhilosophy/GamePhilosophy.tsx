import { useState } from "react";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import Modal from "@components/ui/Modal/Modal";
import MarkdownRenderer from "@components/markdown/MarkdownRenderer/MarkdownRenderer";
import LoadingOverlay from "@components/ui/LoadingOverlay/LoadingOverlay";
import { gameIdeas, type GameIdeaEntry } from "@data/gameIdeas";
import { useMarkdown } from "@hooks/useMarkdown";
import styles from "./GamePhilosophy.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// GamePhilosophy scene
//
// Purpose: A collection of ideas, manifestos, and design philosophies that
// express how the portfolio owner thinks about games.
//
// Data flow:
//   src/data/gameIdeas.ts → GamePhilosophy scene → idea cards
//   On card click → Modal → MarkdownRenderer (if markdownFile present)
//
// Design notes (implement when ready):
//   • Could be a text-heavy article layout, a card wall, or an interactive map
//   • This is the most expressive scene — let the design be ambitious
// ─────────────────────────────────────────────────────────────────────────────

function GamePhilosophy() {
  const [activeIdea, setActiveIdea] = useState<GameIdeaEntry | null>(null);

  const { content, isLoading, error } = useMarkdown(activeIdea?.markdownFile);

  const handleClose = () => setActiveIdea(null);

  return (
    <SceneLayout sceneId="game-philosophy" title="Game Philosophy">
      <div className={styles.container}>
        {/* Implement the Game Philosophy layout here */}
        <div className={styles.ideaList}>
          {gameIdeas.map((idea) => (
            <article
              key={idea.id}
              className={styles.ideaCard}
              onClick={() => setActiveIdea(idea)}
              role="button"
              tabIndex={0}
              aria-label={`Read: ${idea.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIdea(idea);
                }
              }}
            >
              <h2 className={styles.ideaTitle}>{idea.title}</h2>
              <p className={styles.ideaSummary}>{idea.summary}</p>
              {idea.tags && (
                <ul className={styles.tags}>
                  {idea.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>

      <Modal
        isOpen={Boolean(activeIdea)}
        onClose={handleClose}
        title={activeIdea?.title ?? ""}
      >
        {isLoading && <LoadingOverlay fullScreen={false} />}
        {error && <p className={styles.error}>Failed to load article.</p>}
        {content && <MarkdownRenderer content={content} />}
        {!activeIdea?.markdownFile && activeIdea && <p>{activeIdea.summary}</p>}
      </Modal>
    </SceneLayout>
  );
}

export default GamePhilosophy;
