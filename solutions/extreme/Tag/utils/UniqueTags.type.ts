import type { Unique } from "@medium/Unique.type";

export type UniqueTags<T extends [...string[]]> = Unique<T, [], string>;
