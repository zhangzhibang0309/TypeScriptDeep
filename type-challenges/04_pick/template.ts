type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// 用js实现逻辑是怎么样的呢
function MyPick(K, T) {
  const obj = {}
  T.forEach(item => {
    if (item in K) obj[item] = K[item]
  })

  return obj
}
// 写完之后把上面的转成ts的类型别名