import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const StyledBottomNav = styled(Box)`
  position: relative;
  background-color: #212731;
  height: 452px;
  width: 1592px;
  padding: 0;
  margin-top: 10px;
`;
const StyledCategories = styled(Box)`
  position: relative;
  left: 120px;
  top: 80px;
`;
const StyledContact = styled(Box)`
  position: relative;
  left: 300px;
  bottom: 70px;
  left: 700px;
`;
function BottomNavBar() {
  return (
    <StyledBottomNav>
      <StyledCategories>
        <Typography
          style={{
            fontSize: "16px",
            color: "#FFFFFF",
            fontWeight: "400",
            fontStyle: "Inter",
            marginBottom: "10px",
          }}
        >
          CATEGORIES
        </Typography>
        <Typography
          style={{
            fontSize: "13px",
            color: "#B6BDC4",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          Web Builder
        </Typography>
        <Typography
          style={{
            fontSize: "13px",
            color: "#B6BDC4",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          Hosting
        </Typography>
        <Typography
          style={{
            fontSize: "13px",
            color: "#B6BDC4",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          Data Center
        </Typography>
        <Typography
          style={{
            fontSize: "13px",
            color: "#B6BDC4",
            fontWeight: "400",
          }}
        >
          Robotic-Automation
        </Typography>
      </StyledCategories>

      <StyledContact>
        <Typography
          style={{
            fontSize: "16px",
            color: "#FFFFFF",
            fontWeight: "400",
            fontStyle: "Inter",
            marginBottom: "10px",
          }}
        >
          CONTACT
        </Typography>
        <Typography
          style={{
            fontSize: "13px",
            color: "#B6BDC4",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          Contact
        </Typography>
        <Typography
          style={{
            fontSize: "13px",
            color: "#B6BDC4",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          Privacy Policy
        </Typography>
        <Typography
          style={{
            fontSize: "13px",
            color: "#B6BDC4",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          Terms of Service
        </Typography>
        <Typography
          style={{
            fontSize: "13px",
            color: "#B6BDC4",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          Categories
        </Typography>
        <Typography
          style={{
            fontSize: "13px",
            color: "#B6BDC4",
            fontWeight: "400",
          }}
        >
          About
        </Typography>
      </StyledContact>
      <Typography
        style={{
          position: "relative",
          left: "1200px",
          bottom: "160px",
          color: "#D1D6DA",
          fontSize: "13px",
        }}
      >
        United States
        <ExpandMoreIcon style={{ position: "relative", top: "8px" }} />
      </Typography>
    </StyledBottomNav>
  );
}

export default BottomNavBar;
