// import React, { useEffect, useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Header from '../../components/Header';
// import { employeesData } from '../../data/dummy';

// const Emloyees = () => {

//     const [query, setQuery] = useState('');


//     // Filter employees based on the search input
//     // const filteredEmployees = employeesData.filter((employee) =>
//     // employee.Name.toLowerCase().includes(input.toLowerCase())
//     // employee.Title.toLowerCase().includes(input.toLowerCase()) ||
//     // employee.Country.toLowerCase().includes(input.toLowerCase()) ||
//     // employee.HireDate.toLowerCase().includes(input.toLowerCase())
//     // );



//     // const handleChange = (e) => {
//     //     setQuery(e.target.value);
//     // };

//     return (
//         <>
//             <div className='container max-w-3xl md:p-10'>
//                 <Header category={"Page"} title={"Employees"} />
//                 <div className='p-4 flex flex-col'>
//                     <div className="">
//                         <input
//                             type="text"
//                             // onChange={handleChange}
//                             onChange={(e) => setQuery(e.target.value)}
//                             placeholder='Search...'
//                             className='px-2 text-black mb-4 w-52 m-auto outline-none rounded-sm border-blue-300 border-2'
//                         />
//                     </div>
//                     <div className="overflow-x-auto overflow-y-auto">
//                         <TableContainer component={Paper} sx={{ width: '800px', height: "400px" }}>
//                             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                                 <TableHead>
//                                     <TableRow className='text-white'>
//                                         <TableCell>Employees</TableCell>
//                                         <TableCell align="right">Designation</TableCell>
//                                         <TableCell align="right">Country</TableCell>
//                                         <TableCell align="right">Hire Date</TableCell>
//                                         <TableCell align="right">ReportsTo</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {employeesData.filter(user => user?.Name.toLowerCase().includes(query)
//                                     ).map((row) => (
//                                         <TableRow
//                                             key={row.EmployeeID}
//                                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                         >
//                                             <TableCell>
//                                                 <div className='flex gap-2'>
//                                                     <img src={row.EmployeeImage} width={"30px"} height="30px" className="rounded-full" alt="" />
//                                                     <span>{row?.Name}</span>
//                                                 </div>
//                                             </TableCell>
//                                             <TableCell align="right">{row?.Title}</TableCell>
//                                             <TableCell align="right">{row.Country}</TableCell>
//                                             <TableCell align="right">{row.HireDate}</TableCell>
//                                             <TableCell align="right">{row.ReportsTo}</TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainer>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Emloyees;


import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from '../../components/Header';
import { employeesData } from '../../data/dummy';

const Employees = () => {
    const [query, setQuery] = useState('');

    // Filter employees based on the search input
    const filteredEmployees = employeesData.filter((employee) => {
        const lowerCaseQuery = query.toLowerCase();
        return (
            employee?.Name.toLowerCase().includes(lowerCaseQuery) ||
            employee?.Title.toLowerCase().includes(lowerCaseQuery) ||
            employee?.Country.toLowerCase().includes(lowerCaseQuery) ||
            employee?.HireDate.toLowerCase().includes(lowerCaseQuery)
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
                                    {filteredEmployees.map((row) => (
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

export default Employees;
