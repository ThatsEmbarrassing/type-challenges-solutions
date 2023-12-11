/*
    From T, pick a set of properties whose type are not assignable to U.

    https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.md
*/

import type { If } from "@easy/If.type";

import type { Extends } from "@/utils";

type OmitByType<T extends object, V> = {
  [Key in keyof T as If<Extends<T[Key], V>, never, Key>]: T[Key];
};

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<
    Equal<
      OmitByType<Model, string>,
      { count: number; isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<
    Equal<
      OmitByType<Model, number>,
      { name: string; isReadonly: boolean; isEnable: boolean }
    >
  >
];

export {};
