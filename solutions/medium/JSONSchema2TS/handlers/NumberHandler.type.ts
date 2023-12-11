import type { NumberSchema } from "../schemas";
import type { EnumerableHandler } from "./EnumerableHandler.type";

export type NumberHandler<T> = T extends NumberSchema
  ? EnumerableHandler<T, number>
  : never;
