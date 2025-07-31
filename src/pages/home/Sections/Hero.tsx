import SliderComponent from '@/components/sliderComponent/SliderComponent';
import { homeSlider } from '@/data/homeSlider';
// import { Link } from 'react-router-dom';

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
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };
    return (
        <div className="hero-section">
            <SliderComponent items={homeSlider} settings={settings} />
            <div className="hero-overlay">
                {/* <div className="hero-text">
                    <h1>El auténtico Aberdeen Angus</h1>
                    <p>SINÓNIMO DE PUREZA</p>
                </div> */}
                {/* <Link to="/history" className="hero-button">
                    Conoce nuestra historia
                </Link>{' '} */}
            </div>
        </div>
    );
};

export default Hero;
