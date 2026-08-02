const THEME_KEY = "theme";
export const THEMES = ["light", "dark", "clay", "purple"] as const;
export type Theme = (typeof THEMES)[number];

const THEME_ICONS: Record<Theme, string> = {
  light: "☀️",
  dark: "🌙",
  clay: "🎨",
  purple: "🔮",
};

function getPreferredTheme(): Theme {
  const stored = localStorage.getItem(THEME_KEY) as Theme | null;
  if (stored && THEMES.includes(stored)) return stored;
  return "dark";
}

let themeValue: Theme =
  ((window as unknown as { __theme?: { value: Theme } }).__theme?.value as Theme) ??
  getPreferredTheme();

function persist(): void {
  localStorage.setItem(THEME_KEY, themeValue);
  reflect();
}

function reflect(): void {
  document.firstElementChild?.setAttribute("data-theme", themeValue);

  // Update theme button icon
  const btnIcon = document.querySelector("#theme-btn-icon");
  if (btnIcon) {
    btnIcon.textContent = THEME_ICONS[themeValue] ?? "◐";
  }

  const btn = document.querySelector("#theme-btn");
  if (btn) {
    btn.setAttribute("aria-label", `Current theme: ${themeValue}`);
  }

  // Update menu options active state
  document.querySelectorAll<HTMLElement>("[data-theme-option]").forEach(el => {
    const option = el.dataset.themeOption;
    if (option === themeValue) {
      el.setAttribute("aria-selected", "true");
      el.classList.add("bg-accent/15", "text-accent", "font-bold");
      el.classList.remove("text-muted-foreground");
    } else {
      el.setAttribute("aria-selected", "false");
      el.classList.remove("bg-accent/15", "text-accent", "font-bold");
      el.classList.add("text-muted-foreground");
    }
  });

  // Fill <meta name="theme-color"> with computed background colour
  const bg = window.getComputedStyle(document.body).backgroundColor;
  document
    .querySelector("meta[name='theme-color']")
    ?.setAttribute("content", bg);
}

export function setTheme(newTheme: Theme): void {
  if (THEMES.includes(newTheme)) {
    themeValue = newTheme;
    persist();
  }
}

export function cycleTheme(): void {
  const currentIndex = THEMES.indexOf(themeValue);
  const nextIndex = (currentIndex + 1) % THEMES.length;
  themeValue = THEMES[nextIndex];
  persist();
}

function setup(): void {
  reflect();

  const themeBtn = document.querySelector<HTMLButtonElement>("#theme-btn");
  const themeMenu = document.querySelector<HTMLElement>("#theme-menu");

  if (themeBtn && themeMenu) {
    themeBtn.onclick = e => {
      e.stopPropagation();
      const isOpen = !themeMenu.classList.contains("hidden");
      if (isOpen) {
        themeMenu.classList.add("hidden");
        themeMenu.classList.remove("flex");
        themeBtn.setAttribute("aria-expanded", "false");
      } else {
        themeMenu.classList.remove("hidden");
        themeMenu.classList.add("flex");
        themeBtn.setAttribute("aria-expanded", "true");
      }
    };

    // Close menu on click outside
    document.addEventListener("click", e => {
      if (
        !themeMenu.contains(e.target as Node) &&
        !themeBtn.contains(e.target as Node)
      ) {
        themeMenu.classList.add("hidden");
        themeMenu.classList.remove("flex");
        themeBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Handle clicking options
  document.querySelectorAll<HTMLElement>("[data-theme-option]").forEach(el => {
    el.onclick = e => {
      e.stopPropagation();
      const val = el.dataset.themeOption as Theme;
      if (val) {
        setTheme(val);
        if (themeMenu) {
          themeMenu.classList.add("hidden");
          themeMenu.classList.remove("flex");
          if (themeBtn) themeBtn.setAttribute("aria-expanded", "false");
        }
      }
    };
  });
}

setup();

// Re-run after View Transitions navigation.
document.addEventListener("astro:after-swap", setup);

// Carry theme-color across View Transitions
document.addEventListener("astro:before-swap", event => {
  const color = document
    .querySelector("meta[name='theme-color']")
    ?.getAttribute("content");
  if (color) {
    (event as { newDocument: Document }).newDocument
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", color);
  }
});

