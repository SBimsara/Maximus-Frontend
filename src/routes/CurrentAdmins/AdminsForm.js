// Import the necessary components and libraries.
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { FaTimes } from 'react-icons/fa';
import { ArrowBack } from '@mui/icons-material';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Set the number of entries to display per page, total number of entries, and current page number.
const entriesPerPageLimit = 10; // Number of entries per page.
const totalAdminsCount = 50; // Total number of entries.
const currentPage = 1; // Current page number.

// Calculate the starting and ending index for displaying the entries on the current page.
let startIndex = (currentPage - 1) * entriesPerPageLimit + 1;
let endIndex = Math.min(currentPage * entriesPerPageLimit, totalAdminsCount);

// Handle previous button click event.
const handlePreviousClick = () => {
    if (currentPage > 1) {
        currentPage--;
        setPageNumber();
    }
};

// Handle next button click event.
const handleNextClick = () => {
    if (currentPage < Math.ceil(totalAdminsCount / entriesPerPageLimit)) {
        currentPage++;
        setPageNumber();
    }
};

// Set the page number and recalculate the starting and ending index for displaying the entries on the current page.
const setPageNumber = () => {
    startIndex = (currentPage - 1) * entriesPerPageLimit + 1;
    endIndex = Math.min(currentPage * entriesPerPageLimit, totalAdminsCount);
    pageNumberText = ` ${currentPage}`;
};

// Set the page number text to display on the UI.
let pageNumberText = ` ${currentPage}`;

// Define the AdminsForm component.
function AdminsForm() {
    return (
         // Container for the form.
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '110vh' }}>
            <Box sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '900px' }}>
                     {/* Button to view requests. */}
                    <Button variant="contained" color="primary" component={Link} to="/Requests">View Requests</Button>
                     {/* Button to remove admin. */}
                    <Button variant="contained" color="error" startIcon={<FaTimes />}>
                        Remove Admin
                    </Button>
                </Box>&nbsp;
                <Box sx={{ border: '1px solid black', borderRadius: '4px', p: 3, width: '900px', height: '560px', position: 'relative' }}>
                    {/* Heading for the table. */}
                    <Typography variant="h6" sx={{ p: 2, backgroundColor: '#f5f5f5', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}>Current Admins</Typography>&nbsp;
                    <Table>
                        <TableHead>
                             {/* Table header row. */}
                            <TableRow sx={{ borderBottomWidth: '2px' }}>
                                <TableCell style={{ borderBottom: '2px solid black' }}>Admin Name</TableCell>
                                <TableCell style={{ borderBottom: '2px solid black' }}>Contact Number</TableCell>
                                <TableCell style={{ borderBottom: '2px solid black' }}>Access Level</TableCell>
                                </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                 {/* Table body rows. */}
                                <TableCell style={{ borderBottom: '2px solid black' }}></TableCell>
                                <TableCell style={{ borderBottom: '2px solid black' }}></TableCell>
                                <TableCell align="left" style={{ borderBottom: '2px solid black' }}>
                                     {/* Button to change access level. */}
                                    <Button sx={{ marginLeft: '25px' }} variant="contained" color="primary" size="small" >Change</Button>
                                </TableCell>
                            </TableRow>
                            </TableBody>
                    </Table>
                    {/* Container for pagination. */}
                    <Box sx={{ p: 3, position: 'absolute', bottom: '10px', right: '100px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '700px', marginLeft: '30px' }}>
                            {/* Text showing the entries on the current page. */}
                            <Typography variant="body1" sx={{ marginLeft: '-40px' }}>Showing {startIndex} to {endIndex} of {totalAdminsCount} entries</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                 {/* Buttons for pagination. */}
                                <Button variant="contained" color="primary" startIcon={<ArrowBack />}>Previous</Button>
                                <Typography variant="body1">{pageNumberText}</Typography>
                                <Button variant="contained" color="primary" endIcon={<ArrowForward />}>Next</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default AdminsForm;
