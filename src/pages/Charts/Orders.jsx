

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'; // Import Button from Material UI
import Header from '../../components/Header';
import { ordersData } from '../../data/dummy';


const Orders = () => {

  const buttonColor = ["red", "pink", "yellow", "green", "orange", "blue", "gray"];

  return (
    <>
      <div className='m-2 md:m-10 p-2 md:p-10'>
        <Header category={"Page"} title={"Orders"} />
        {/* Add overflow-x-auto and overflow-y-auto for both horizontal and vertical scroll */}
        <div className="overflow-x-auto overflow-y-auto">
          <TableContainer component={Paper} sx={{ width: '800px', height: "400px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className='text-white'>
                  <TableCell>Item</TableCell>
                  <TableCell align="right">Customer Name</TableCell>
                  <TableCell align="right">Total Amount</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Order Id</TableCell>
                  <TableCell align="right">Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ordersData.map((row) => (
                  <TableRow
                    key={row.OrderItems}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >

                    <TableCell component="th" scope="row">
                      <div className='flex gap-2'>
                        <img src={row.ProductImage} width={"30px"} height="30px" className="rounded-full" alt="" />
                      </div>
                    </TableCell>

                    <TableCell align="right">{row.CustomerName}</TableCell>
                    <TableCell align="right">{row.TotalAmount}</TableCell>

                    {/* Status as Button */}
                    <TableCell align="right">
                      <Button 
                        variant="contained" 
                        size="small"
                        sx={{ 
                          backgroundColor: row.StatusBg, // use the status background color
                          color: 'white',
                          textTransform: 'none', // Disable text transform to keep the original text format
                          padding: '2px 8px', // Compact button padding
                          minWidth: '60px', // Adjust min-width for consistent size
                          height: '30px', // Adjust height for the button
                          fontSize: '0.8rem', // Adjust font size
                          borderRadius: '5px' // Optional: Adjust the button shape
                        }}
                      >
                        {row.Status}
                      </Button>
                    </TableCell>

                    <TableCell align="right">{row.OrderID}</TableCell>
                    <TableCell align="right">{row.Location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Orders;
