import { type ReactNode } from "react";
import styles from "./MainLayout.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// MainLayout — the outermost structural shell of the application.
//
// Responsibilities:
//   • Provides the full-screen container that all scenes live inside
//   • Reserves space for persistent UI (navigation, overlays)
//   • Never contains portfolio content directly
//
// Structure:
//   <MainLayout>
//     <NavigationLayout>…</NavigationLayout>   ← added when implementing nav
//     {children}                                ← AppRouter renders scenes here
//   </MainLayout>
// ─────────────────────────────────────────────────────────────────────────────

export interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      {/*
        Navigation slot — uncomment and add NavigationLayout here once the
        navigation UI is implemented.
      */}

      <main className={styles.main} id="main-content">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
