$(()=>{

    $('.play_btn').on('click',()=>{

        let tl = gsap.timeline();
        tl.to(".gsap_box1", {duration: 0.5, x: 100, y: 100})
          .to(".gsap_box2", {duration: 0.5, background: "red", width: 500})
          .to(".gsap_box1", {duration: 0.5, background: "gray", x: 0, y:0})
          .to(".gsap_box2", {duration: 0.5, width: 300, x: 100, y:100}, "<")
          .to(".gsap_box1", {duration: 0.5, background: "yellow"})
          .to(".gsap_box2", {duration: 0.5, x: 0, y: 0, width: 500, background: "aqua"},"<")
    })

})()