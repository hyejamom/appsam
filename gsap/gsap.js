$(()=>{
    $('.play_btn').on('click',()=>{
        gsap.to(".gsap_box1", {
            duration: 1,
            width: 1000,
            height: 300,
            x: 500, //에러 많이남
            y: 300, //에러 많이남
            autoAlpha: 0.6,
            background: "green",
            "border-radius": 30
        })
    })


})()