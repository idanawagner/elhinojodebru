import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    TablePagination,
    Box,
} from '@mui/material';
import './Table.scss';
import csvData from '@/data/catalog/BullTable.csv?raw';

const BullTable = () => {
    const [data, setData] = useState<string[][]>([]);
    const [filteredData, setFilteredData] = useState<string[][]>([]);
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(30);

    useEffect(() => {
        const parsed = Papa.parse<string[]>(csvData, {
            header: false,
        });
        if (parsed && parsed.data) {
            const cleanData = parsed.data.filter((row) => row.length > 1); // descarta vacíos
            setData(cleanData);
            setFilteredData(cleanData);
        }
    }, []);

    useEffect(() => {
        const filtered = data.filter((row, i) => {
            if (i === 0) return true; // encabezado
            return row
                .join(' ')
                .toLowerCase()
                .includes(searchText.toLowerCase());
        });
        setFilteredData(filtered);
        setPage(0);
    }, [searchText, data]);

    const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
    const handleChangeRowsPerPage = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    if (filteredData.length === 0) return <p>Cargando datos...</p>;

    const headers = filteredData[0];
    const rows = filteredData.slice(1);

    return (
        <Box className="table-container">
            <TextField
                label="Buscar"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            <TableContainer component={Paper}>
                <Table
                    size="small"
                    // sx={{
                    //     borderCollapse: 'separate',
                    //     borderSpacing: '8px 8px', // espacio horizontal y vertical entre celdas
                    //     minWidth: 650,
                    // }}
                >
                    <TableHead>
                        <TableRow>
                            {headers.map((header, i) => (
                                <TableCell
                                    key={i}
                                    // sx={{
                                    //     fontWeight: 'bold',
                                    //     background:
                                    //         'linear-gradient(90deg, #f9d423 0%, #ff4e50 100%)',
                                    //     color: 'black',
                                    //     borderRadius: '8px',
                                    //     // para que no se "pegue" a otras celdas y respete borderSpacing
                                    //     border: 'none',
                                    // }}
                                >
                                    {header}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <TableCell
                                            key={cellIndex}
                                            // sx={{
                                            //     background:
                                            //         'linear-gradient(90deg, #fff7b2 0%, #fff176 100%)',
                                            //     borderRadius: '8px',
                                            //     border: 'none',
                                            //     // agregar algo de sombra o borde si querés
                                            //     boxShadow:
                                            //         '0 2px 4px rgb(0 0 0 / 0.1)',
                                            // }}
                                        >
                                            {cell}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                component="div"
                count={rows.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Box>
    );
};

export default BullTable;
