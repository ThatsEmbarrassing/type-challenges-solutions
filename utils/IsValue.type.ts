import type { Extends } from "./Extends.type";
import type { Not } from "./Not.type";

export type IsValue<T, V> = Not<Extends<T, V & T>>;
