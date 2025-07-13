import imgVisitsHome from '@/assets/images/visits-home.png';
import { Link } from 'react-router-dom';

const SectionVisits = () => {
    return (
        <section className="section-visits">
            <div className="section-visits-content">
                <div className="image-container">
                    <img
                        src={imgVisitsHome}
                        alt="Visitas a la Cabaña El Hinojo"
                        className="image"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="text-container">
                    <h2>Visitas</h2>
                    <p>
                        En los últimos años hemos recibido visitas de criadores
                        Brasileros, Uruguayos, Colombianos, Norteamericanos, y
                        del Reino Unido. Destacándose especialmente la del Sr.
                        Paul Browne quien manifestó que el rodeo de El Hinojo es
                        el único conocido por la no influencia del new type en
                        el mundo.
                    </p>
                    <p className="button-container">
                        <Link className="button" to="/visits">
                            Ver más
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SectionVisits;
