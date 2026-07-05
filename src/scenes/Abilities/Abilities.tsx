import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import AbilityGraph from "@components/abilities/AbilityGraph/AbilityGraph";
import { abilities } from "@data/abilities";
import styles from "./Abilities.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Abilities scene
//
// Purpose: Visual representation of skills and proficiency levels.
//
// Data flow:
//   src/data/abilities.ts → Abilities scene → AbilityGraph
//
// Design notes (implement when ready):
//   • Choose a display mode: 'bar' | 'radar' | 'grid'
//   • Consider category tabs or all-at-once layout
//   • Animate bars/chart in on scroll / viewport entry
// ─────────────────────────────────────────────────────────────────────────────

function Abilities() {
  return (
    <SceneLayout sceneId="abilities" title="Abilities">
      <div className={styles.container}>
        {/* Implement the Abilities layout here */}
        <AbilityGraph groups={abilities} displayMode="bar" />
      </div>
    </SceneLayout>
  );
}

export default Abilities;
