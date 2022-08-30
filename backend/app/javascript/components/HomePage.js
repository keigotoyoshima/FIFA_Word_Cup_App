import React, { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BasicTableA } from './Table';
import { Toolbar } from "@mui/material";
import AppNavBar from "./Navbar";


const darkTheme = createTheme({
  palette: { mode: 'dark' },
  components: {
    // Name of the component
    MuiTableCell: {
      defaultProps: {
        size:"small",
      },
      styleOverrides: {
        root: {
          // fontSize: '10px',
          lineHeight:"1",
        },
      },
   }
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const HomePage = ({value}) => {
  useEffect(() => {
    console.log("use effect!!");
  }, []);


  return (
    
    <ThemeProvider theme={darkTheme}>
      <div className="background-image">
        <div style={{height:"7%"}}>
          <AppNavBar></AppNavBar>
        </div>
        <Row style={{height:"93%", width:"100%", margin:"0", justifyContent:"center", alignItems:"center"}}>
          <Row style={{height:"20%", width:"100%"}}>
            <Col xs={6} style={{height: "100%",}}>
              <BasicTableA></BasicTableA>
            </Col>
            <Col xs={6} style={{height: "100%"}}> 
              <BasicTableA></BasicTableA>
            </Col>
          </Row>
          <Row style={{height:"20%", width:"100%"}}>
            <Col xs={6} style={{height: "100%",}}>
              <BasicTableA></BasicTableA>
            </Col>
            <Col xs={6} style={{height: "100%"}}> 
              <BasicTableA></BasicTableA>
            </Col>
          </Row>
          <Row style={{height:"20%", width:"100%"}}>
            <Col xs={6} style={{height: "100%",}}>
              <BasicTableA></BasicTableA>
            </Col>
            <Col xs={6} style={{height: "100%"}}> 
              <BasicTableA></BasicTableA>
            </Col>
          </Row>
          <Row style={{height:"20%", width:"100%"}}>
            <Col xs={6} style={{height: "100%",}}>
              <BasicTableA></BasicTableA>
            </Col>
            <Col xs={6} style={{height: "100%"}}> 
              <BasicTableA></BasicTableA>
            </Col>
          </Row>
           
        
        </Row>
      </div>
      
    </ThemeProvider>

  );
};


export default HomePage


