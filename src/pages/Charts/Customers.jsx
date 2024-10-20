// import React from 'react';
// import { customersData } from '../../data/dummy';

// const Customers = () => {
//     return (
//         <>
//             {customersData?.map((curElem) => (
//                 <h1>{curElem?.CustomerName}</h1>
//             ))}
//         </>
//     )
// }

// export default Customers;


import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from '../../components/Header';
import { customersGrid } from '../../data/dummy';

const Customers = () => {
    const [query, setQuery] = useState('');

    // Filter employees based on the search input
    const filteredCustomer = customersGrid.filter((customer) => {
        const lowerCaseQuery = query.toLowerCase();
        return (
            customer?.Name.toLowerCase().includes(lowerCaseQuery) ||
            customer?.Title.toLowerCase().includes(lowerCaseQuery) ||
            customer?.Country.toLowerCase().includes(lowerCaseQuery) ||
            customer?.HireDate.toLowerCase().includes(lowerCaseQuery)
        );
    });

    return (
        <>
            <div className="container max-w-3xl md:p-10">
                <Header category={"Page"} title={"Employees"} />
                <div className="p-4 flex flex-col">
                    <div className="">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search..."
                            className="px-2 text-black mb-4 w-52 m-auto outline-none rounded-sm border-blue-300 border-2"
                        />
                    </div>
                    <div className="overflow-x-auto overflow-y-auto">
                        <TableContainer component={Paper} sx={{ width: '800px', height: "400px" }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow className="text-white">
                                        <TableCell>Employees</TableCell>
                                        <TableCell align="right">Designation</TableCell>
                                        <TableCell align="right">Country</TableCell>
                                        <TableCell align="right">Hire Date</TableCell>
                                        <TableCell align="right">Reports To</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredCustomer.map((row) => (
                                        <TableRow
                                            key={row.EmployeeID}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>
                                                <div className="flex gap-2">
                                                    <img
                                                        src={row.EmployeeImage}
                                                        width={"30px"}
                                                        height="30px"
                                                        className="rounded-full"
                                                        alt=""
                                                    />
                                                    <span>{row?.Name}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell align="right">{row?.Title}</TableCell>
                                            <TableCell align="right">{row.Country}</TableCell>
                                            <TableCell align="right">{row.HireDate}</TableCell>
                                            <TableCell align="right">{row.ReportsTo}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Customers;