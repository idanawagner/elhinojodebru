import Testimonial from '@/components/testimonial/Testimonial';

const testimonialsList = [
    {
        text: '"El Hinojo de Bru es un referente mundial en la cría de Aberdeen Angus. Su compromiso con la pureza y la calidad es inigualable. Cada toro que he adquirido ha superado mis expectativas en términos de genética y rendimiento."',
        author: '- Juan Pérez, Ganadero',
    },
    {
        text: '"Visitar El Hinojo de Bru fue una experiencia inolvidable. La dedicación y el amor por la raza Aberdeen Angus se reflejan en cada rincón de la cabaña. Los animales son impresionantes y la historia de la cabaña es fascinante."',
        author: '- María López, Criadora',
    },
    {
        text: '"Visitar El Hinojo de Bru fue una experiencia inolvidable. La dedicación y el amor por la raza Aberdeen Angus se reflejan en cada rincón de la cabaña. Los animales son impresionantes y la historia de la cabaña es fascinante."',
        author: '- María López, Criadora',
    },
];

const SectionTestimonials = () => {
    return (
        <section className="section-testimonials">
            <h2>Testimonios</h2>
            <div className="section-testimonials-content">
                {testimonialsList.map((testimonial, index) => (
                    <Testimonial
                        text={testimonial.text}
                        author={testimonial.author}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default SectionTestimonials;
