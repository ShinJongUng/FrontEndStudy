//JS 데이터들 
// String, Number, Boolean, undefined, null, Array, Object

const pi = 3.1415926535
console.log(pi)

const str = pi.toFixed(2) // c에서 변환명세로 소숫점 찍는 것과 같음
console.log(str)
console.log(typeof str) //문자

const integer = parseInt(str) // 전역함수 c#에서 int.parse와 같은 역할
const float = parseFloat(str)
console.log(integer)// expect: 3
console.log(float) // expect: 3.14
console.log(typeof integer, typeof float) // expect: number number

//Math mdn  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log('abs : ', Math.abs(-12)) //expect : 12
console.log('min : ', Math.min(2,8), 'max: ', Math.max)// expect: 2 8
console.log('ceil: ', Math.ceil(3.14)) //expect: 4 (정수단위 올림)
console.log('floor: ', Math.floor(3.14)) //expect: 3 (정수단위 내림)
console.log('round: ', Math.round(3.14)) //expect: 3 (정수단위 반올림)
console.log('random: ', Math.random()) //expect: ?.??
console.log('random int: ', Math.floor(Math.random()*10)) // expect: int
