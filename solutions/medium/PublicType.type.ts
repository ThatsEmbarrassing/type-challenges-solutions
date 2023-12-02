/*
    Remove the key starting with _ from given type T.

    https://github.com/type-challenges/type-challenges/blob/main/questions/28333-medium-public-type/README.md
*/

import type { If } from "@easy/If.type";
import type { StartsWith } from "./StartsWith.type";

type RemoveIfStartsWithUnderscore<T extends string> = If<
  StartsWith<T, "_">,
  never,
  T
>;

type PublicType<T extends object> = {
  [Key in keyof T as RemoveIfStartsWithUnderscore<Key & string>]: T[Key];
};

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<PublicType<{ a: number }>, { a: number }>>,
  Expect<Equal<PublicType<{ _b: string | bigint }>, {}>>,
  Expect<Equal<PublicType<{ readonly c?: number }>, { readonly c?: number }>>,
  Expect<Equal<PublicType<{ d: string; _e: string }>, { d: string }>>,
  Expect<Equal<PublicType<{ _f: () => bigint[] }>, {}>>,
  Expect<Equal<PublicType<{ g: "_g" }>, { g: "_g" }>>,
  Expect<Equal<PublicType<{ __h: number; i: unknown }>, { i: unknown }>>
];

export {};
