export const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000, // Set the speed (in milliseconds) at which slides change
    arrows: false, // Disable navigation arrows
    responsive: [
        {
            breakpoint: 1024, // Set the screen width breakpoint
            settings: {
                slidesToShow: 2, // Show 2 slides at a time for screens less than 1024px
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1, // Show 2 slides at a time for screens less than 1024px
                slidesToScroll: 1,
            }
        }
    ]
};