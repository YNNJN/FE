// 1. 조건문
// if, else if, else

const name = 'admin'
if (name === 'admin') {
    console.log('관리자님 환영합니다')
}

const name = '김윤진'
if (name === 'admin') {
    console.log('관리자님 환영합니다')
} else {
    console.log(`${name}님 환영합니다`)
}

const name = '김윤진'
if (name === 'admin') {
    console.log('관리자님 환영합니다')
} else if (name === 'manager') {
    console.log('매니저님 환영합니다')
} else {
    console.log(`${name}님 환영합니다`)
}

// switch
const myName = 'admin'
switch(myName) {
    case 'admin' : {
        console.log('관리자님 환영합니다')
        break
    }
    case 'manager' : {
        console.log('매니저님 환영합니다')
        break
    }
    default: {
        console.log(`${myName}님 환영합니다`)
    }
}

// 반복문
// while
let i = 0

while (i < 6) {
    console.log(i)
    i++
}

// for
for (let i = 0; i < 6; i++) { // let이 없을 경우 i가 global로 선언됨 - 지양
    console.log(i)
}

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue
    }
    console.log(i)
}

// for of
// 배열에서 요소를 하나씩 순회하며 반복하는 반복문
const numbers = [0, 1, 2, 3]

for (const number of numbers) {
    console.log(number)
}

// for in
// Object의 key를 순회하며 반복하는 반복문
// Array의 경우 index를 순회한다
const fruits = {a: 'apple', b: 'banana'}

for (const key in fruits) {
    console.log(key)
    console.log(fruits[key])
}

// Q. for문에서 idx에 값이 새롭게 할당되는 것 아닌가,  왜 const 쓸 수 있는건지?
// A. const는 block 안에서만 재할당이 안되는 것
// for는 let, 다른 반복문은 let / const 뭐든 ok
const fruits = ['apple', 'banana']

for (const idx in fruits) {
    console.log(idx) // 0,1
    console.log(fruits[idx])
}

// forEach
// 많이 사용
const ssafy5ban = ['종종', '혜혜', '경경']

ssafy5ban.forEach(function(name){ // 익명함수
    console.log(name)
})

// like enumerate
ssafy5ban.forEach(function(name, idx){
    console.log(name, idx)
})
