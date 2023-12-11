import { Taggable } from "./model";

import type { IsEqual } from "@/utils";

export type HasExactTags<T, U extends string[]> = T extends Taggable<string[]>
  ? IsEqual<T, U>
  : false;
