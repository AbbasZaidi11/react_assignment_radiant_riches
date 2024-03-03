import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

function SignUp() {
  return (
    <Box style={{ position: "relative", left: "340px", display: "flex" }}>
      <Typography
        style={{ fontSize: "32px", alignContent: "left", color: "#5C6874" }}
      >
        Sign up and get exclusive special deals
      </Typography>
      <TextField
        style={{ marginLeft: "60px", height: "52px", width: "320px" }}
      ></TextField>
      <Button style={{ marginLeft: "5px", height: "52px" }} variant="contained">
        Sign Up
      </Button>
    </Box>
  );
}

export default SignUp;
