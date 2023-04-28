{
    //문제1) 두 수를 입력받아 덧셈하여 반환하는 함수를 구현하시오.
    function sum(v1,v2){
        return v1 + v2;
    }
    const result = sum(1,2);
    console.log(result);
}

{ 
const sum = function(v1, v2){
        return v1 + v2;
    }
    const result = sum(2, 3);
    console.log(`result = ${result}`);
}
{
    const sum = (v1, v2) => v1 + v2;
    const sum2 = (v1, v2) => v1 + v2;
    const result = sum(3, 4);
    const result2 = sum(5, 6);
    console.log("result=" + result);
    console.log(`result2 = ${result2}`); 
}
    
{ 
    //문제2) 요소 1,2,3을 갖는 배열이 주어졌을때 2배수한 결과를 반환하는 함수
    function double(arr){
        for(let i=0; i<arr.length; i++){
            arr[i] *= 2; //arr[i] = arr[i] * 2;
        }
        return arr;
    }
    const arr = [1,2,3];
    const result = double(arr);
    console.log(result);
}

{
    //문제3) 정수를 입력받아 홀수인지 판단하는 함수를 구현하시오.
    function isOdd(num) {
        return num % 2 !== 0;
      }
        console.log(isOdd(3)); // true
        console.log(isOdd(4)); // false
}

//문제4) 입력받는 매개값의 객체 프로퍼티 구조가 아래와 같을 경우
//성별을 판단하여 반환하는 함수를 구현하시오.
//남자면 '남자'를 반환하고 여자면 '여자'를 반하하기로 한다.
//{name:'홍길동', age:30, gender:'남|여'}

{
    function gender(obj){
        let result = '';

        if(obj.gender == '남'){
            result = '남자';
        }else if(obj.gender == '여'){
            result = '여자';
        }else{
            throw new Error('남|여가 아닌 다른 값');
        }
        return result;
    }
        const p1 = {name:'홍길동', age:30, gender:'남'};
        const p2 = {name:'홍길동', age:30, gender:'여'};
        // const p3 = {name:'홍길동', age:30, gender:'남자'};

        console.log(gender(p1));
        console.log(gender(p2));
        // console.log(gender(p3));
    }

{
    function gender(obj){
        let result = '';

        switch(obj, ['gender']){
            case '남':
            break;
            case '여':
            break;
            default : 
            throw new Error('남|여가 아닌 다른 값');
        }
        return result;
    }
}

    // 문제5) 아래 주어진 배열을 매개값으로 입력받아 가장 큰 수를 반환하는
    //       함수를 구현하시오. 배열 = [5, 2, 7, 1]
    {
    function max(arr){
        for(let i=0; i<arr.length; i++){
            arr[i] = max(arr[i]); //arr[i] = arr[i] * 2;
        }
        return arr;
    }
    const arr = [5, 2, 7, 1];
    const result = max(arr);
    console.log(result);
}
{
    function findLargestNumber(numbers) {
        return Math.max(...numbers);
      }
      const numbers = [5, 2, 7, 1];
    console.log(findLargestNumber(numbers)); // 7
}

{
    function max(arr){
        let maxvalue =arr[0];

        for(let ele of arr){
            if(ele > maxvalue){
                maxvalue = ele;
            }
        }
        return maxvalue;
    }
    const arr = [5, 2, 7, 1];
    const result = max(arr);
    console.log(`최대값: ${result}`);
}

//문제6) 문제2에서 원본배열을 유지하고 2배수한 결과를 새로운 배열로 반환하는 함수를 구현하시오.
{
//case1)
    function double(array){
        const arr = array.slice(); //원본 배열 복사
        for(let i=0; i<arr.length; i++){
            arr[i] *= 2; //arr[i] = arr[i] * 2;
        }
        return arr;
    }
    const arr = [1,2,3];
    const result = double(arr);
    console.log(arr, result);
}
{ //case 2)
    function double(arr){
        const array = []; //새로운 배열 생성
        for(let i=0; i<arr.length; i++){
            array.push(arr[i]*2);
        }
        return array;
    }
    const arr = [1,2,3];
    const result = double(arr);
    console.log(arr, result);
}
