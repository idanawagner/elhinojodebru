import luisjaime from '@/assets/images/luisjaime.jpg';
import { Link } from 'react-router-dom';

const SectionPressArticle = () => {
    return (
        <section className="section-pressArticle">
            <div className="section-pressArticle-content">
                <div className="text-container">
                    <h2>Recuerdos del futuro</h2>
                    <p>
                        Sólo una convicción muy firme hizo posible que las
                        características de la raza Aberdeen Angus, se
                        mantuvieran inalterables hasta hoy en esta cabaña de la
                        Argentina. Cuando ya en Escocia la raza tiene
                        dificultades para identificarse con sus tribus
                        originarias, la Cabaña El Hinojo de Coronel Suárez a
                        través de sus dueños el Sr. Luis Jaime Bru, puede
                        relatar su trayectoria con el mismo tipo de hacienda a
                        través del tiempo. La historia de la raza en la
                        Argentina nos muestra cómo un mismo tipo de animal pudo
                        ser “grande” en los ’50 y “chico” en los ’80... Nota
                        realizada por la revista Informe Ganadero.
                    </p>
                    <p className="button-container">
                        <Link
                            className="button"
                            to="/press/recuerdos-del-futuro"
                        >
                            Leer artículo completo
                        </Link>
                    </p>
                </div>
                <div className="image-container">
                    <img
                        src={luisjaime}
                        alt="Recuerdos del futuro"
                        className="image"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionPressArticle;
