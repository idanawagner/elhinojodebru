import SliderComponent from '@/components/sliderComponent/SliderComponent';
import { genealogy } from '@/data/genealogy-data';
const Genealogy = () => {
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
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };
    return (
        <div>
            <SliderComponent items={genealogy} settings={settings} />{' '}
        </div>
    );
};

export default Genealogy;
