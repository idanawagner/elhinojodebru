import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import BullTable from './BullTable';
import HeiferTable from './HeiferTable';

function TabPanel({
    children,
    value,
    index,
}: {
    children: React.ReactNode;
    value: number;
    index: number;
}) {
    return (
        <div hidden={value !== index}>
            {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
        </div>
    );
}

export default function Catalog() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newIndex: number) => {
        setTabIndex(newIndex);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={tabIndex}
                onChange={handleChange}
                centered
                variant="fullWidth"
                aria-label="Catálogo de animales"
                className=" tabs custom-tabs"
            >
                <Tab label="TOROS DE PEDIGREE" className="custom-tab" />
                <Tab
                    label="VAQUILLONAS PURAS DE PEDIGREE"
                    className="custom-tab"
                />
            </Tabs>

            <TabPanel value={tabIndex} index={0}>
                <BullTable />
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
                <HeiferTable />
            </TabPanel>
        </Box>
    );
}
