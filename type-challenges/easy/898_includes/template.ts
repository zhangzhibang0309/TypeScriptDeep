import type { Equal } from '@type-challenges/utils'


type Includes<T extends readonly any[], U> =
  T extends [infer R, ...infer L]
  ? Equal<R, U> extends true ? true : Includes<L, U>
  : false

export { Includes }