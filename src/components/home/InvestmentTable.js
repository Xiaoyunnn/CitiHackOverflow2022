import React, {useState} from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    styled,
    tablePaginationClasses
} from '@mui/material';
import {tableCellClasses} from '@mui/material/TableCell';
import "./home.css";

const columns = [
    {id: 'action', label: 'Action'},
    {id: 'symbol', label: 'Symbol'},
    {id: 'name',label: 'Name'},
    {id: 'price',label: 'Qty@Price'},
    {id: 'availableQty',label: 'Available Qty'},
    {id: 'marketValue',label: 'Market Value'},
    {id: 'avgCost',label: 'Average Cost'},
    {id: 'pNl',label: 'Total P/L'},
    {id: 'change',label: '% Change'},
    {id: 'unrealized',label: 'Unrealized'},
    {id: 'realized',label: 'Realized P/L'},
];

function createData(name, code, population, size) {
    const density = population / size;
    return {name, code, population, size, density};
}

const rows = [
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
    createData('-', '-', '-', '-','-', '-', '-', '-','-', '-', '-'),
];

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "var(--primary-700)",
        color: "var(--primary-900)",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        fontFamily: "'Noto Sans', 'Roboto', sans-serif",
        color: "var(--primary-900)",
    },
}));

const StyledTablePagination = styled(TablePagination)(() => ({
    [`&.${tablePaginationClasses.selectLabel}`]: {
        color: "var(--primary-900)",
        fontSize: 14,
        fontFamily: "'Noto Sans', 'Roboto', sans-serif",
    },
    [`&.${tablePaginationClasses.displayedRows}`]: {
        color: "var(--primary-900)",
        fontSize: 14,
        fontFamily: "'Noto Sans', 'Roboto', sans-serif",
    },
}));

const InvestmentTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="card-container lg">
            <p className="subheading-1">Total Invested Value</p>
            <p className="heading-1">$20,537.06</p>
            <Paper sx={{width: '100%', overflow: 'hidden'}}>
                <TableContainer sx={{maxHeight: 440}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <StyledTableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <StyledTableCell key={column.id} align={column.align}>
                                                        {"-"}
                                                    </StyledTableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <StyledTablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
};

export default InvestmentTable;