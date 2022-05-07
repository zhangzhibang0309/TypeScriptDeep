// 第一种方式，通过extends判断[]的情况
// type First<T extends any[]> = T extends [] ? never : T[0]

// 第二种方式，通过length
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

// 第三种方式，通过union
type t1 = [1,2,3]
type t2 = 1 extends t1[number] ? true : false

// T=[] => T[number]是never
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never