import SliderComponent from '@/components/sliderComponent/SliderComponent';
import { homeSlider } from '@/data/homeSlider';

const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };
    return (
        <div className="hero-section">
            <SliderComponent items={homeSlider} settings={settings} />
        </div>
    );
};

export default Hero;
