I have verified and updated the codebase to ensure consistent color modes (Light/Dark) across all pages.

**Changes Implemented:**

1.  **Home Page (`src/app/page.tsx`)**:
    -   Fixed the "Services" section to support dark mode (`dark:bg-gray-900`).
    -   Updated Service Cards to have proper dark backgrounds (`dark:bg-gray-800`) and text colors.
    -   Fixed typos where `bg-gr-700` was used instead of `bg-green-700`.

2.  **Big Data Page (`src/app/solution/big-data/page.tsx`)**:
    -   Added comprehensive dark mode support.
    -   Updated the main background, services grid, process section, and text colors to switch correctly between `bg-white/bg-slate-50` (light) and `dark:bg-gray-950/dark:bg-gray-900` (dark).

3.  **Header Component (`src/components/header.tsx`)**:
    -   Fixed the mobile menu background to be theme-aware (White in light mode, Dark Gray in dark mode) instead of always being dark.
    -   Updated mobile menu text colors for better contrast in both modes.

4.  **Verification**:
    -   Audited `src/app/services/page.tsx`, `src/app/solution/cloud-services/page.tsx`, `src/app/solution/cyber-security/page.tsx`, `src/app/about/page.tsx`, and `src/app/contact/page.tsx`.
    -   Confirmed these pages already have correct `dark:` classes for backgrounds, text, and components.

The application now adheres to the design system with consistent `bg-white/gray-50` -> `dark:bg-gray-950/gray-900` and `text-gray-900` -> `dark:text-white` transitions.