//JS 데이터들 
// String, Number, Boolean, undefined, null, Array, Object
//Array mdn: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers[1]) // expect: 2
console.log(fruits) // expect: Array Data

console.log(fruits.length) // expect: 3 (배열 사이즈를 알 수 있음)

console.log(numbers.concat(fruits)) // expect: 2개의 배열을 병합하여 새로운 배열을 만들어줌 (원본은 수정되지 않음)

const find = numbers.find(element => element > 3) // 함수 인자안에 함수는 *콜백 함수*
console.log(find) // expect: 4

fruits.forEach(function (element, i){
    console.log(element, i)
}) //expect: Apple 0 Banana 1 Cherry 2

const a = fruits.forEach(function(fruit, index){
    console.log(`${fruit}-${index}`)
})//expect: Apple-0 Banana-1 Cherry-2

const b = fruits.map((fruit, index) =>({
    id: index,
    name:fruit
}))// 데이터를 변환하여 새로운 배열로 만드는 함수가 map이다
console.log(b)


const c = numbers.map(number => number < 3)
console.log(c) //expect: [true true false false]

const d = numbers.filter(number => number < 3)
console.log(d) //expect: [1, 2]

const e = fruits.find(fruit => /^B/.test(fruit)) // 정규표현식을 통해 대문자 B로 시작하는 것을 찾아 출력
console.log(e)

const f = fruits.findIndex(fruit => /^C/.test(fruit)) // 정규표현식을 통해 대문자 C로 시작하는 것을 찾아 인덱스 번호를 출력
console.log(f)

const g = numbers.includes(3)
console.log(g) //3이 포함 되어 있나요? Bool형

numbers.push(5) // 배열 맨 뒤에 5를 삽입
numbers.unshift(0) // 배열 맨 앞에 0을 삽입 
console.log(numbers)

numbers.reverse() // 배열 뒤집기
console.log(numbers)
numbers.reverse()

numbers.splice(2, 1) //2번째 인덱스에서 1개의 인덱스를 제거
console.log(numbers)
