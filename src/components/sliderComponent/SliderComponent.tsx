import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import './SliderComponent.scss';

type CardItem = {
    image: string;
    title?: string;
    description?: string;
};

type Props = {
    items: CardItem[];
    settings?: Settings;
};

const SliderComponent: React.FC<Props> = ({ items, settings }) => {
    const defaultSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
        ...settings,
    };

    return (
        <div className="slider-component">
            <Slider {...defaultSettings}>
                {items.map((item, index) => (
                    <div key={index} className="slider-card">
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
