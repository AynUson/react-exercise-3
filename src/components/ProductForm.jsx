import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Input,
  TextField,
} from "@mui/material";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ onSubmit, initialValue }) => {
  const [form, setForm] = useState(
    initialValue || {
      title: "",
      description: "",
      category: "",
      price: "",
      image: "",
      qty: 0,
    }
  );
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const schema = Joi.object({
    title: Joi.string().min(2).max(100).required(),
    description: Joi.string().min(3).max(100).required(),
    category: Joi.string().min(3).max(100).required(),
    price: Joi.string().min(1).max(15).required(),
    image: Joi.string().min(3).max(999999).required(),
    qty: Joi.string().min(0).max(500).allow(0).optional(),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    onSubmit(form);
    navigate("/");
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setForm({
        ...form,
        image: event.target.result,
      });
      console.log(file.name);
      console.log(file.type);
      console.log(file.size + " bytes");
      console.log(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleChange = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value,
    });

    const { error } = schema
      .extract(input.name)
      .label(input.name)
      .validate(input.value);

    if (error) {
      setErrors({ ...errors, [input.name]: error.details[0].message });
    } else {
      delete errors[input.name];
      setErrors(errors);
    }
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);

    console.log(result);

    return !!result.error;
    // console.log(result);
  };

  return (
    <Grid
      container
      component="form"
      justifyContent="center"
      onSubmit={handleSubmit}
    >
      <Grid item xs={6}>
        <Card>
          <CardHeader title={`${initialValue ? "Edit" : "Add"} Product`} />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  error={!!errors.title}
                  helpertext={errors.title}
                  onChange={handleChange}
                  value={form.title}
                  label="Title"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  error={!!errors.description}
                  helpertext={errors.description}
                  onChange={handleChange}
                  value={form.description}
                  label="Description"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="category"
                  error={!!errors.category}
                  helpertext={errors.category}
                  onChange={handleChange}
                  value={form.category}
                  label="Category"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="price"
                  error={!!errors.price}
                  helpertext={errors.price}
                  onChange={handleChange}
                  value={form.price}
                  label="Price"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  variant="contained"
                  name="image"
                  error={!!errors.image}
                  helpertext={errors.image}
                  onChange={handleChange}
                  value={form.image}
                  label="Image"
                  type="file"
                ></Input>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button disabled={isFormInvalid()} type="submit" fullWidth>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductForm;
