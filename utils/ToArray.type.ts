export type ToArray<T extends unknown | [...unknown[]]> = T extends [
  ...unknown[]
]
  ? T
  : [T];
