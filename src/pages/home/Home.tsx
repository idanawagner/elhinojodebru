import './Home.scss';
import SectionNumbers from './Sections/SectionNumbers';
import SectionPressArticle from './Sections/SectionPressArticle';
import SectionVisits from './Sections/SectionVisits';
import SectionTestimonials from './Sections/SectionTestimonials';
import Hero from './Sections/Hero';
import SliderComponent from '@/components/sliderComponent/SliderComponent';
import { torosPadres } from '@/data/gallery/torosPadres-data';

const Home = () => {
    return (
        <>
            <Hero />
            <SectionNumbers />
            <div className="section-slider">
                <SliderComponent items={torosPadres} />
            </div>
            <SectionPressArticle />
            <SectionVisits />
            <SectionTestimonials />
        </>
    );
};

export default Home;
