import DonJaimeBru from '@/assets/images/about/DonJaimeBru.png';
import DonEmilioBru from '@/assets/images/about/DonEmilioBru.png';
import DonLuisJaimeBru from '@/assets/images/about/DonLuisJaimeBru.png';

import './About.scss';

const About = () => {
    return (
        <div className="about">
            <h1 className="about-title">QUIENES SOMOS</h1>
            <div className="about-contentText">
                <p className="text1">
                    Los campos propiedad de la familia Bru fueron adquiridos por
                    el Sr.Jaime Bru, en forma directa al gobierno de la
                    provincia de Buenos Aires hacia el año 1890; y
                    posteriormente por compra a la sociedad Estancias y Colonias
                    Curamalan, en el año 1900. La estancia El Hinojo
                    correspondía a la sección homónima de la estancia Curamalan
                    del Sr. Eduardo Casey precursor, pionero, empresario
                    múltiple, criador destacado de equinos, bovinos y ovinos, a
                    la vez que colonizador y fundador de industrias y ciudades.
                </p>
                <p className="text2">
                    En los comienzos se criaron bovinos de raza Shorthon y
                    ovinos Lincoln NZ. adquiriendo la cabaña por él fundada gran
                    prestigio y trascendencia nacional e internacional
                    obteniendo numerosos campeonatos en las principales
                    exposiciones del país (Clásicas, Palermo, Regionales);
                    desarrollándose también planteos agrícolas con singular
                    éxito ya que en el año 1900-1901 se obtienen ejemplares de
                    trigo cuyas semillas fueran importadas por el Sr.Jaime Bru
                    desde España, considerados sin igual en investigaciones
                    realizadas y certificadas por el Museo Agrícola Argentino a
                    nivel internacional, en las granjas experimentales de Kansas
                    y Minessota de Estados Unidos.
                </p>
                <p className="text3">
                    Continuó la explotación de los campos el Sr.Emilio Bru hijo
                    del anterior que adquirió las primeras vacas Aberdeen Angus.
                    En la actualidad son propietarios el Sr.Luis Jaime Bru y
                    familia.
                </p>
            </div>
            <div className="about-contentImages">
                <div className="container-image1">
                    <img
                        src={DonJaimeBru}
                        alt="Don Jaime Bru"
                        className="image1"
                    />
                    <p>Don Jaime Bru</p>
                </div>
                <div className="container-image2">
                    <img
                        src={DonEmilioBru}
                        alt="Don Emilio Bru"
                        className="image2"
                    />
                    <p>Don Emilio Bru</p>
                </div>
                <div className="container-image3">
                    <img
                        src={DonLuisJaimeBru}
                        alt="Don Luis Jaime Bru"
                        className="about-image3"
                    />
                    <p>Don Luis Jaime Bru</p>
                </div>
            </div>
        </div>
    );
};

export default About;
