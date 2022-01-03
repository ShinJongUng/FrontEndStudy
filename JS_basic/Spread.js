// 전개연산자 (Spread)

const fruits = ['Apple', 'Banana','cherry']
console.log(fruits)
console.log(...fruits) //전개연산자 console.log('Apple', 'Banana','cherry')

const toObject = (a, b, c) =>({a, b, c})


console.log(toObject(...fruits))
