import "./App.css";
import { useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import { AppBar, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";

function App() {
  const [command, setCommand] = useState("Generate super-secure password!");
  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(0);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = () => {};

  // rules
  const [checkLength, setCheckLength] = useState(false);
  const [minLength, setMinLength] = useState(16);

  const checkPassword = (input: string) => {
    const inputLength = input.length;
    setError(false);
    setErrorMessage("");
    if (checkLength) {
      if (inputLength < minLength) {
        setError(true);
        setErrorMessage("Increase password length");
      }
    }
    setPassword(input);
    setPasswordLength(inputLength);
    //setError(true);
  };

  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <Button variant="outlined">Outlined</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {command}
          </Typography>

          <Button color="inherit" onClick={generatePassword}>
            Generate
          </Button>
        </Toolbar>
      </AppBar>
      <Stack spacing={2} my={4}>
        <Box gap={4}>
          <Stack spacing={2}>
            <TextField
              error={error}
              fullWidth
              label="Enter Password"
              id="fullWidth"
              value={password}
              helperText={errorMessage}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                checkPassword(event.target.value);
              }}
            />
            {checkLength
              ? `password length: ${passwordLength}/${minLength}`
              : null}
          </Stack>
        </Box>
        <Divider>LENGTH REQUIREMENTS</Divider>
        <Stack direction="row" spacing={2} sx={{ width: 600 }}>
          <FormControlLabel
            sx={{ width: 600 }}
            control={
              <Checkbox
                checked={checkLength}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCheckLength(event.target.checked);
                }}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Password length must be at least"
          />
          <Slider
            aria-label="Password length"
            defaultValue={16}
            valueLabelDisplay="on"
            value={minLength}
            onChange={(event: Event, newValue: number | number[]) => {
              if (typeof newValue === "number") {
                setMinLength(newValue);
              }
            }}
          />
        </Stack>
        <FormControlLabel
          control={
            <Checkbox
              checked={false}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          }
          label="Password length must be a prime number: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={false}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          }
          label="Password length must be a from the Fibonacci sequence: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89"
        />
        <Divider>SPECIAL CHARACTER REQUIREMENTS</Divider>
        <FormControlLabel
          control={
            <Checkbox
              checked={false}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          }
          label="Password must contain a lowercase, and an uppercase letter"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={false}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          }
          label="Password must include one of these special characters: '! @ # $ % ^ & * ( ) _ + - = [ ] { } | ; : , . < > ?'"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={false}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          }
          label="Password must include one of these emojis: 😀, 😎, 😂, 👍, 🎉, 💡, 🌟, 🔑"
        />
        <Divider>ARBITRARY REQUIREMENTS (THE GOOD STUFF)</Divider>
        <FormControlLabel
          control={
            <Checkbox
              checked={false}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          }
          label="Password must be a palindrome"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={false}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          }
          label="AlL tHe LeTtErS iN tHe PaSsWoRd MuSt AlTeRnAtE bEtWeEn UpPeRcAsE aNd LoWeRcAsE"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={false}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          }
          label="Must contain color in HEX"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={false}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            />
          }
          label="must include word"
        />
      </Stack>

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}

export default App;
