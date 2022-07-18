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


const GroupPage = ({ value }) => {
  useEffect(() => {
    console.log("use effect!!");
  }, []);


  return (
    <div>
      This is Group Page Components.
    </div>
  );
}
export default GroupPage