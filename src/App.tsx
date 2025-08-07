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
// import { useEffect } from 'react';

function App() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    return (
        <div className="app">
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
                <Route
                    path="/auction/catalog"
                    element={<CatalogComingSoon />}
                />
                <Route path="/auction/catalog2" element={<Catalog />} />
                <Route path="/auction/genealogy" element={<Genealogy />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
