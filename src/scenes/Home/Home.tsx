import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import styles from "./Home.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Home scene
//
// Purpose: Primary landing / overview. Introduces the portfolio owner and
// provides entry points to the other scenes.
//
// Design notes (implement when ready):
//   • Hero section with name, title, and brief positioning statement
//   • Navigation cards or links to Timeline, Projects, Abilities, Philosophy
//   • Could include a featured project or reel
//
// All content comes from src/data/. No strings should be hard-coded here.
// ─────────────────────────────────────────────────────────────────────────────

function Home() {
  return (
    <SceneLayout sceneId="home" title="Home">
      <div className={styles.container}>
        {/* Implement the Home scene here */}
      </div>
    </SceneLayout>
  );
}

export default Home;
