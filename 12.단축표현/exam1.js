{
  //정수가 홀수면 '홀수', 짝수면 '짝수'
  let str = '';
  const num = 10;

  if (num % 2 == 0) {
    str = '짝수';
  } else {
    str = '홀수';
  }
  console.log(`${num}은 ${str}`);
}
{
  //if{}else{} => 3항 연산자
  //정수가 홀수면 '홀수', 짝수면 '짝수'
  let str = '';
  const num = 10;

  // num % 2 == 0 ? (str = '짝수') : (str = '홀수');
  str = num % 2 == 0 ? '짝수' : '홀수';
  //표현식 : 리터러(값), 변수, 연산식, 함수

  console.log(`${num}은 ${str}`);
}

{
  //단순 if문 대체 => &&, ||
  {
    const done = true;
    let message = '';

    if (done) message = '완료'; //statement
    console.log(message);
  }
  {
    const done = true;
    let message = '';

    message = done && '완료'; //좌항이 truly면 우항 평가결과를 반환, 좌항이 falsy면 좌항평가 결과를 반환
    console.log(message);
  }
  {
    const done = true;
    let message = '';

    message = done || '완료'; //좌항이 falsy면 우항 평가결과를 반환, 좌항이 truly면 좌항평가 결과를 반환
    console.log(message);
  }
  {
    function f(str) {
      const str2 = str || '빈문자열';
      console.log(str2);
    }
    f('x');
    f();
    f('');
    f(0);
  }
  {
    //null 병합 연산자 ??
    //좌항이 null 또는 nudefined면 우항평가결과를 반환
    //좌항이 falsy값이더라도 null 또는 undefined이 아니면 좌항 평가결과를 반환
    function f(str) {
      const str2 = str ?? '빈문자열';
      console.log(str2);
    }
    f('x');
    f();
    f('');
    f(0);
  }
  {
    //옵션널 체이닝 ?.
    //좌항이 null 또는 undefined면 undefined반환 그렇지않으면 우항의 피러퍼티 참조를 이어간다.
    const person = { name: '홍길동', age: 30, hobby: ['수영', '골프', '등산'] };

    const value = person?.name;
    const value2 = person?.hobby;
    const value3 = person.name2?.address;
    console.log(value, value2, value3);
  }
}
