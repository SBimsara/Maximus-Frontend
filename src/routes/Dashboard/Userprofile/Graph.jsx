import { TableContainer,Table,TableBody,TableRow,TableCell,Paper, TableHead} from "@mui/material";

export const Graph = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'400px',marginTop:'30px'}}  >
      <Table aria-label="admin data" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell><b>Most recent login</b></TableCell>
            <TableCell><b>Login time</b></TableCell>
            <TableCell><b>Logout time</b></TableCell>
          </TableRow>
       </TableHead>
       <TableBody>
          
{tabledata.map((row) => (
  <TableRow
         key={row.id}
         sx={{'&:last-child td, &:last-child th':{ border: 0}}}
  >
            <TableCell>{row.login}</TableCell>
            <TableCell>{row.intime}</TableCell>
            <TableCell>{row.outtime}</TableCell>
           
  </TableRow>
))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
        }

const tabledata = [{

"login": 1,
"intime": "2023/3/5  --  2.05 a.m",
"outtime": "2023/3/5  --  2.45 a.m",

},
 {
  "login": 2,
  "intime": "2023/3/4  --  4.55 a.m",
  "outtime": "2023/3/5  --  5.45 a.m",
},
 {
  "login": 3,
  "intime": "2023/3/3  --  3.14 p.m",
  "outtime": "2023/3/3  -- 3.40 p.m",
}, 
{
  "login": 4,
  "intime": "2023/3/2  --  1.45 a.m",
  "outtime": "2023/3/5  -- 1.55 a.m",
},
{
  "login": 5,
  "intime": "2023/3/1  -- 4.45 a.m",
  "outtime": "2023/3/5  -- 5.15 a.m",
}
]