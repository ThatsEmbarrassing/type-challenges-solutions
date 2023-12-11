import type { Push } from "@easy/Push.type";

import type { Taggable } from "../model";

import type { UniqueTags } from "./UniqueTags.type";

export type AppendTag<
  B extends Taggable<string[]>,
  T extends string
> = Taggable<UniqueTags<Push<B["_tags"], T>>>;
