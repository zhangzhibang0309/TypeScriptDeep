// union extends union的时候，行为和其他不太一样，会一一去对比
type MyExclude<T, U> = T extends U ? never : T