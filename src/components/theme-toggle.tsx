"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

type ThemeToggleProps = {
  className?: string;
};

function useIsHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const hydrated = useIsHydrated();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={
        className ??
        "p-2 rounded-lg bg-secondary text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
      }
      aria-label="Toggle theme"
    >
      {hydrated ? (
        isDark ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )
      ) : (
        <div className="w-5 h-5" />
      )}
    </button>
  );
}
