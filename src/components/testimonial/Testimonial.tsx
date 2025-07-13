interface TestimonialProps {
    author?: string;
    text?: string;
    key: string | number; // Key is required for React lists
}

const Testimonial = ({ text, author, key }: TestimonialProps) => {
    return (
        <div className="testimonial-item" key={key}>
            {text && <p className="testimonial-text">{text}</p>}
            {author && <p className="testimonial-author">- {author}</p>}
        </div>
    );
};

export default Testimonial;
// This component can be used to display individual testimonials
// You can pass title, author, and content as props to customize each testimonial
