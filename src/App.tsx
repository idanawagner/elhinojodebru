import { Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import './App.scss';
import About from './pages/about/About';
import Home from './pages/home/Home';
import History from './pages/history/History';

import Navbar from './components/navbar/Navbar';
import Visits from './pages/institutional/visits/Visits';
import Footer from './components/footer/Footer';
import TabsGallery from './pages/institutional/gallery/TabsGallery';

import Genealogy from './pages/auction/Genealogy';
import Catalog from './pages/auction/catalog/Catalog';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/history" element={<History />} />
                <Route path="/visits" element={<Visits />} />
                <Route
                    path="/institutional/photos-gallery"
                    element={<TabsGallery />} // Placeholder for PhotosGallery component
                />
                <Route
                    path="/institutional/press-articles"
                    element={<div>Press Articles</div>} // Placeholder for PressArticles component
                />
                <Route
                    path="/auction/catalog"
                    element={<Catalog />} // Placeholder for PressReleases component
                />
                <Route
                    path="/auction/genealogy"
                    element={<Genealogy />} // Placeholder for Genealogy component
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
