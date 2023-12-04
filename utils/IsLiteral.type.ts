import type { IsValue } from "./IsValue.type";

export type IsLiteral<T extends string> = IsValue<string, T>;
