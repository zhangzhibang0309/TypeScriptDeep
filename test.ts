type T = {
  hasPermission: boolean,
  url?: string
}

let obj: T = {
  hasPermission: false,
  url: "sad"
}

if (obj.hasPermission) {
  bar(obj.url ?? '')
}

function bar(str: string) {
  console.log(str)
}

