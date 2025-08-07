import { Box, Typography } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

const CatalogComingSoon = () => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                alignContent: 'center',
                mt: 8,
                px: 2,
                backgroundColor: '#ebebeb',
                height: '70vh',
                marginInline: 7,
                borderRadius: 2,
            }}
        >
            <ConstructionIcon sx={{ fontSize: 60, color: '#034a16' }} />
            <Typography variant="h5" mt={2} sx={{ color: '#034a16' }}>
                ¡Catálogo en desarrollo!
            </Typography>
            <Typography variant="body1" mt={1} color="text.secondary">
                Estamos trabajando en el catálogo del Remate 2025. Pronto estará
                disponible.
            </Typography>
        </Box>
    );
};

export default CatalogComingSoon;
