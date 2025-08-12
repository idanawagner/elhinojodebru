import one from '@/assets/images/home/slider/1.png';
import two from '@/assets/images/home/slider/2.png';
import three from '@/assets/images/home/slider/3.png';
import oneMobile from '@/assets/images/home/slider/1mobile.png';
import twoMobile from '@/assets/images/home/slider/2mobile.png';
import threeMobile from '@/assets/images/home/slider/3mobile.png';
import { Link } from 'react-router-dom';

export const homeSlider = [
    {
        id: 1,
        image: one,
        imageMobile: oneMobile,

        renderContent: (
            <Link to="/auction/genealogy" className="hero-button">
                Genealogía de la raza
            </Link>
        ),
    },
    {
        id: 2,
        image: two,
        imageMobile: twoMobile,
        renderContent: (
            <Link to="/history" className="hero-button">
                Conocé nuestra historia
            </Link>
        ),
    },
    {
        id: 3,
        image: three,
        imageMobile: threeMobile,

        renderContent: (
            <Link to="/auction/catalog" className="hero-button">
                Ver catálogo Remate 2025
            </Link>
        ),
    },
];
