import type { IsDigit } from "./IsDigit.type";
import type { IsLiteral } from "./IsLiteral.type";
import type { IsSymbol } from "./IsSymbol.type";

export type IsKey<T> = T extends string
  ? IsLiteral<T>
  : T extends number
  ? IsDigit<T>
  : T extends symbol
  ? IsSymbol<T>
  : false;
