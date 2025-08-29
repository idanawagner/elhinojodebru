import React from 'react';
import './Conditions.scss';
const Conditions = () => {
    return (
        <section className="conditions">
            {' '}
            <h2 className="conditions-title">Condiciones de venta</h2>
            <p>Comisión sin cargo a los Señores compradores.⁣ ⁣</p>
            <div className="health">
                <h2>Sanidad</h2>
                <ul className="list">
                    <li>
                        Toros negativos a las reacciones de Brucelosis y
                        Tuberculosis. Sometidos a revisación por palpación y
                        medición escrotal.⁣ Doble dosis de vacunas: I.B.R.
                        D.V.B. Leptospirosis Vibriosis, Carbunclo Bacteridiano y
                        dos raspajes negativos a⁣ Tricomoniasis y Vibriosis.⁣
                    </li>
                    <li>
                        Vaquillonas con control negativo a Brucelosis y
                        Tuberculosis, garantida su preñez por tacto rectal.⁣
                    </li>
                    <li>Terneras con control negativo a Tuberculosis.</li>
                </ul>
                <p>
                    Los señores compradores que deseen constatar o emplear las
                    garantías antes dichas, deberán hacerlo en el local de
                    ventas, con sus propios asesores veterinarios.
                </p>
                <p>
                    Una vez retirados los animales, no se atenderán reclamos
                    vinculados con las garantías anteriormente expuestas.
                </p>
                <p>
                    El animal vendido corre por cuenta exclusiva del comprador
                    desde el momento que le sea adjudicado.
                </p>
            </div>
        </section>
    );
};

export default Conditions;
