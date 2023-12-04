import type { IsValue } from "./IsValue.type";

export type IsSymbol<T extends symbol> = IsValue<symbol, T>;
