//구조 분해 할당 (Destructuring assignment)

const user = {
    name: 'Heropy',
    age: 85,
    email: 'whddnd0728@gmail.com'
}

const {name, age, email, address} = user //객체에 속성 추가
console.log(`사용자의 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${age}세 입니다.`)
console.log(`${name}의 이메일 주소는 ${email}입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry'] 
const[a,b,c,d] = fruits //배열도 구조 분해 할당 가능
console.log(a,b,c,d)
