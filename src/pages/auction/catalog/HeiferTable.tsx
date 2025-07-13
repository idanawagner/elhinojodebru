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
} from '@mui/material';
import './Table.scss';
import csvData from '@/data/catalog/HeiferTable.csv?raw';

const HeiferTable = () => {
    const [data, setData] = useState<string[][]>([]);

    useEffect(() => {
        const parsed = Papa.parse<string[]>(csvData, {
            header: false,
        });
        if (parsed && parsed.data) {
            setData(parsed.data);
        }
    }, []);

    if (data.length === 0) return <p>Cargando datos...</p>;
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {data[0].map((header, i) => (
                            <TableCell key={i} sx={{ fontWeight: 'bold' }}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.slice(1).map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <TableCell key={cellIndex}>{cell}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default HeiferTable;
