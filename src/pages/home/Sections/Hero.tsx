import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>El auténtico Aberdeen Angus</h1>
                    <p>SINÓNIMO DE PUREZA</p>
                </div>
                <Link to="/history" className="hero-button">
                    Conoce nuestra historia
                </Link>{' '}
            </div>
        </div>
    );
};

export default Hero;
