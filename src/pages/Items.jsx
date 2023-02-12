import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "../components/Item";

const Items = ({ prods, onAddCart, onDecrementCart }) => {
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
          Products
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

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {/*  */}
          <Item
            prods={prods}
            onAddCart={onAddCart}
            onDecrementCart={onDecrementCart}
          />
        </Grid>
      </Container>
    </>
  );
};

export default Items;
