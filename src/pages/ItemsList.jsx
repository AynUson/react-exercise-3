import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import ProductTable from "../components/ProductTable";

const ItemsList = ({ prods }) => {
  return (
    <Container
      disableGutters
      maxWidth="lg"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <Grid container spacing={5} justifyContent="flex-end" textAlign="right">
        <Grid item xs={4}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            LinkComponent={Link}
            to="/prods/new"
          >
            Add Product
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ProductTable prods={prods} />
      </Grid>
    </Container>
  );
};

export default ItemsList;
