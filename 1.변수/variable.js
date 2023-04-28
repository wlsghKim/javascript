{ //let :재할당 가능한 변수 선언
let x; //선언
let y;
x = 10; //할당
y = 20;
x=30; //재할당
let z = x + y;
console.log('x+y=' + z);
}

{
  // const 변수 선언
  const x = 10;
  const y = 10;
  // x = 10;
  // y = 10;
  const z = x + y;
  console.log('x+y=' + z);
}