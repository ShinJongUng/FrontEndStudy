//얕은 복사 (Shallow copy), 깊은 복사 (Deep copy)
import _ from 'lodash'

const user = {
    name: 'Heropy',
    age: 85,
    emails: ['whddnd0728@gmail.com']
}
//const copyUser = user 주소 자체를 긁어와서 복사함
//const copyUser = Object.assign({}, user)  새로운 주소 (배열)에 copy
//const copyUser = {...user} // 전개 연산자로도 가능 이 세가지는 얕은 복사라고 부름

const copyUser =_.cloneDeep(user) //깊은 복사를 lodash를 통하여 사용

console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('-------')
console.log('-------')

user.emails.push('neo@naver.com')
console.log(user.emails === copyUser.emails)

console.log('user', user)
console.log('copyUser', copyUser)
