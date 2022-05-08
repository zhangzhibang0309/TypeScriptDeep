type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer X) => any ? X : never

// 像下面这种空[]也会被infer，所以never不会走
const baz = (): void => { }
type a = MyParameters<typeof baz>


export { MyParameters }
