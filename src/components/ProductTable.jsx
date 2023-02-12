import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ProductTable = ({ prods }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prods.map((prod) => (
            <TableRow key={prod.id}>
              <TableCell>{prod.title}</TableCell>
              <TableCell>{prod.description}</TableCell>
              <TableCell>{prod.price}</TableCell>
              <TableCell>
                {/* <Link to={`/employees/${prod.id}`}>
                  <IconButton>
                    <ArrowForwardIcon />
                  </IconButton>
                </Link>
                <Link to={`/employees/${prod.id}/edit`}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton onClick={() => onDeleteEmployee(prod.id)}>
                      <DeleteIcon />
                    </IconButton> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
