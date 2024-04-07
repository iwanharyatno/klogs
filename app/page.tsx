'use client';

import { Lock, Person, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return <form className="p-4">
    <Paper className="p-4 text-center bg-blue-500 mb-4 max-w-md mx-auto">
      <Typography className="font-bold text-white" variant="h3" component="h1">The KLogs</Typography>
    </Paper>
    <Paper className="p-4 max-w-md mx-auto">
      <Typography paragraph className="text-center mb-8 font-bold">Login</Typography>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="usernamePassword">Username or Password</InputLabel>
        <OutlinedInput fullWidth
          id="usernamePassword"
          name="usernamePassword"
          label="Username or Password"
          startAdornment={
            <InputAdornment position="end">
              <Person />
            </InputAdornment>
          }
          className="mb-4" />
      </FormControl>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput fullWidth
          id="password"
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          startAdornment={
            <InputAdornment position="end">
              <Lock />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          className="mb-8" />
      </FormControl>
      <Button variant="contained" fullWidth>Submit</Button>
    </Paper>
  </form>
}