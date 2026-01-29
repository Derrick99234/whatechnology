# Theme Color System

## Palette

**Light mode**
- Background: #ffffff
- Text: #0f172a
- Card surface: #ffffff
- Muted surface: #f3f4f6
- Primary (interactive): #16a34a
- Accent (interactive hover/focus): #4ade80

**Dark mode**
- Background: #1a1a2e
- Text: #ffffff
- Card surface: #23234a
- Muted surface: #23234a
- Primary (interactive): #16a34a
- Accent (interactive hover/focus): #4ade80

## Where The Colors Live

- CSS variables are defined in [globals.css](file:///c:/Users/USER/Desktop/whatechnology/src/app/globals.css).
- These variables power theme-aware utility classes:
  - Backgrounds: `bg-background`, `bg-card`, `bg-secondary`, `bg-muted`
  - Text: `text-foreground`, `text-muted-foreground`, `text-secondary-foreground`
  - Borders: `border-border`

## Usage Rules

### Backgrounds
- Use `bg-background` for page/section wrappers.
- Use `bg-card` for cards, panels, dropdowns, and elevated surfaces.
- Use `bg-secondary` / `bg-muted` for subtle contrast blocks.

### Text
- Use `text-foreground` for primary text.
- Use `text-muted-foreground` for supporting text and descriptions.

### Interactive (Green Only)
- Use green for interactive elements:
  - Buttons: `bg-primary text-primary-foreground hover:bg-green-600`
  - Links: `text-green-600 hover:text-green-700` (and optionally `hover:underline`)
  - Focus: `focus:ring-2 focus:ring-green-500`

## Theme Toggle

- The theme switcher is implemented as a reusable component: [theme-toggle.tsx](file:///c:/Users/USER/Desktop/whatechnology/src/components/theme-toggle.tsx).
- It is hydration-safe (renders a placeholder until mounted) and uses `resolvedTheme` from `next-themes`.

## Accessibility Notes (WCAG 2.1 AA)

- Default text uses `text-foreground` on `bg-background` (high contrast in both modes).
- Secondary text uses `text-muted-foreground` and should not be used for critical UI actions.
- For buttons, keep `text-primary-foreground` on `bg-primary` and ensure hover states remain readable.

