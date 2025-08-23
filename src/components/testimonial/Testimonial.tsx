interface TestimonialProps {
    author?: string;
    text?: string;
    key: string | number;
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
