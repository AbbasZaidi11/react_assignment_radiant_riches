import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
const StyledTitle = styled(Typography)`
  font-size:102px
  width: 1006px;
  color: #2c384a
`;
const StyledTitleContainer = styled(Box)`
  top: 102px;
  position: relative;
  width: 1024px;
  height: 155px;
  left: 330px;
`;
const Sortsection = styled(Box)`
  display: flex;
  alignitems: center;
  & > p {
    font-size: 14px;
    color: #4b5665;
    line-height: 20px;
    padding: 5px;
    margin-left: 8px;
    margin-right: 15px;
  }
  & > div > p {
    font-size: 14px;
    color: #4b5665;
    line-height: 20px;
    padding: 5px;
    margin-left: 8px;
    margin-right: 15px;
  }
  & > svg {
    position: relative;
    top: 6px;
  }
`;
function Title() {
  return (
    <>
      <StyledTitleContainer>
        <StyledTitle variant="h3">Best Website builders in the US</StyledTitle>
        <Divider style={{ height: "2px", backgroundColor: "#ccc" }}></Divider>
        <Sortsection>
          <Typography>
            {" "}
            <CheckCircleOutlineIcon />
            Last Updated - February 22,2020
          </Typography>
          <Typography>
            <InfoOutlinedIcon />
            Advertising Disclosure
          </Typography>
          <div style={{ marginLeft: "400px" }}>
            <Typography>
              Top Relevant <ExpandMoreOutlinedIcon />
            </Typography>
          </div>
        </Sortsection>
        <Divider style={{ height: "2px", backgroundColor: "#ccc" }}></Divider>
      </StyledTitleContainer>
    </>
  );
}

export default Title;
