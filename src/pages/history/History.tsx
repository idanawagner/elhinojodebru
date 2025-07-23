import medals from '@/assets/images/history/medals.png';
import evesnorOfBywell from '@/assets/images/history/evesnor-of-bywell.png';
import emilioBru from '@/assets/images/history/emilio-bru.png';
import sperm from '@/assets/images/history/sperm.png';

import './History.scss';
const History = () => {
    return (
        <section className="history">
            <div className="history-start">
                <h1>LA HISTORIA NOS AVALA</h1>
                <h3>HISTORIA DE UNA RAZA</h3>
                <p>
                    Sólo una convicción muy firme hizo posible que las
                    características de la raza Aberdeen Angus, se mantuvieran
                    inalterables hasta hoy en esta cabaña de la Argentina.
                    Cuando ya en Escocia la raza tiene dificultades para
                    identificarse con sus tribus originarias, la Cabaña El
                    Hinojo de Coronel Suárez a través de sus dueños el Sr. Luis
                    Jaime Bru, puede relatar su trayectoria con el mismo tipo de
                    hacienda a través del tiempo. La historia de la raza en la
                    Argentina nos muestra cómo un mismo tipo de animal pudo ser
                    “grande” en los ’50 y “chico” en los ’80.
                </p>
            </div>
            <div className="history-1930">
                <p>
                    La cría del Aberdeen Angus se inicia en el año 1930, con la
                    compra de doscientas vacas realizadas por el Sr. Emilio Bru,
                    origen "La Celina" de Zuberbühler y "Charles" de Guerrero.
                    Los primeros padres fueron de las cabañas "La Cascada" de
                    Perkins y "Curamalan". Posteriormente se adquieren vientres
                    y uno de los toros padres en la liquidación de la cabaña "El
                    Cerrito" de Don Miguel Castellar.
                </p>
            </div>
            <div className="history-1962">
                <div className="medals">
                    <img src={medals} alt="medals" />
                </div>
                <p>
                    Hasta el año 1962 se crían exclusivamente animales puros por
                    cruza a campo, concurriendo a exposiciones regionales y
                    organizadas por la C.A.A.A., obteniendo numerosos premios y
                    buenos precios. Siempre fue nuestro criterio un animal de
                    tamaño como cuando nació la raza y por mantenerlo en los
                    años 1954 y subsiguientes, en que la moda impuso un animal
                    muy chico, nuestros toros eran castigados por su tamaño.
                </p>
            </div>
            <div className="history-1966">
                <p>
                    A partir de 1962 es que se inicia la crianza de animales
                    puros de pedigree, siguiendo el mismo criterio, con las
                    adquisiciones de vaquillonas elegidas en las cabañas "La
                    Cascada" y "Curamalan", como así también de vacas, en las
                    liquidaciones de estas mismas, ocurridas en los años 1966 y
                    1979 respectivamente; también en la liquidación de la cabaña
                    "Penimel" de Lafuente, se compran las mejores vacas que esta
                    cabaña había adquirido en la de "La Cascada". Los toros
                    padres usados son importados del Reino Unido; de las cabañas
                    anteriormente nombradas hasta que se liquidaron, y de la
                    cabaña Fortín 8 de Thorny Hill Ltda. S.C.A. (Elordy).
                </p>
            </div>
            <div className="evesnor">
                <p>
                    Merece especial mención Evesnor of Bywell, de excepcional
                    producción, padre de campeones y otros premios cuyas hijas
                    fueron reservadas en su totalidad, como así también sus
                    mejores hijos. Uno de ellos "El Abra Evesnor 65" actuó en el
                    plantel puro de pedigree, con singular éxito. También
                    Everlast of Peebles, Jerry Eric of Peebles, etc.
                </p>
                <div>
                    <img src={evesnorOfBywell} alt="Evesnor of Bywell" />
                </div>
            </div>
            <div className="history-1980">
                <p>
                    Al producirse la introducción del nuevo tipo, y por no
                    compartir esa orientación, y ante la imposibilidad de
                    adquirir padres de sangre fundadoras en el país, en el año
                    1980 se compran en Perth, dos nuevos toros padres, Newhouse
                    Jewlian Eric 125 th en el precio máximo de 5000 guineas,
                    ganador de primer premio y reservado campeón intermedio,
                    criado por Robert M. Adam, y Witbert of Haymount criado por
                    J. y W. Arnott ganador de segundo premio en la misma
                    categoría, con cuyos hijos hemos conservado hasta ahora las
                    tradicionales familias y líneas de sangre de la raza.
                </p>
            </div>
            <div className="history-1989">
                <p>
                    El Sr. Emilio Bru vivió hasta el año 1989 y creía en la
                    calidad de la hacienda que había logrado. Por eso no quiso
                    “modernizar” el tipo de hacienda Hay un hecho que revela la
                    firmeza del criterio y es que mi padre murió sin saber que
                    había comprado en la cabaña Curumalan en dos remates un toro
                    y una vaquillona propios hnos. Ambos hijos de un toro
                    importado de Escocia, (Prince Perfect of Fordhouse) que es
                    uno de los más lindos que he visto en mi vida.
                </p>
                <img src={emilioBru} alt="Don Emilio Bru" />
            </div>
            <div className="history-1995">
                <p>
                    Estamos utilizando a partir de 1995, semen de los toros
                    "Moon 5825 Topequity" (Melato) gran campeón Palermo 1966,
                    "Moon 8284 Dolarmelato" (Melga) reservado de gran campeón
                    Palermo1969, "Moon A272 Dolarbigban" (Batman) reservado de
                    gran campeón Palermo de 1974 y "Moon 8074 Equitydolar"
                    (Dinero) primer premio Palermo 1968, de la cabaña La Danesa
                    de Firpo.
                </p>

                <img src={sperm} alt="Sperm-photo" />
            </div>
            <div className="history-2000">
                <p>
                    Desde el año 2000 utilizamos semen del toro Erdrum of
                    Eastfield, supremo campeón de Perth del año 1974, con el
                    propósito de producir un natural cambio de sangre y mantener
                    la misma pureza racial.
                </p>
            </div>
        </section>
    );
};

export default History;
