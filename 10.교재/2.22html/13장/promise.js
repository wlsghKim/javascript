//
{
    // const p = new Promise((s,f)=>{
    //     //1.비동기 처리
    //     //2.비동기 처리결과
    //     if(성공) {
    //         s(성공값);
    //     }else{
    //         f(실패값);
    //     }
    // });
}
{
    const p = new Promise((s,f)=>{
        //1.비동기 처리
        //2.비동기 처리결과
        //소요시간 5초...
        const flag = true;
        if(flag) {
            s('sucess');
        }else{
            f(new Error('fail'));
        }
    });
    console.log(1);

    p.then(res=>'a')
    .then(res=>`${res}_b`)
    .then(res=>{console.log(res); return `${res}_c`})
    .then(res=>{console.log(res); throw Error('오류발생')})
    .catch(err=>console.error(err.message));

    console.log(2);
    console.log(3);
    console.log(4);
}

//async, await
    async function f() {
    const p = new Promise((s,f)=>{
        //1.비동기 처리
        //2.비동기 처리결과
        //소요시간 5초...
        const flag = true;
        if(flag) {
            s('sucess');
        }else{
            f(new Error('fail'));
        }
    });
    console.log(1);

    const result = await p;
    console.log(result);
    
    console.log(2);
    console.log(3);
    console.log(4);

}
console.log('before');
f();
console.log('after');