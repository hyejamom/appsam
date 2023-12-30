$(()=>{

    gsap.registerPlugin(ScrollTrigger);

    //canvas
    const canvas = $('canvas')[0];
    const ctx = canvas.getContext('2d');

    //canvas 크기를 창 크기에 맞추기
    const resizeCanvas = ()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    $(window).resize(resizeCanvas); //창크기가 바뀔때마다 캔버스 크기 조정
    resizeCanvas(); //처음에 한번 캔버스 크기 조정

    //이미지 미리 로드
    const imageCount = 131; //이미지 개수
    const images = [];

    for (let i=0; i < imageCount; i++) {
        const img = new Image();
        img.src = `./images/${i}.jpg`
        images.push(img)
    }

    //첫번째 이미지 그리기
    images[0].onload = ()=>{
        ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height)
    }

    //scrollTrigger
    let cavasTimeline = gsap.timeline({
        scrollTrigger: {
            trigger : 'canvas',
            start : 'center center',
            end : '+=5000',
            scrub : 1,
            markers: true,
            pin: true,
            onUpdate: self => {
                const imageNumber = Math.floor(self.progress * (imageCount - 1));
                // console.log(imageNumber);
                ctx.drawImage(images[imageNumber], 0, 0, canvas.width, canvas.height);
            },
        }
    })
    
})()