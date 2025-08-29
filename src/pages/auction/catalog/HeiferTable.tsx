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
import csvData from '@/data/catalog/HeiferTable.csv?raw';

const HeiferTable = () => {
    const [data, setData] = useState<string[][]>([]);
    const [filteredData, setFilteredData] = useState<string[][]>([]);
    const [searchText, setSearchText] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(20);

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
                className="search"
            />

            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            {headers.map((header, i) => (
                                <TableCell key={i}>{header}</TableCell>
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
                                    {row.map((cell, cellIndex) => {
                                        // Caso especial: columnas 2, 3 y 4 (índices 1, 2 y 3)
                                        if (
                                            cellIndex === 1 ||
                                            cellIndex === 2 ||
                                            cellIndex === 3
                                        ) {
                                            // Solo mostrar la celda en la primera fila de cada grupo de 3
                                            if (rowIndex % 4 === 0) {
                                                return (
                                                    <TableCell
                                                        key={cellIndex}
                                                        rowSpan={4}
                                                    >
                                                        {cell}
                                                    </TableCell>
                                                );
                                            } else {
                                                return null; // No dibujar nada, ya está ocupada por el rowSpan
                                            }
                                        }

                                        // Columna 1 (índice 0) → se muestra siempre
                                        return (
                                            <TableCell
                                                key={cellIndex}
                                                // translate="no"
                                            >
                                                {cell}
                                            </TableCell>
                                        );
                                    })}
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
                rowsPerPageOptions={[20, 50, 100]}
                labelRowsPerPage="Filas por página"
                sx={{
                    color: 'white',
                    '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows':
                        {
                            color: 'white',
                        },
                    '& .MuiSvgIcon-root': {
                        color: 'white',
                    },
                    '& .MuiInputBase-root': {
                        color: 'white',
                    },
                    '& .MuiSelect-icon': {
                        color: 'white',
                    },
                }}
            />
        </Box>
    );
};

export default HeiferTable;
