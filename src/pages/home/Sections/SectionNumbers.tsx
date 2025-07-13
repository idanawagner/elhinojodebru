const SectionNumbers = () => {
    return (
        <section className="section-numbers">
            <div className="section-numbers__content">
                <div className="section-numbers__stats">
                    <div className="number-item">
                        <span className="number">28</span>
                        <span className="label">Remates</span>
                    </div>
                    <div className="number-item">
                        <span className="number">760</span>
                        <span className="label">Toros vendidos</span>
                    </div>
                    <div className="number-item">
                        <span className="number">760</span>
                        <span className="label">Vaquillonas vendidas</span>
                    </div>
                    <div className="number-item">
                        <span className="number">95</span>
                        <span className="label">Años de historia</span>
                    </div>
                </div>
            </div>
            <div className="section-numbers__event">
                <p>12 de Septiembre 2025 - 14hs.</p>
                <p>Virtual y Presencial</p>
            </div>
        </section>
    );
};

export default SectionNumbers;
