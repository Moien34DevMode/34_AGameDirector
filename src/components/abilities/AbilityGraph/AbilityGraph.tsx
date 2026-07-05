import { motion } from "framer-motion";
import type { AbilityGroup } from "@/types/ability.types";
import { cn } from "@utils/cn";
import styles from "./AbilityGraph.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// AbilityGraph — visualises ability groups and their proficiency levels.
//
// `displayMode` controls the chart style:
//   bar    → horizontal bars per ability (default — most readable at all sizes)
//   radar  → polar/spider chart (better for showing category balance)
//   grid   → compact badge grid (best for many small abilities)
//
// The bar implementation is provided as a ready-to-use baseline.
// Swap in a radar implementation when the design is finalised.
// ─────────────────────────────────────────────────────────────────────────────

export type AbilityDisplayMode = "bar" | "radar" | "grid";

export interface AbilityGraphProps {
  groups: AbilityGroup[];
  displayMode?: AbilityDisplayMode;
  className?: string;
}

function AbilityGraph({
  groups,
  displayMode = "bar",
  className,
}: AbilityGraphProps) {
  return (
    <div
      className={cn(styles.graph, styles[displayMode], className)}
      role="list"
      aria-label="Skills and abilities"
    >
      {groups.map((group) => (
        <section
          key={group.category}
          className={styles.group}
          aria-label={group.label}
        >
          <h3 className={styles.groupLabel}>{group.label}</h3>

          <ul className={styles.abilityList}>
            {group.abilities.map((ability) => (
              <li
                key={ability.id}
                className={cn(
                  styles.abilityRow,
                  ability.highlighted && styles.highlighted,
                )}
                role="listitem"
              >
                <span className={styles.abilityName}>{ability.name}</span>

                {/* Bar mode */}
                {displayMode === "bar" && (
                  <div
                    className={styles.barTrack}
                    role="meter"
                    aria-label={ability.name}
                    aria-valuenow={ability.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <motion.div
                      className={styles.barFill}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${ability.level}%` }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.1,
                      }}
                    />
                  </div>
                )}

                {/* Grid/radar modes: implement when design is ready */}
                {displayMode === "grid" && (
                  <span className={styles.levelBadge}>{ability.level}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default AbilityGraph;
