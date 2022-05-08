// 这个比较简单，需要注意的就是最好别用any，这里可以用unknown代替
type Concat<T extends unknown[], U extends unknown[]> = [...T,...U]

// 两道拓展，使用infer和spread实现
// 1.取数组第一个
type FirstArr<T extends unknown[]> = T extends [infer first,...infer rest] ? first : never
// 2.取数组最后一个
type LastArr<T extends unknown[]> = T extends [...infer rest,infer last] ? last : never