import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./style.js";
import { Link, useHistory } from "react-router-dom";

export default function SignUp() {
  const history = useHistory();
  const classes = useStyles();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const hadnleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const response = await fetch("/signup", {
      method: "POST",
      url: "/signup",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await response.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Succesfull");
      console.log("Registration Succesfull");
      history.push("/signin");
    }
  };

  return (
    <>
      <Container component="main" maxWidth="sm">
        <Card style={{ marginTop: "30px" }} variant="outlined">
          <CardContent>
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form
                className={classes.form}
                method="POST"
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      
                      name="name"
                      variant="outlined"
                      required
                      fullWidth
                      label="Your Name"
                      type="text"
                      value={user.name}
                      onChange={hadnleInput}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      value={user.email}
                      type="email"
                      onChange={hadnleInput}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="phone"
                      label="Enter Phone number"
                      value={user.phone}
                      onChange={hadnleInput}
                      
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={user.password}
                      onChange={hadnleInput}
                      
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="cpassword"
                      label="Confirm Password"
                      type="password"
                      id="password"
                      value={user.cpassword}
                      onChange={hadnleInput}
                      
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={postData}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="/signin" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
