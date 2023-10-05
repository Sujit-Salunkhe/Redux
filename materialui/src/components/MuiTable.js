import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const MuiTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell>Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                TabelDate.map((row) =>(
                    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : {border : 0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
const TabelDate=
[{
  "id": 1,
  "first_name": "Eunice",
  "last_name": "Juanes",
  "email": "ejuanes0@facebook.com",
  "gender": "Genderfluid",
  "ip_address": "101.31.229.255"
}, {
  "id": 2,
  "first_name": "Jordain",
  "last_name": "Mugleston",
  "email": "jmugleston1@tripadvisor.com",
  "gender": "Female",
  "ip_address": "58.135.44.43"
}, {
  "id": 3,
  "first_name": "Tobie",
  "last_name": "Partington",
  "email": "tpartington2@rediff.com",
  "gender": "Male",
  "ip_address": "108.68.114.241"
}, {
  "id": 4,
  "first_name": "Wittie",
  "last_name": "Rumens",
  "email": "wrumens3@storify.com",
  "gender": "Male",
  "ip_address": "197.137.20.114"
}, {
  "id": 5,
  "first_name": "Cherin",
  "last_name": "Impey",
  "email": "cimpey4@scientificamerican.com",
  "gender": "Non-binary",
  "ip_address": "208.220.159.169"
}, {
  "id": 6,
  "first_name": "Cornela",
  "last_name": "Linne",
  "email": "clinne5@nbcnews.com",
  "gender": "Female",
  "ip_address": "216.158.79.119"
}, {
  "id": 7,
  "first_name": "Red",
  "last_name": "Hillitt",
  "email": "rhillitt6@ehow.com",
  "gender": "Genderfluid",
  "ip_address": "19.43.5.178"
}, {
  "id": 8,
  "first_name": "Eartha",
  "last_name": "Entwisle",
  "email": "eentwisle7@deliciousdays.com",
  "gender": "Female",
  "ip_address": "253.115.9.213"
}, {
  "id": 9,
  "first_name": "Pierrette",
  "last_name": "Costell",
  "email": "pcostell8@salon.com",
  "gender": "Female",
  "ip_address": "121.160.100.195"
}, {
  "id": 10,
  "first_name": "Fae",
  "last_name": "Raddin",
  "email": "fraddin9@soup.io",
  "gender": "Female",
  "ip_address": "182.121.60.66"
}]
export default MuiTable
