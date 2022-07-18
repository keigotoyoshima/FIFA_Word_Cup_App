import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { withStyles } from '@mui/styles';
import { alpha, styled } from '@mui/material/styles';

function createData(team, gp, w, d, l, gf, ga, gd, pts) {
  return { team, gp, w, d, l, gf, ga, gd, pts};
}

const rows = [
  createData('Manchester City', 159, 6.0, 24, 4.0,159, 6.0, 24, 4.0),
  createData('PSG', 237, 9.0, 37, 4.3,159, 6.0, 24, 4.0),
  createData('RB Leipzig', 262, 16.0, 24, 6.0, 159, 6.0, 24, 4.0),
  createData('Club Brugge', 305, 3.7, 67, 4.3 , 159, 6.0, 24, 4.0),
];

const paperStyle = {
  height:"100%", 
  // backgroundColor:"#202020",
  // padding:"3px 0px", 
};

// withstyleで付加されるcssが後から読み込まれるcssによって上書きされてしまう．
const StyledTableCell = withStyles({
  root: {
    // color: "red !important",
    // backgroundColor: "#202020"
    // height: "24% !important",
    // lineHeight:"normal",
    // fontSize: "0.4rem",

  }
})(TableCell);
// customするときはこっちの方法でやる必要あり．
const CustomTableCell = styled(TableCell)(({ theme }) => ({
  fontSize:"1.5rem",
  // ':hover':{
  //   fontSize:"3rem"
  // }
  // '& .MuiSlider-thumb': {
  //   '&:hover, &.Mui-focusVisible': {
  //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
  //   },
  //   '&.Mui-active': {
  //     boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
  //   },
  // },
}));


export function BasicTableA() {
  return (
    <TableContainer component={Paper} style={paperStyle}>
      <Table sx={{ height:"100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* TeamをGroup名に変更したい */}
            <CustomTableCell>Group-A</CustomTableCell>
            <StyledTableCell align="right">GP</StyledTableCell>
            <StyledTableCell align="right">W</StyledTableCell>
            <StyledTableCell align="right">D</StyledTableCell>
            <StyledTableCell align="right">L</StyledTableCell>
            <StyledTableCell align="right">GF</StyledTableCell>
            <StyledTableCell align="right">GA</StyledTableCell>
            <StyledTableCell align="right">GD</StyledTableCell>
            <StyledTableCell align="right">PTS</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.team}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.team}
              </StyledTableCell>
              <StyledTableCell align="right">{row.gp}</StyledTableCell>
              <StyledTableCell align="right">{row.w}</StyledTableCell>
              <StyledTableCell align="right">{row.d}</StyledTableCell>
              <StyledTableCell align="right">{row.l}</StyledTableCell>
              <StyledTableCell align="right">{row.gf}</StyledTableCell>
              <StyledTableCell align="right">{row.ga}</StyledTableCell>
              <StyledTableCell align="right">{row.gd}</StyledTableCell>
              <StyledTableCell align="right">{row.pts}</StyledTableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
