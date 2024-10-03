$('.slick-slider').slick({
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplaySpeed: 1500,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
const balls = document.querySelectorAll('.ball');
const box = document.querySelector('.box');

function randomPosition() {
    const boxWidth = box.clientWidth - 30; 
    const boxHeight = box.clientHeight - 30; 
    const x = Math.random() * boxWidth;
    const y = Math.random() * boxHeight;

    return { x, y };
}

function animateBalls() {
    balls.forEach(ball => {
        const { x, y } = randomPosition();
        ball.style.transform = `translate(${ x }px, ${ y }px)`;
        ball.style.backgroundColor = `hsl(${Math.random() * 360 }, 100 %, 50 %)`; 
    });
}

setInterval(animateBalls, 1000); 
