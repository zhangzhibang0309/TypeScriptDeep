// let const 这种是js世界
// type interface这种是ts类型世界
// 次元之门就是typeof

// 对象或者说type key只能是三种类型number string symbol，所以要把这里的any[]给改掉
type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [P in T[number]]: P
}

// 使用js实现这么个功能
function tupleObj(array) {
  // 但是要判断array里的元素是否符合number | string | symbol这三种类型
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number" || array[i] !== "string" || array[i] !== "symbol") return new Error("error")
  }

  const obj = {}

  array.forEach(item => {
    obj[item] = item
  });

  return obj
}