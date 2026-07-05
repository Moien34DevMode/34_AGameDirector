import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import styles from "./Splash.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Splash scene
//
// Purpose: First impression / entry gate. Typically auto-advances to Home
// after a brief animation, or waits for user interaction.
//
// Design notes (implement when ready):
//   • Full-screen, no navigation visible
//   • Could show a title card, logo, or atmospheric animation
//   • Should navigate to ROUTES.HOME on completion
//
// This file intentionally contains no portfolio content.
// All text, images, and data come from src/data/ or props.
// ─────────────────────────────────────────────────────────────────────────────

function Splash() {
  return (
    <SceneLayout sceneId="splash" title="Welcome">
      <div className={styles.container}>
        {/* Implement the splash screen here */}
      </div>
      this is splash.
    </SceneLayout>
  );
}

export default Splash;
