// 서울랜드 메인페이지 JS - main.js //

// 코드분리방식에 따라 이벤트역시 JS파일에서 설정하는 것이
// 일반적인 방식이다!
// html 요소를 선택해야 하므로 로드구역이 필요하다!

//// 로드구역 /////////////////////////////////
window.addEventListener("DOMContentLoaded",function(){
    
    // 1. 로드구역 확인
    console.log("로딩완료");
    
    // 2. 이벤트 대상선정: .abtn
    var abtn = document.querySelectorAll('.abtn');
    
    
    // 3. 이벤트 종류: click
    
    // (1)왼쪽버튼 /////////////////
    abtn[0].onclick = function(){
        // 이동함수호출
        goSlide(0);
        // a요소 클릭시 이동속성 없애기!
        return false;
    };/////// click함수 ///////////
    
    // (2)오른쪽버튼 ///////////////
    abtn[1].onclick = function(){
        // 이동함수호출
        goSlide(1);
        // a요소 클릭시 이동속성 없애기!
        return false;
    };/////// click함수 ///////////
    
    
});///////// 로드구역 //////////////////////////////////
///////////////////////////////////////////////////////



/*//////////////////////////////////////////////
    함수명: goSlide
    기능정의: 이동버튼을 클릭하면 배너li를 변경한다.
            (상세)
            오른쪽버튼 클릭시 배너는 다음순번으로 변경
            왼쪽버튼 클릭시 배너는 이전순번으로 변경됨
            
            1. 이벤트 종류: click
            2. 이벤트 대상: .abtn (양쪽이동버튼)
            3. 변경대상: .slider li
            4. 변경내용: 변경대상의 특정순번li에 
                    class="on" 주기
                    이때, 미리셋팅된 class에 의해서
                    opacity가 0인 투명 li가 
                    opacity 1로 보이게 되고
                    트랜지션으로 인해 애니메이션된다.
            5. 시나리오:
                (1) 이동버튼을 클릭한다
                (2) 클릭시 이동함수를 호출한다
                (3) 호출시 이동함수에 버튼 구분값을 전달한다
                (4) 호출된 함수에서 버튼 구분값을 받는다
                    : 전달변수 gubun 사용하여 
                    왼쪽버튼은 0, 오른쪽버튼은 1을 받는다
                (5) 전역변수에 현재 슬라이드 li순번을 기록하고
                    이것을 업데이트하여 변경된 순번의 요소에
                    class를 "on"값으로 넣어준다.
                    동시에 다른 li들에는 class "on"을 제거한다.
                    : 전역변수 bseq 에 0을 할당함
                    (처음li순번은 0번이니까!)
                    오른쪽버튼 클릭시 1씩 증가 : bseq++
                    왼쪽버튼 클릭시 1씩 감소 : bseq--
                    
*///////////////////////////////////////////////

// 배너순번 전역변수
var bseq = 0;

function goSlide(gubun){//gubun(왼쪽:0,오른쪽:1)
    
    // 1.함수호출, 전달값 확인
    console.log("슬라이드이동!"+gubun);
    
    // 2.변경대상: .slider li
    var tg = document.querySelectorAll('.slider li');
    console.log("슬라이드개수:"+tg.length);
    
    // 3.버튼 구분하여 배너순번 증감하기
    // 오른쪽버튼(gubun이 1이면 true)
    if(gubun){
        
        //확인
        console.log("오른쪽!!!");
        // 배너순번 증가
        bseq++;
        // 한계수 설정(마지막 컬렉선번호 다음번호이면 처음으로)
        if(bseq === tg.length) bseq = 0;
        
    } ////// if //////
    /// 왼쪽버튼 //////////////
    else{
        
        //확인
        console.log("왼쪽!!!");
        // 배너순번 감소
        bseq--;
        // 한계수 설정(0보다작은 -1일경우 끝번호로)
        if(bseq === -1) bseq = tg.length-1;
        // 마지막 컬렉션 번호는 개수보다 1작다!
    } ///// else //////
    
    // 변경된 배너순번 확인!
    console.log("배너순번:"+bseq);
    
    
} ////// goSlide 함수 /////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////




