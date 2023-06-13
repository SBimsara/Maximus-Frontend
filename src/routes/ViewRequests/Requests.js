// Importing required modules from Material-UI and React-Icons libraries.
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { ArrowBack } from '@mui/icons-material';
import { ArrowForward } from '@mui/icons-material';

// Defining constants to set up pagination.
const entriesPerPage = 10; // number of entries per page
const totalEntries = 50; // total number of entries
const currentPage = 1; // current page number

// Defining variables for pagination.
let startIndex = (currentPage - 1) * entriesPerPage + 1;
let endIndex = Math.min(currentPage * entriesPerPage, totalEntries);

// Function to handle previous button click for pagination.
const handlePreviousClick = () => {
    if (currentPage > 1) {
        currentPage--;
        updatePageNumber();
    }
};

// Function to handle next button click for pagination.
const handleNextClick = () => {
    if (currentPage < Math.ceil(totalEntries / entriesPerPage)) {
        currentPage++;
        updatePageNumber();
    }
};

// Function to update page number and indices for pagination
const updatePageNumber = () => {
    startIndex = (currentPage - 1) * entriesPerPage + 1;
    endIndex = Math.min(currentPage * entriesPerPage, totalEntries);
    pageNumberText = ` ${currentPage}`;
};

let pageNumberText = ` ${currentPage}`;

// React component for the Requests page
function Requests() {
    return (
        // Component layout using Material-UI Box and Typography components.
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '110vh' }}>
            <Box sx={{ border: '1px solid black', borderRadius: '4px', p: 3, width: '800px', height: '600px', position: 'relative' }}>
                <Typography variant="h6" sx={{ p: 2, backgroundColor: '#f5f5f5', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}>Requests</Typography>&nbsp;
                {/* Table component for displaying request data. */}
                <Table>
                    <TableHead>
                        <TableRow sx={{ borderBottomWidth: '2px' }}>
                            <TableCell style={{ borderBottom: '2px solid black' }}>Full name</TableCell>
                            <TableCell style={{ borderBottom: '2px solid black', paddingRight: '120px', textAlign: 'right' }}>Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Table rows containing request data. */}
                        <TableRow>
                            <TableCell style={{ borderBottom: '2px solid black' }}></TableCell>
                            <TableCell align="left" sx={{ borderBottom: '2px solid black', textAlign: 'right' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {/* Buttons for viewing, accepting or rejecting a request. */}
                                    <Button sx={{ marginLeft: '25px' }} variant="contained" color="primary" size="small">View</Button>
                                    <Button
                                        sx={{
                                            marginLeft: '25px',
                                            backgroundColor: 'limegreen',
                                        }}
                                        variant="contained"
                                        color="success"
                                        size="small"
                                        startIcon={<FaCheck />}>
                                        Accept
                                    </Button>
                                    <Button sx={{ marginLeft: '25px' }} variant="contained" color="error" size="small" startIcon={<FaTimes />} >Reject</Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                {/* Pagination information and buttons */}
                <Box sx={{ p: 3, position: 'absolute', bottom: '10px', right: '10px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '700px', marginLeft: '30px' }}>
                        <Typography variant="body1" sx={{ marginLeft: '-40px' }}>Showing {startIndex} to {endIndex} of {totalEntries} entries</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Button variant="contained" color="primary" startIcon={<ArrowBack />}>Previous</Button>
                            <Typography variant="body1">{pageNumberText}</Typography>
                            <Button variant="contained" color="primary" endIcon={<ArrowForward />}>Next</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Requests;
