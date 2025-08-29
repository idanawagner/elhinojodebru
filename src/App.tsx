import { Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import History from './pages/history/History';

import Navbar from './components/navbar/Navbar';
import Visits from './pages/institutional/visits/Visits';
import Footer from './components/footer/Footer';
import TabsGallery from './pages/institutional/gallery/TabsGallery';

import Genealogy from './pages/auction/Genealogy';
import Catalog from './pages/auction/catalog/Catalog';
import Press from './pages/institutional/press/Press';
import FullArticle from './components/fullArticle/FullArticle';
import Contact from './pages/contact/Contact';
import './styles/main.scss';
import CatalogComingSoon from './pages/auction/ComingSoonCatalog';
import FixedButton from './pages/fixedButton/FixedButton';
import Conditions from './pages/auction/conditions/Conditions';
// import { useEffect, useState } from 'react';
// import Loader from './components/loader/Loader';
// import { useEffect } from 'react';

function App() {
    // const [loading, setLoading] = useState(true);
    // console.log('Render App, loading =', loading);
    // useEffect(() => {
    // const handleLoad = () => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 3000); // delay para que se vea fluido
    // };

    // if (document.readyState === 'complete') {
    // setLoading(false);
    //         // La página ya terminó de cargar (caso producción o recarga rápida)
    //         handleLoad();
    // } else {
    //         // Espera el evento load normalmente
    // console.log('sigue cargando');
    //         window.addEventListener('load', handleLoad);
    //         return () => window.removeEventListener('load', handleLoad);
    // }
    // }, []);
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <div className="app">
            {/* {loading && <Loader />}
            {!loading && ( */}
            {/* <> */}
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/history" element={<History />} />
                <Route path="/institutional/visits" element={<Visits />} />
                <Route
                    path="/institutional/photos-gallery"
                    element={<TabsGallery />}
                />
                <Route path="/institutional/press" element={<Press />} />
                <Route
                    path="/institutional/press/article/:id"
                    element={<FullArticle />}
                />
                <Route path="/auction/catalog" element={<Catalog />} />
                <Route path="/auction/genealogy" element={<Genealogy />} />
                <Route path="/auction/conditions" element={<Conditions />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <FixedButton />
            <Footer />
        </div>
    );
}

export default App;
