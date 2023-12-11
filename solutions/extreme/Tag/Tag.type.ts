/*
  Write a function Tag<B, T extends string> that takes a type B other than null and undefined and returns a type labeled with the string literal type T.

  https://github.com/type-challenges/type-challenges/blob/main/questions/00697-extreme-tag/README.md
*/

import type { Taggable } from "./model";
import type { AppendTag, IsIndeterminate } from "./utils";

import type { UnTag } from "./UnTag.type";

type _UnsafeTag<B, T extends string> = B extends Taggable<string[]>
  ?
      | (UnTag<Exclude<B, UnTag<B>>> & AppendTag<Taggable<B["_tags"]>, T>)
      | UnTag<Exclude<B, UnTag<B>>>
  : (B & AppendTag<Taggable<[]>, T>) | B;

export type Tag<B, T extends string> = IsIndeterminate<B> extends true
  ? AppendTag<Taggable<[]>, T>
  : B extends NonNullable<infer P>
  ? _UnsafeTag<P, T>
  : B;
