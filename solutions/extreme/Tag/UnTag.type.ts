/*
    Add type UnTag<B>, which removes all tags from type B

    https://github.com/type-challenges/type-challenges/blob/main/questions/00697-extreme-tag/README.md
*/

import type { Taggable } from "./model";
import type { GetType } from "./utils";

export type UnTag<T> = T extends Taggable<string[]>
  ? GetType<T, T["_tags"]>
  : T;
