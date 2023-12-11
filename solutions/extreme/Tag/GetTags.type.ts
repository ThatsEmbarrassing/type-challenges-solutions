/*
    GetTags<B> retrieves a list of all tags of a type B.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00697-extreme-tag/README.md
*/

import type { UnionToIntersection } from "@hard/UnionToIntersection.type";

import type { Taggable } from "./model";
import type { IsIndeterminate } from "./utils";

type GetUnsafeTags<T> = T extends Taggable<string[]> ? T["_tags"] : T;

export type GetTags<T> = IsIndeterminate<NonNullable<T>> extends true
  ? []
  : IsIndeterminate<UnionToIntersection<NonNullable<T>>> extends true
  ? []
  : GetUnsafeTags<UnionToIntersection<NonNullable<T>>>;
