import type { BaseSchema } from "./BaseSchema.interface";

export interface ObjectSchemaProperties<V extends BaseSchema> {
  [Key: string]: V;
}

export interface ObjectSchema<V extends BaseSchema> extends BaseSchema {
  type: "object";
  properties?: ObjectSchemaProperties<V>;
  required?: string[];
  additionalProperties?: boolean;
}
