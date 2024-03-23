import "./App.css";
import { useState } from "react";

import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import { AppBar, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  const [command, setCommand] = useState(
    "Click on the land to place your first Dragonball"
  );
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

  const generatePassword = () => {};

  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <Button variant="outlined">Outlined</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {command}
          </Typography>

          <Button color="inherit" onClick={generatePassword}>
            Optimize placement
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "#cfe8fc",
          height: "80%",
        }}
      >
        Test
      </Box>
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
