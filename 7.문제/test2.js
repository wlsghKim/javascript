// Array.prototype.reduce();

{
    //배열.reduce(콜백함수,초기값);
    // const result = [1,2,3,4,5].reduce( function(acc, curr, currIdx, arr ){
    //                                     console.log(acc, curr, currIdx, arr);
    //                                     return acc + curr;
    //                                     }, 0);                               
    // console.log(`최종결과값: ${result}`);

    //생략 Array.prototype.reduce();
    const result = [1,2,3,4,5].reduce( (acc, curr, currIdx, arr ) => acc + curr, 0);
    console.log(`최종결과값: ${result}`);
}
{
    //Array.prototype.forEach(); void
    //Array.prototype.map(); array
    //Array.prototype.filter(); array
    //Array.prototype.find(); value
    //Array.prototype.some(); boolean
    //Array.prototype.every(); boolean
    //Array.prototype.sort(); array
}

// function f (acc, curr, cruuIdx, arr ){
// }
// function reduce( f, initValue){
// }
// for(let i=0; i<arr.length; i++){
//     f(acc,curr,currIdx,arr);
// }
//   //..
// }