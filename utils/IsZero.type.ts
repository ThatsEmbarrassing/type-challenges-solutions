import type { Extends } from "./Extends.type";

export type IsZero<T extends number> = Extends<T, 0>;
