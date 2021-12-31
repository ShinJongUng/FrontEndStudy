const userAge = {
    name: 'Heropy',
    age: 85
}
const userEmail = {
    name: 'Heropy',
    email: 'whddnd0728@gmail.com'
}

const target = Object.assign(userAge,userEmail) // 두개의 객체 데이터를 병합 (map과 비슷)
console.log(target) // 객체데이터 출력
console.log(userAge)// 객체데이터 출력
console.log(target === userAge)

const a = {k:123}
const b = {k:123}
console.log(a===b) // false가 나오는 이유는 메모리 주소의 차이 때문


const keys = Object.keys(target)
console.log(keys)

console.log(target['email'] ) //JS에서의 인덱싱 방법

const values = keys.map(key =>target[key])
console.log(values)
