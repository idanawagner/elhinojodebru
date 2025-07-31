import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import './SliderComponent.scss';
import { useIsMobile } from '@/hooks/useIsMobile';

type CardItem = {
    image: string;
    imageMobile?: string;
    title?: string;
    description?: string;
    renderContent?: React.ReactNode;
};

type Props = {
    items: CardItem[];
    settings?: Settings;
};

const SliderComponent: React.FC<Props> = ({ items, settings }) => {
    const isMobile = useIsMobile();
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
                        <img
                            src={
                                isMobile && item.imageMobile
                                    ? item.imageMobile
                                    : item.image
                            }
                            alt={item.title || ''}
                        />
                        {item.title && <h3>{item.title}</h3>}
                        {item.description && <p>{item.description}</p>}
                        {item.renderContent && (
                            <div className="slider-extra-content">
                                {item.renderContent}
                            </div>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
