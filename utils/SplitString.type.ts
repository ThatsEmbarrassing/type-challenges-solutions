export type SplitString<
  T extends string,
  M extends string = "",
  L extends string[] = []
> = T extends `${infer P}${M}${infer K}` ? SplitString<K, M, [P, ...L]> : L;
