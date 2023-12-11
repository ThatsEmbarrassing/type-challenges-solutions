import type { Enumerable } from "../types";
import type { BaseSchema } from "./BaseSchema.interface";

export interface NumberSchema extends BaseSchema, Partial<Enumerable<number>> {
  type: "number";
}
