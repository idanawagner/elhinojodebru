import React from 'react';
import './Loader.scss';
import logo from '@/assets/logo.png'; // Adjust the path as necessary

const Loader: React.FC = () => {
    return (
        <div id="preloader">
            <img src={logo} alt="El Hinojo de Bru" className="loader-logo" />
            <div className="loading-bar"></div>
            <span className="loader-text">Cargando...</span>
        </div>
    );
};

export default Loader;
