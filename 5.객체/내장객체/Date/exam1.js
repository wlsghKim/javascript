// Date : 1970.1.1 자정(UTC)부터 초를 누적하여 관리
{
    console.log(Date()); //Wed Feb 08 2023 11:14:19 GMT+0900 (대한민국 표준시)
    const today = new Date();
    console.log(today); //2023-02-08T02:17:40.775Z
    console.log(today.getDate()); //8
    console.log(today.getFullYear()); //2023
    console.log(today.getMonth()); //1, 월( 0 -> 1월, 1 -> 2월 ...11->12월) 
    console.log(today.getDay()); //3, 요일( 0 -> 일요일, 1->월, ... 6 ->토)
    console.log(today.getHours()); //11
    console.log(today.getMinutes()); //17
    console.log(today.getSeconds()); //40
    console.log(today.getMilliseconds()); //730
    console.log(today.toLocaleString()); //2023. 2. 8. 오전 11:17:40
    console.log(today.toLocaleDateString()); //2023. 2. 8.
    console.log(today.toLocaleTimeString());  //오전 11:11:34
    console.log(Date.now());  //1675823002889 1970년 1월 1일 00:00:00 UTC로부터 지난 시간을 밀리초 단위의 숫자값으로 반환
}
{
    const today = new Date();
    console.log(today);
    today.setFullYear(today.getFullYear()+1);
    today.setMonth(today.getMonth()+1);
    console.log(`다음달의 오늘날짜 : ${today}`)
    console.log(today.toLocaleDateString())
}
{
    //오늘 날짜로 부터 35일 후의 요일은?
    const today = new Date();
    console.log(today.toLocaleDateString()); //2023. 2. 8.
    const future = new Date( today.getFullYear()+3, today.getMonth()+13, today.getDate() + 35);
    console.log(future.toLocaleDateString()); //2023. 3. 15.
    switch(future.getDay()){
        case 0:
            console.log('일');
            break;    
        case 1:
            console.log('월');
            break;
        case 2:
            console.log('화');
            break;
        case 3:
            console.log('수');
            break;
        case 4:
            console.log('목');
            break;
        case 5:
            console.log('금');
            break;
        case 6:
            console.log('토');
            break;
    }
}