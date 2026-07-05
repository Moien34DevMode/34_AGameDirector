import { useState } from "react";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import ProjectCard from "@components/projects/ProjectCard/ProjectCard";
import Modal from "@components/ui/Modal/Modal";
import MarkdownRenderer from "@components/markdown/MarkdownRenderer/MarkdownRenderer";
import LoadingOverlay from "@components/ui/LoadingOverlay/LoadingOverlay";
import { projects } from "@data/projects";
import { useMarkdown } from "@hooks/useMarkdown";
import type { ProjectEntry } from "@/types/project.types";
import styles from "./Projects.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Projects scene
//
// Purpose: Portfolio of shipped and in-progress projects. Each card opens a
// Modal with a full Markdown case study when available.
//
// Data flow:
//   src/data/projects.ts → Projects scene → ProjectCard (display only)
//   On card click → Modal → MarkdownRenderer (if markdownFile present)
//
// Design notes (implement when ready):
//   • Grid or masonry layout
//   • Status / genre / role filters
//   • Featured projects at the top with larger cards
// ─────────────────────────────────────────────────────────────────────────────

function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectEntry | null>(null);

  const { content, isLoading, error } = useMarkdown(
    activeProject?.markdownFile,
  );

  const handleCardClick = (project: ProjectEntry) => {
    setActiveProject(project);
  };

  const handleClose = () => setActiveProject(null);

  return (
    <SceneLayout sceneId="projects" title="Projects">
      <div className={styles.container}>
        {/* Implement the Projects layout here */}
        <div className={styles.grid} role="list">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant={project.featured ? "featured" : "default"}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>

      {/* Detail modal — renders full case study for the selected project */}
      <Modal
        isOpen={Boolean(activeProject)}
        onClose={handleClose}
        title={activeProject?.title ?? ""}
      >
        {isLoading && <LoadingOverlay fullScreen={false} />}
        {error && (
          <p className={styles.error}>Failed to load project details.</p>
        )}
        {content && <MarkdownRenderer content={content} />}
        {!activeProject?.markdownFile && activeProject && (
          <p>{activeProject.summary}</p>
        )}
      </Modal>
    </SceneLayout>
  );
}

export default Projects;
