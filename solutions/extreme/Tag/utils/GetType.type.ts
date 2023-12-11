import type { Taggable } from "../model";

export type GetType<
  T extends Taggable<U>,
  U extends string[]
> = T extends infer L & Taggable<U> ? L : T;
