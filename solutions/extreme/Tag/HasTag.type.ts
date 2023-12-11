/*
    HasTag<B, T extends string> checks if type B is tagged with tag T (and returns true or false)

    https://github.com/type-challenges/type-challenges/blob/main/questions/00697-extreme-tag/README.md
*/

import type { Includes } from "@easy/Includes.type";

import type { Taggable } from "./model";

import type { GetTags } from "./GetTags.type";

export type HasTag<T, U extends string> = T extends Taggable<string[]>
  ? Includes<GetTags<T>, U>
  : false;
