import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const StyledPaths = styled(Box)`
  /* Removed fixed widths */
  width: 100%;
  margin-top: 25px;
  position: relative;
  left: 330px;
  overflow-x: hidden !important;

  display: flex;
  & > p {
    color: #5c6874;
    font-size: 14px;
    margin-left: 10px;
  }
  & > svg {
    color: #5c6874;
    font-size: 14px;
    margin-left: 10px;
  }
`;
const StyledToolSection = styled(Box)`
  /* Removed fixed widths */
  width: 100%;
  display: flex;
  margin-top: 80px;
  position: relative;
  left: 330px;
  overflow-x: hidden !important;

  & > p {
    margin-left: 20px;
    margin-right: 30px;
    color: #4b5665;
    font-style: Inter;
    font-weight: 400;
    font-size: 14px;
  }
`;
function Tools() {
  return (
    <>
      <StyledToolSection>
        <Typography>Tools</Typography>
        <Typography>AWS Builder</Typography>
        <Typography>Start Build</Typography>
        <Typography>Build Supplies</Typography>
        <Typography>Tooling</Typography>
        <Typography>BlueHosting</Typography>
      </StyledToolSection>
      <StyledPaths>
        <Typography>Home </Typography>
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
        <Typography>Hosting for All </Typography>
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
        <Typography>Hosting </Typography>
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
        <Typography>Hosting6 </Typography>
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
        <Typography>Hosting5 </Typography>
      </StyledPaths>
    </>
  );
}

export default Tools;
