export type RemoveFromArrayBy<T extends [...unknown[]], P> = T extends [
  infer F,
  ...infer L
]
  ? F extends P
    ? RemoveFromArrayBy<L, P>
    : [F, ...RemoveFromArrayBy<L, P>]
  : [];
