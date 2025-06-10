import { useEffect, useMemo, useState } from 'react';
import axios from 'axios'
import { MaterialReactTable} from 'material-react-table';



//nested data is ok, see accessorKeys in ColumnDef below
const data= [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
];

export default function StudentData(){
  //should be memoized or stable

const [allstudentdata,setallstudentdata]=useState([]);
const [loding,setloading]=useState(true)

useEffect(()=>{
fetchStudentData();
},[])


const  fetchStudentData= async()=>{
    try {
      const GettingAllStudentData= await axios.get('https://inspiredvisiontrust-backend-production.up.railway.app/AllStudents')
      console.log(GettingAllStudentData)
      setallstudentdata(GettingAllStudentData.data.StudentData);
      setloading(false)
    } catch (error) {
      console.log(error)
    }
    
  }
  const columns = useMemo(
    () => [
      {
        accessorKey: 'StudentId', //access nested data with dot notation
        header: 'Student Id',
        size: 150,
      },
      {
        accessorKey: 'FullName',
        header: 'Full Name',
        size: 150,
      },
      {
        accessorKey: 'FatherName', //normal accessorKey
        header: 'Father Name',
        size: 200,
      },
      {
        accessorKey: 'DOB',
        header: 'DOB',
        size: 150,
      },
      {
        accessorKey: 'SchoolName',
        header: 'SchoolName',
        size: 150,
      },
      {
        accessorKey: 'Class',
        header: 'Class',
        size: 150,
      },
      {
        accessorKey: 'Mobile',
        header: 'Mobile Number',
        size: 150,
      },
      
      {
        accessorKey: 'Email',
        header: 'Email Id',
        size: 150,
      },
      
      {
        accessorKey: 'ModeOfPayment',
        header: 'Class',
        size: 150,
      },
      {
        accessorKey: 'Year',
        header: 'Admision Year ',
        size: 150,
      },
      {
        accessorKey: 'TotalFee',
        header: 'Total Fee ',
        size: 150,
      },



      
      
    ],[],
    
  );



  return (<>
  <h2>All Student Data </h2>
  {!loding &&(<MaterialReactTable columns={columns} data={allstudentdata} />)}</>);
};










// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';
// import axios from 'axios'
// import { Button, keyframes } from '@mui/material';
// import { useState } from 'react';



// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function StudentData() {
// const [StudentData,setStudentData]=useState({})
// const  fetchStudentData= async()=>{

//   try {

//     const AllStudentData= await axios.get('http://localhost:8081/AllStudents')
//     setStudentData(AllStudentData)  
//     console.log(AllStudentData.data.StudentData)
//     console.log(StudentData)
//   } catch (error) {
//     console.log(error)
//   }
  
// }


// const columns = [
//   {
//     field: 'studentid',
//     headerName: 'Student Id',
//     width: 150,
//     editable: true,
//   }
// ,

//   {
//     field: 'fullName',
//     headerName: 'Full Name',
//     width: 150,
//     editable: true,
//   },{
//     field: 'fathername',
//     headerName: 'Father Name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'dob',
//     headerName: 'DOB',
//     width: 150,
//     editable: true,
//   }
//   ,
//   {
//     field: 'scholname',
//     headerName: 'School Name',
//     width: 150,
//     editable: true,
//   }
//   ,
//   {
//     field: 'class',
//     headerName: 'Class',
//     width: 150,
//     editable: true,
//   }
//   ,
//   {
//     field: 'Modeofpayment',
//     headerName: 'Mod OF Payment',
//     width: 150,
//     editable: true,
//   }
//   ,
//   {
//     field: 'mobile',
//     headerName: 'Mobile Number',
//     width: 200,
//     editable: true,
//   }
//   ,
//   {
//     field: 'email',
//     headerName: 'Email',
//     width: 200,
//     editable: true,
//   }
//   ,
//   {
//     field: 'address',
//     headerName: 'Address',
//     width: 400,
//     editable: true,
//   }
//   ,
//   {
//     field: 'password',
//     headerName: 'Password',
//     width: 200,
//     editable: true,
//   }
//   ,
//   {
//     field: 'year',
//     headerName: 'Year',
//     width: 100,
//     editable: true,
//   }
// ];
//   return (
//     <Box sx={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 8,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />

//       <Button onClick={()=>fetchStudentData()}>Get Data</Button>

//     </Box>
//   );
// }
