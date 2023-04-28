{
    const v1 = 1;   //number 
    const v2 = [];  //object(배열)
    const v3 = {};  //object(객체)
    const v4 = "";  //Object(String, 문자열)
    const v5 ='{"name" : "홍길동", "age" :30}'; // 문자열
    const v6 ={name : "홍길동",age :30};
    //     // 데이터 프로퍼티
    //     name1 : "홍길동",
    //     age :30,
    //     //메소드 프로퍼티
    //     smile() {console.log('웃다')},
    //     eat() {console.log('먹다')}
    // }; //객체

    console.log(v6['name']);
    console.log(v6.name);
    // v6.smile();
    // v6.eat();

    const v7 = JSON.parse(v5); //JSON 포맷 문자열 => js객체
    console.log(v7.name);
    console.log(v7.age);
    v7.name = '홍길순';
    v7.age = 20;
    
    const v8 = JSON.stringify(v7); // js 객체 => JSON포맷 문자열
    console.log(v8);
    console.log(typeof(v8));

    console.log(v8.name); //undefined
    console.log(v8.age);  //undefined

}