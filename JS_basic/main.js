// 데이터 불변성 (Immutability)

//기본 데이터: String, Number, Boolean, undefined, null
//참조형 데이터: Object, Array, function

let a= 1
let b =4
console.log(a, b, a === b)
b = a
console.log(a, b, a === b)
a = 7
console.log(a, b, a === b)
let c = 1
console.log(c, b, c === b)


let d = {k:1}
let e = {k:1}
console.log(d, e, d === e)
d.k = 7
e = d
console.log(d, e, d === e)
d.k = 2
