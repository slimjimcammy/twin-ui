import { type Theme } from "../hooks/useTheme";
import { defaultTheme } from "./defaultTheme";

function deepMerge<T>(target: T, source: Partial<T>): T {
  const output = { ...target };
  for (const key in source) {
    if (
      source[key] !== undefined &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key]) &&
      source[key] !== null
    ) {
      output[key] = deepMerge((target as any)[key], (source as any)[key]);
    } else if (source[key] !== undefined) {
      output[key] = source[key] as any;
    }
  }
  return output;
}

export function createTheme(overrides: Partial<Theme>): Theme {
  return deepMerge(defaultTheme, overrides);
}
