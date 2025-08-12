import SliderComponent from '@/components/sliderComponent/SliderComponent';
import { visits } from '@/data/visits-data';
import './Visits.scss';
const Visits = () => {
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
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };
    return (
        <div className="visits">
            {' '}
            <h2 className="visits-title">Visitas</h2>
            <div className="visits-text">
                <p>
                    En los últimos años hemos recibido visitas de criadores
                    Brasileros, Uruguayos, Colombianos, Norteamericanos, y del
                    Reino Unido. Destacándose especialmente la del Sr. Paul
                    Browne quien manifestó que el rodeo de El Hinojo es el único
                    conocido por la no influencia del new type en el mundo.
                </p>
            </div>
            <SliderComponent items={visits} settings={settings} />{' '}
        </div>
    );
};

export default Visits;
