//JS 데이터들 
// String, Number, Boolean, undefined, null, Array, Object
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String


let result = 'Hello world!'.indexOf('world')
console.log(result) // expect : 6
result = 'Hello world!'.indexOf('never')
console.log(result) // expect : -1 (못찾으면 -1)

const str = 'Hello world'
console.log(str.length) //expect : 11

console.log(str.slice(0, 3)) // expect : 'Hel' , 인수(시작점, 끝점)범위 만큼 잘라내줌
console.log(str.slice(6,11))// expect: world

console.log(str.replace('world', 'nice')) //expect: Hello nice

const email = 'whddnd0728@gmail.com'
console.log(email.match(/.+(?=@)/)[0]) //정규표현식 사용 후 0번째 배열 사용

const p_str = '     Hello world     '
console.log(p_str.trim()) // expect: Hello world