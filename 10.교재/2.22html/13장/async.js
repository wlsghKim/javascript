{
    //동기처리 (syncronous)

    function a(){
        console.log('1');
        b();
        console.log('2');

    }

    function b(){
        console.log('b호출됨!');
    }
    a();
}
{
    //비동기처리(asynchronous)
    function a(){
        console.log('1');
        setTimeout(b, 3*1000);
        console.log('2');
    }
    function b(){
        console.log('b호출됨!');
    }
    a();
}

