//문제1) 두 수를 입력받아 덧셈하여 반환하는 함수를 구현하시오.
    {
        function sum (v1, v2){
            return v1 + v2;
        }
        const result = sum(10, 20);
        console.log(result);
    }
    {
        const sum = (v1, v2) => v1 + v2;
        const result = sum(10, 20);
        console.log("result=" + result);
    }
//문제2) 요소 1,2,3을 갖는 배열이 주어졌을때 2배수한 결과를 반환하는 함수
   {
    function double(arr){
       for(let i = 0; i<arr.length; i++){
        arr[i] *= 2;
       }
       return arr;
    }
    const arr=[1,2,3];
    const result = double(arr);
    console.log(result);
   }

   //문제3) 정수를 입력받아 홀수인지 판단하는 함수를 구현하시오.
   {
    function Odd(num){
       return num % 2 != 0;
    }
    console.log(Odd(3));
    console.log(Odd(4));

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
        const p1 = {name: '홍길동', age:30, gender:'남'};
        const p2 = {name: '홍길동', age:30, gender:'여'};

        console.log(gender(p1));
        console.log(gender(p2));
        }
        
// 문제5) 아래 주어진 배열을 매개값으로 입력받아 가장 큰 수를 반환하는
//       함수를 구현하시오. 배열 = [5, 2, 7, 1]
{
    function max(arr){
       let maxvalue = arr[0];

       for(let ele of arr){
        if(ele > maxvalue){
            maxvalue = ele;
        }
       }
       return maxvalue;
    }
    const arr = [5,2,7,1];
    const result = max(arr);
    console.log(result);
}
//문제6) 문제2에서 원본배열을 유지하고 2배수한 결과를 새로운 배열로 반환하는 함수를 구현하시오.
{
    function double(arr){
        const array = [];
       for(let i = 0; i<arr.length; i++){
        array.push(arr[i] *2);
       }
       return array;
    }
    const arr=[1,2,3];
    const result = double(arr);
    console.log(arr, result);
   }