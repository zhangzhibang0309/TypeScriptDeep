type Length<T extends readonly any[]> =T["length"]

// 这种定长定死额数组，其实就是tuple
// tuple和数组的区别,就是tuple长度确定
type tuple =  [string,number]
type a = tuple["length"]
type array =  any[]
type b = array["length"]
// 一般来说，只有any[] numgber[]这种的才是数组类型，[1,2,3]这其实是个tuple类型，因为已经固定