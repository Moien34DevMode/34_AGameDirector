import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@context/ThemeContext";
import { AppRouter } from "@router/index";
import MainLayout from "@layouts/MainLayout/MainLayout";

// ─────────────────────────────────────────────────────────────────────────────
// App — root component.
//
// Provider order (outermost → innermost):
//   BrowserRouter  → enables React Router throughout the tree
//   ThemeProvider  → provides the active theme to all components
//   MainLayout     → persistent UI shell (navigation, scroll container)
//   AppRouter      → renders the active scene inside MainLayout
//
// `import.meta.env.BASE_URL` is injected by Vite at build time.
// In development it is '/', in production it matches the `base` in vite.config.ts.
// This ensures React Router routes correctly on GitHub Pages sub-paths.
// ─────────────────────────────────────────────────────────────────────────────

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
