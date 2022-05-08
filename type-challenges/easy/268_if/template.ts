// 类型兼容性 null在非严格模式下兼容任何类型
// 解决方式：修改tsconfig，将类型兼容性改为严格模式
type If<C extends (true | false), T, F> = C extends true ? T: F