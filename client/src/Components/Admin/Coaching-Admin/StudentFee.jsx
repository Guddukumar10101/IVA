import React, { useState } from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, TextField, Select, MenuItem,
  InputLabel, FormControl, Dialog, DialogTitle, DialogContent,
  DialogActions
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const mockStudentFees = [
  {
    id: 1,
    studentId: 'S101',
    name: 'Ravi Kumar',
    fatherName: 'Suresh Kumar',
    class: '10',
    fees: {
      January: 1000, February: 1000, March: 1000,
      April: 1000, May: 1000, June: 1000,
      July: 0, August: 0, September: 0,
      October: 0, November: 0, December: 0
    }
  },
  {
    id: 2,
    studentId: 'S102',
    name: 'Priya Singh',
    fatherName: 'Amit Singh',
    class: '9',
    fees: {
      January: 1000, February: 1000, March: 0,
      April: 0, May: 0, June: 0,
      July: 0, August: 0, September: 0,
      October: 0, November: 0, December: 0
    }
  }
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const StudentFee = () => {
  const [students, setStudents] = useState(mockStudentFees);
  const [filterName, setFilterName] = useState('');
  const [filterClass, setFilterClass] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editMonth, setEditMonth] = useState('');
  const [newFee, setNewFee] = useState('');

  const handleOpenEdit = (student, month) => {
    setSelectedStudent(student);
    setEditMonth(month);
    setNewFee(student.fees[month]);
  };

  const handleUpdateFee = () => {
    const updated = students.map((student) => {
      if (student.id === selectedStudent.id) {
        return {
          ...student,
          fees: {
            ...student.fees,
            [editMonth]: parseInt(newFee)
          }
        };
      }
      return student;
    });
    setStudents(updated);
    toast.success(`Fee for ${selectedStudent.name} (${editMonth}) updated!`);
    handleCloseDialog();
  };

  const handleCloseDialog = () => {
    setSelectedStudent(null);
    setEditMonth('');
    setNewFee('');
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(filterName.toLowerCase()) &&
    student.class.includes(filterClass)
  );

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Student Fee Details
      </Typography>

      {/* Filters */}
      <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
        <TextField
          label="Filter by Name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Class</InputLabel>
          <Select
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            label="Class"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="11">11</MenuItem>
            <MenuItem value="12">12</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Fee Table */}
      <Box overflow="auto">
        <TableContainer component={Paper}>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Student ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Father's Name</TableCell>
                <TableCell>Class</TableCell>
                {months.map((month) => (
                  <TableCell key={month}>{month}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.studentId}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.fatherName}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  {months.map((month) => {
                    const isPaid = student.fees[month] > 0;
                    return (
                      <TableCell
                        key={month}
                        sx={{
                          bgcolor: isPaid ? '#c8e6c9' : '#eeeeee',
                          color: '#000'
                        }}
                      >
                        ₹{student.fees[month]}{' '}
                        <Button
                          variant="text"
                          size="small"
                          onClick={() => handleOpenEdit(student, month)}
                        >
                          Edit
                        </Button>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Fee Update Dialog */}
      <Dialog open={!!selectedStudent} onClose={handleCloseDialog}>
        <DialogTitle>
          Update Fee - {selectedStudent?.name} ({editMonth})
        </DialogTitle>
        <DialogContent>
          <TextField
            label="New Fee Amount"
            fullWidth
            type="number"
            value={newFee}
            onChange={(e) => setNewFee(e.target.value)}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleUpdateFee}>
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* Toast Notification */}
      <ToastContainer position="bottom-right" />
    </Box>
  );
};

export default StudentFee;
