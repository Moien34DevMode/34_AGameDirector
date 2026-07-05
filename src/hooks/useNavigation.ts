import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES, type RouteKey } from '@router/routes';

// ─────────────────────────────────────────────────────────────────────────────
// useNavigation
//
// Thin wrapper around React Router that exposes scene-aware navigation helpers.
// Components should use this hook instead of useNavigate/useLocation directly,
// so future routing changes only require updating this one file.
// ─────────────────────────────────────────────────────────────────────────────

export function useNavigation() {
  const navigate  = useNavigate();
  const location  = useLocation();

  /** Navigate to a scene by its route key */
  const goTo = (key: RouteKey) => navigate(ROUTES[key]);

  /** Returns true when the given route is currently active */
  const isActive = (key: RouteKey) =>
    location.pathname === ROUTES[key];

  /** Navigate back in browser history */
  const goBack = () => navigate(-1);

  return {
    goTo,
    isActive,
    goBack,
    currentPath: location.pathname,
  };
}
