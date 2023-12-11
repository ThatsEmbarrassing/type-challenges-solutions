export type GetNumber<T extends string> = T extends `${infer P extends number}`
  ? P
  : never;
