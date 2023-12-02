/*
    Compute the length of a string literal, which behaves like String#length.

    https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md
*/

import type { SplitString } from "@/utils";
import type { Length } from "@easy/Length.type";

type LengthOfString<T extends string> = Length<SplitString<T>>;

// #=============================================

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];
