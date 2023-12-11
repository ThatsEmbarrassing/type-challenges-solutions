import type { StringSchema } from "../schemas";
import type { EnumerableHandler } from "./EnumerableHandler.type";

export type StringHandler<T> = T extends StringSchema
  ? EnumerableHandler<T, string>
  : never;
