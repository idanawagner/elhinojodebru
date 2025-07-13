import React from 'react';
import './GalleryItem.scss';

type GalleryItem = {
    image: string;
    title: string;
    description: string;
};

type Props = {
    items: GalleryItem[];
};

const GalleryItem: React.FC<Props> = ({ items }) => {
    return (
        <section className="gallery-grid">
            {items.map((item, index) => (
                <div className="gallery-card" key={index}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="gallery-image"
                        loading="lazy"
                    />
                    <h3 className="gallery-title">{item.title}</h3>
                    <p className="gallery-description">{item.description}</p>
                </div>
            ))}
        </section>
    );
};

export default GalleryItem;
