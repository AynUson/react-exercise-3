import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableFooter } from "@mui/material";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
// import Table from "@mui/joy/Table";

const Total = ({ prods, props, prodOnCart }) => {
  const computeTotal = () => {
    let totalPrice = 0;
    prodOnCart.forEach((total) => {
      totalPrice += total.price * total.qty;
    });
    return totalPrice;
  };
  return (
    <>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Total
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Container>
      <Container
        disableGutters
        maxWidth="lg"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prodOnCart.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">
                    {row.description.length <= 50
                      ? row.description
                      : row.description.substr(0, 50) + "..."}
                  </TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                </TableRow>
              ))}

              <TableRow>
                <Divider justifycontent="flex-end">
                  <Chip label="TOTAL" />
                </Divider>
                <TableCell>Total</TableCell>
                <TableCell align="right">{computeTotal()}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Total;
