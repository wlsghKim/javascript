//map
// forEach 같이 순회하면서, 콜백함수에서의 실행결과를 리턴한 값으로 이루어진 배열을 만들어 반환
// map()은 연산의 결과로 새로운 배열을 생성하고자할 때 사용된다.

//반환값 -반환타입은 찾은 요소의 타입 없으면 undefinded

//매개값
// callback
// 새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집니다.
// currentValue
// 처리할 현재 요소.
// index Optional
// 처리할 현재 요소의 인덱스.
// array Optional
// map()을 호출한 배열.
// thisArg Optional
// callback을 실행할 때 this로 사용되는 값.

const numberArr = [1, 2, 3, 4, 5];
const numberMapArr = numberArr.map((item) => {
    return (item % 2 === 0) ? 'even' : 'odd'; // 연산한 결과값을 넣어 배열 반환
});
 
console.log(numberMapArr); // ['odd', 'even', 'odd', 'even', 'odd']

const students = [
  {id:1, name:"james"},
  {id:2, name:"tim"},
  {id:3, name:"john"},
  {id:4, name:"brian"}
];
console.log('--------------------------------------------------');
// for문
const arr = new Array();
for (let obj of students){
 arr.push(obj.name);   
}
console.log(arr); // ['james', 'tim', 'john', 'brian']
// map
const names = students.map(student =>student.name);
console.log(names);  // ['james', 'tim', 'john', 'brian']


//filter
//주어진 배열을 순회하면서 콜백 함수의 반환값이 true에 해당하는 요소로만 구성된 새로운 배열을 생성하여 반환

// 반환값: 테스트를 통과한 요소로 이루어진 새로운 배열 /테스트 통과하지 못할시 빈배열 반환

// 매개값
// element : 요소값
// index : 요소의 인덱스
// array : 사용되는 배열 객체
// thisArg : filter에서 사용될 this 값
console.log('--------------------------------------------------');
(function test(){
    const testArray = [1,2,3,4,5];
    const newArray = testArray.filter(function(element){
        return element<=3;
    });
    console.log(newArray);
})(); [1,2,3]

//reduce

// 콜백 함수의 실행된 반환값(initialValue)을 전달 받아 연산의 결과값 반환.

// 반환값 : 누적 계산의 결과값

// 매개값
// 누산기accumulator (acc)
// 현재 값 (cur)
// 현재 인덱스 (idx)
// 원본 배열 (src)
// initialValue(optional : 사용해도 되고 안해도 되고) : callback의 최초 호출에서 첫 번째 인수에 제공하는 값.
// 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.
console.log('--------------------------------------------------');
const numbers = [1, 2, 3, 4]; 

// 일반 for문
let result = 0; 
for (i = 0; i < numbers.length; i++) { 
   result += numbers[i]; 
}
console.log(result); // 20;

//-----------------------------------------

const result2 = numbers.reduce((number1, number2) => number1 + number2); 
/* 
  1,2 => 3  배열값 1번째, 2번째 부터 시작
  3,3 => 6
  6,4 => 10
*/
console.log(result2); // 10;

//-------------------------------------------

const result3 = numbers.reduce((number1, number2) => number1 + number2, 10); 
/* 
  10,1 => 11   initialValue값, 배열값 1번째 부터 시작
  11,2 => 13
  13,3 => 16
  16,4 => 20
*/
console.log(result3); // 20;

//forEach
// for문을 대체하는 고차 함수.
// 리턴값: 없음
console.log('--------------------------------------------------');
const numberArr1 = [1, 2, 3, 4, 5];
let total = 0;
 
numberArr1.forEach((item) => {
    total += item;
});
 
console.log(total); // 15

//sort
// 배열 정렬.
// 단, 복사본이 만들어지는게 아니라 원 배열이 정렬됨.

// 리턴값 : sorting 된 값
// 매개값 
// compareFunction
// 정렬 순서를 정의하는 함수.
console.log('--------------------------------------------------');
const Numbers = [4, 2, 5, 1, 3];
Numbers.sort(function(a, b) {
  return a - b;
});
console.log(Numbers);

// find

// find()는 찾고자 하는 값을 그대로 반환한다
// 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 
// 그런 요소가 없다면 undefined를 반환합니다.

// 반환값 -반환타입은 찾은 요소의 타입. 없으면 undefinded

// 매개변수
// callback
// 배열의 각 값에 대해 실행할 함수. 
// 아래의 세 인자를 받습니다.

// _ element _ : 콜백함수에서 처리할 현재 요소.

// indexOptional
// 콜백함수에서 처리할 현재 요소의 인덱스.

// arrayOptional
// find 함수를 호출한 배열.

// thisArg
// 선택 항목. 콜백이 호출될 때 this로 사용할 객체.

console.log('--------------------------------------------------');

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// Expected output: 12

console.log('--------------------------------------------------');

const NumberArr = [1, 3, 3, 5, 7];
const objectArr = [
    { name: 'Harry', age: 20 },
    { name: 'Kim', age: 30 },
    { name: 'Steve', age: 40 }
];
 
console.log(objectArr.find(item => {
   return item.age === 20 
}));