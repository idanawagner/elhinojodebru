import { NavLink } from 'react-router-dom';

const SectionNumbers = () => {
    return (
        <section className="section-numbers">
            <NavLink
                to={'https://www.monasterio-tattersall.com/remate/27941'}
                target="_blank"
                rel="noopener noreferrer"
                className="section-numbers__event"
            >
                <h2>REMATE 2025</h2>
                <div className="date">
                    <p>12 de Septiembre 2025 - 14hs. </p>
                    <p> Virtual y Presencial</p>
                </div>
            </NavLink>
            <div className="section-numbers__content">
                <div className="section-numbers__stats">
                    <div className="number-item">
                        <span className="number">28</span>
                        <span className="label">remates</span>
                    </div>
                    <div className="number-item">
                        <span className="number">1</span>
                        <span className="label">raza</span>
                    </div>
                    <div className="number-item">
                        <div>
                            <span className="number">+ 50 años</span>
                        </div>
                        <span className="label">de selección genética</span>
                    </div>
                    <div className="number-item">
                        <span className="number">+11000</span>
                        <span className="label">reproductores vendidos</span>
                    </div>
                    <div className="number-item">
                        <span className="number">95 años</span>
                        <span className="label"> de historia</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionNumbers;
