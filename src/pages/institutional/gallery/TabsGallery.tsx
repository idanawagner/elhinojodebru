import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
// import SliderComponent from '@/components/sliderComponent/SliderComponent';

import { torosPadres, torosEnCentros, madres } from '@/data/gallery';
import GalleryItem from '../../../components/galleryItem/GalleryItem';

const tabData = [
    { label: 'Toros Padres', content: torosPadres },
    { label: 'Toros de Centros', content: torosEnCentros },
    { label: 'Madres', content: madres },
];

const TabsGallery = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <Box sx={{ width: '100%', padding: '2rem 1rem' }}>
            {/* <Typography variant="h4" align="center" gutterBottom>
                Galería de Fotos
            </Typography> */}
            <Tabs
                value={selectedTab}
                onChange={handleChange}
                centered
                variant="scrollable"
                scrollButtons="auto"
                aria-label="Galería de fotos"
                className=" tabs custom-tabs"
            >
                {tabData.map((tab, index) => (
                    <Tab key={index} label={tab.label} className="custom-tab" />
                ))}
            </Tabs>

            <Box sx={{ marginTop: 4 }}>
                <GalleryItem items={tabData[selectedTab].content} />
            </Box>
        </Box>
    );
};

export default TabsGallery;
