import type { Equal, Expect } from '@type-challenges/utils'

// as const 就是将这个变量转成字面量类型，也就是他的类型就是它本身
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// 把这种类型转成对象字面量类型
type tupleType = TupleToObject<typeof tuple>
// type tupleType = {
//   tesla: "tesla";
//   "model 3": "model 3";
//   "model X": "model X";
//   "model Y": "model Y";
// }

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { "tesla": 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>