export const Palette = {
  /* 标准色 */
  red: "#e54d42",
  orange: "#f37b1d",
  yellow: "#fbbd08",
  olive: "#8dc63f",
  green: "#39b54a",
  cyan: "#1cbbb4",
  blue: "#0081ff",
  purple: "#6739b6",
  mauve: "#9c26b0",
  pink: "#e03997",
  brown: "#a5673f",
  grey: "#8799a3",
  black: "#333333",
  darkGray: "#666666",
  gray: "#aaaaaa",
  ghostWhite: "#f1f1f1",
  white: "#ffffff",
  /* 浅色 */
  redLight: "#fadbd9",
  orangeLight: "#fde6d2",
  yellowLight: "#fef2ce",
  oliveLight: "#e8f4d9",
  greenLight: "#d7f0db",
  cyanLight: "#d2f1f0",
  blueLight: "#cce6ff",
  purpleLight: "#e1d7f0",
  mauveLight: "#ebd4ef",
  pinkLight: "#f9d7ea",
  brownLight: "#ede1d9",
  greyLight: "#e7ebed",
  /* 渐变色 */
  gradualRed: "linear-gradient(45deg, #f43f3b, #ec008c)",
  gradualOrange: "linear-gradient(45deg, #ff9700, #ed1c24)",
  gradualGreen: "linear-gradient(45deg, #39b54a, #8dc63f)",
  gradualPurple: "linear-gradient(45deg, #9000ff, #5e00ff)",
  gradualPink: "linear-gradient(45deg, #ec008c, #6739b6)",
  gradualBlue: "linear-gradient(45deg, #0081ff, #1cbbb4)",
  /* 阴影透明色 */
  shadowSize: "3px 3px 4px",
  redShadow: "rgba(204, 69, 59, 0.2)",
  orangeShadow: "rgba(217, 109, 26, 0.2)",
  yellowShadow: "rgba(224, 170, 7, 0.2)",
  oliveShadow: "rgba(124, 173, 55, 0.2)",
  greenShadow: "rgba(48, 156, 63, 0.2)",
  cyanShadow: "rgba(28, 187, 180, 0.2)",
  blueShadow: "rgba(0, 102, 204, 0.2)",
  purpleShadow: "rgba(88, 48, 156, 0.2)",
  mauveShadow: "rgba(133, 33, 150, 0.2)",
  pinkShadow: "rgba(199, 50, 134, 0.2)",
  brownShadow: "rgba(140, 88, 53, 0.2)",
  greyShadow: "rgba(114, 130, 138, 0.2)",
  grayShadow: "rgba(114, 130, 138, 0.2)",
  blackShadow: "rgba(26, 26, 26, 0.2)",
};

export interface ColorStack {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export namespace Colors {
  export const Slate: ColorStack = {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  };

  export const Gray: ColorStack = {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  };
  export const Zinc: ColorStack = {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
  };
  export const Neutral: ColorStack = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  };
  export const Stone: ColorStack = {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
  };
  export const Red: ColorStack = {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  };
  export const Orange: ColorStack = {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  };
  export const Amber: ColorStack = {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  };
  export const Yellow: ColorStack = {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
  };
  export const Lime: ColorStack = {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
  };
  export const Green: ColorStack = {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  };
  export const Emerald: ColorStack = {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  };
  export const Teal: ColorStack = {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
  };
  export const Cyan: ColorStack = {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
  };
  export const Sky: ColorStack = {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  };
  export const Blue: ColorStack = {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  };
  export const Indigo: ColorStack = {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
  };
  export const Violet: ColorStack = {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
  };
  export const Purple: ColorStack = {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
  };
  export const Fuchsia: ColorStack = {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
  };
  export const Pink: ColorStack = {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
  };
  export const Rose: ColorStack = {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
  };
}