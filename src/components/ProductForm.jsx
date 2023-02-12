import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
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
    description: Joi.string().min(3).max(20).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    phone: Joi.string().min(6).max(15).allow("").optional(),
    address: Joi.string().min(3).max(500).allow("").optional(),
    website: Joi.string().uri().allow("").optional(),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
    navigate("/");
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
                  name="name"
                  error={!!errors.name}
                  helperText={errors.name}
                  onChange={handleChange}
                  value={form.name}
                  label="Title"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  error={!!errors.username}
                  helperText={errors.username}
                  onChange={handleChange}
                  value={form.username}
                  label="Description"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  error={!!errors.email}
                  helperText={errors.email}
                  onChange={handleChange}
                  value={form.email}
                  label="Category"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="phone"
                  error={!!errors.phone}
                  helperText={errors.phone}
                  onChange={handleChange}
                  value={form.phone}
                  label="Price"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="address"
                  error={!!errors.address}
                  helperText={errors.address}
                  onChange={handleChange}
                  value={form.address}
                  label="Image"
                  variant="standard"
                  fullWidth
                />
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