import "./App.css";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import { AppBar, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { popularEmojis } from "./emoji";
import { words } from "./words";
import { colors } from "./colors";

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const primeNumbers = [
    1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
    71, 73, 79, 83, 89, 97,
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fibonacciNumbers = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

  // states
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(0);
  const [minLength, setMinLength] = useState(16);
  const [color, setColor] = useState(colors[0]);
  const [word, setWord] = useState(words[0]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const escapedEmojis = popularEmojis
    .map((emoji) => emoji.replace(/[-\\/\\^$*+?.()|[\]{}]/g, "\\$&"))
    .join("|");

  // Creating a regex pattern
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const emojisRegex = new RegExp(`(?:${escapedEmojis})`);

  // check
  const [checkLength, setCheckLength] = useState(false);
  const [checkPrimeNumber, setCheckPrimeNumber] = useState(false);
  const [checkFibonacciNumber, setCheckFibonacciNumber] = useState(false);

  const [checkLetters, setCheckLetters] = useState(false);
  const [checkSpecialCharacters, setCheckSpecialCharacters] = useState(false);
  const [checkEmoji, setCheckEmoji] = useState(false);

  const [checkPalindrome, setCheckPalindrome] = useState(false);
  const [checkColorInHex, setCheckColorInHex] = useState(false);
  const [checkWord, setCheckWord] = useState(false);

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  const isPalindrome = (str: string) => {
    // Function to get code point at a specified position
    const getCodePoint = (str: string, index: number) => {
      const first = str.charCodeAt(index);
      if (first >= 0xd800 && first <= 0xdbff) {
        const second = str.charCodeAt(index + 1);
        if (second >= 0xdc00 && second <= 0xdfff) {
          return (first - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;
        }
      }
      return first;
    };

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      const leftCodePoint = getCodePoint(str, left);
      const rightCodePoint = getCodePoint(str, right);

      // Skip non-letter characters
      if (!/\p{L}/u.test(String.fromCodePoint(leftCodePoint))) {
        left++;
        continue;
      }
      if (!/\p{L}/u.test(String.fromCodePoint(rightCodePoint))) {
        right--;
        continue;
      }

      if (leftCodePoint !== rightCodePoint) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  };

  /* main method - password checking */
  useEffect(() => {
    const passwordUppercase = password.toUpperCase();

    setError(false);
    setErrorMessage("");

    // length
    if (checkLength) {
      if (passwordLength < minLength) {
        setError(true);
        setErrorMessage("Increase password length");
      }
    }
    if (checkPrimeNumber) {
      if (!primeNumbers.includes(passwordLength)) {
        setError(true);
        setErrorMessage("Password length should be a prime number");
      }
    }

    if (checkFibonacciNumber) {
      if (!fibonacciNumbers.includes(passwordLength)) {
        setError(true);
        setErrorMessage(
          "Password length should be from the Fibonacci sequence"
        );
      }
    }

    // characters
    if (checkLetters) {
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      if (!hasUppercase || !hasLowercase) {
        setError(true);
        setErrorMessage(
          `Password must include at least one lowercase and at least one uppercase character`
        );
      }
    }

    if (checkSpecialCharacters) {
      const hasSpecial = /[!@#$%^&*()_+\-=\\[\]{}|;:,.<>?]/.test(password);
      if (!hasSpecial) {
        setError(true);
        setErrorMessage(`Password must include at least one special character`);
      }
    }

    if (checkEmoji) {
      const hasEmoji = emojisRegex.test(password);
      if (!hasEmoji) {
        setError(true);
        setErrorMessage(`Password must include an emoji`);
      }
    }

    // arbitrary
    if (checkPalindrome) {
      if (!isPalindrome(password)) {
        setError(true);
        setErrorMessage(`Password must be a palindrome`);
      }
    }

    if (checkColorInHex) {
      if (!passwordUppercase.includes(color.hex)) {
        setError(true);
        setErrorMessage(
          `Password must include color ${color.name.toLowerCase()} in hex`
        );
      }
    }

    if (checkWord) {
      if (!passwordUppercase.includes(word.toUpperCase())) {
        setError(true);
        setErrorMessage(`Password must include word ${word}`);
      }
    }
  }, [
    checkColorInHex,
    checkEmoji,
    checkFibonacciNumber,
    checkLength,
    checkLetters,
    checkPalindrome,
    checkPrimeNumber,
    checkSpecialCharacters,
    checkWord,
    color.hex,
    color.name,
    emojisRegex,
    fibonacciNumbers,
    minLength,
    password,
    passwordLength,
    primeNumbers,
    word,
  ]);

  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <Button variant="outlined">Outlined</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Super-secure password generator!
          </Typography>
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
                setPassword(event.target.value);
                setPasswordLength(event.target.value.length);
              }}
            />
            <Typography variant="h6" gutterBottom>
              password length: {passwordLength}
              {checkLength ? "/" + minLength : null}
            </Typography>
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
              checked={checkPrimeNumber}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCheckPrimeNumber(event.target.checked);
              }}
            />
          }
          label="Password length must be a prime number: 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={checkFibonacciNumber}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCheckFibonacciNumber(event.target.checked);
              }}
            />
          }
          label="Password length must be a from the Fibonacci sequence: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89"
        />
        <Divider>SPECIAL CHARACTER REQUIREMENTS</Divider>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkLetters}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCheckLetters(event.target.checked);
              }}
            />
          }
          label="Password must contain a lowercase, and an uppercase letter"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkSpecialCharacters}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCheckSpecialCharacters(event.target.checked);
              }}
            />
          }
          label="Password must include one of these special characters: '! @ # $ % ^ & * ( ) _ + - = [ ] { } | ; : , . < > ?'"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkEmoji}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCheckEmoji(event.target.checked);
              }}
            />
          }
          label={`Password must include one of these emojis: ${popularEmojis.join(
            " "
          )}`}
        />
        <Divider>ARBITRARY REQUIREMENTS (THE GOOD STUFF)</Divider>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkPalindrome}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCheckPalindrome(event.target.checked);
              }}
            />
          }
          label="Password must be a palindrome"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkColorInHex}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCheckColorInHex(event.target.checked);
              }}
            />
          }
          label={`Must contain color "${color.name.toLocaleLowerCase()}" ${
            color.rgb
          } in HEX -> ${color.hex}`}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkWord}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCheckWord(event.target.checked);
              }}
            />
          }
          label={`must include word: ${word}`}
        />
      </Stack>
    </div>
  );
}

export default App;
