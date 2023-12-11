# CHANGELOG

Since 2023.12.04 I'll be keeping the github repository's changelog and write about changes in my solutions.

## 2023.12.11

### Added

- Solutions:
  - medium:
    - [JSONSchema2TS](./solutions/medium/JSONSchema2TS/JSONSchema2TS.type.ts)
    - [All](./solutions/medium/All.type.ts)
    - [AppearOnlyOnce](./solutions/medium/AppearOnlyOnce.type.ts)
    - [Diff](./solutions/medium/Diff.type.ts)
    - [Flip](./solutions/medium/Flip.type.ts)
    - [Trunc](./solutions/medium/Trunc.type.ts)
  - hard:
    - [IsAny](./solutions/hard/IsAny.type.ts)
    - [Join](./solutions/hard/Join.type.ts)
  - extreme
    - [Tag](./solutions/extreme/Tag/index.ts) **(not completed yet)**
- Constants:
  - [Iterable](./constants/Iterable.type.ts)
- Utils:
  - [Extends](./utils/Extends.type.ts)
  - [GetNumber](./utils/GetNumber.type.ts)
  - [IsZero](./utils/IsZero.type.ts) - moved it from `IsTruthy`

### Other

- Utils:
  - [Not](./utils/Not.type.ts) - renamed it from `ReverseBoolean` to `Not`

## 2023.12.04

### Added

- Solutions:

  - medium:
    - [Absolute](./solutions/medium/Absolute.type.ts)
    - [AnyOf](./solutions/medium/AnyOf.type.ts)
    - [DeepMutable](./solutions/medium/DeepMutable.type.ts)
    - [ExtractToObject](./solutions/medium/ExtractToObject.type.ts)
    - [Filter](./solutions/medium/Filter.type.ts)
    - [Integer](./solutions/medium/Integer.type.ts)
    - [Unique](./solutions/medium/Unique.type.ts)
    - [Without](./solutions/medium/Without.type.ts)
  - hard:
    - [Assign](./solutions/hard/Assign.type.ts)
    - [UnionToIntersections](./solutions/hard/UnionToIntersection.type.ts)

- Utils:

  - [Copy](./utils/Copy.type.ts)
  - [FunctionType](./utils/FunctionType.type.ts)
  - [IsTruthy](./utils/IsTruthy.type.ts)
  - [IsValue](./utils/IsValue.type.ts)
  - [RemoveFromArrayBy](./utils/RemoveFromArrayBy.type.ts)
  - [ReverseBoolean](./utils/ReverseBoolean.type.ts)
  - [ToArray](./utils/ToArray.type.ts)

- Constants:
  - [Truthy](./constants/Truthy.type.ts)
  - [SpacedString](./constants/SpacedString.type.ts)

### Fixed

- Solutions:
  - medium:
    - [Permutation](./solutions/medium/Permutation.type.ts) - fixed a bug when the case `Permutation<never>` gave an error

### Other

- Constants:
  - [ObjectKeyType](./constants/ObjectKeyType.type.ts) - moved it from `utils`
