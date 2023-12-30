$(()=>{

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
        scrollTrigger : {
            trigger : ".gsap_box4", //요소
            pin : true, //닿았을때, 닿지 않았을때
            start: "center center", //닿는 영역
            markers : true, //마커 보기, 안보기
            end : "+=2000", //2000px만큼 스크롤하면 애니매이션 끝
            scrub : 1, //스크롤 속도에 따라 애니메이션 속도 달라짐
        }
    })
    tl.to(".gsap_box4",{x: 500})
})()