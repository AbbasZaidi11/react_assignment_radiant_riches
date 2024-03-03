import { Typography, Box, Button } from "@mui/material";
import styled from "styled-components";
const StyledRelatedDeals = styled(Typography)`
  font-size: 44px !important;
  font-weight: 400;
  font-style: Inter;
  color: #2c384a;
`;
const StyledBottomProductRow = styled("div")`
  position: relative;
  left: 350px;
  height: 400px;
  width: 100%; /* Removed fixed width */
  overflow-x: hidden !important;
  overflow-y: hidden !important;
`;
function BottomProductRow() {
  return (
    <StyledBottomProductRow>
      <StyledRelatedDeals>Related deals you might like for</StyledRelatedDeals>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "hidden",
        }}
      >
        <Box style={{ alignItems: "center", margin: "20px", padding: "5px" }}>
          <img
            src="src\images\187db358671328189d3da83955a6ffe9.png"
            style={{
              width: "141px",
              height: "103px",
              position: "relative",
              left: "30px",
            }}
          ></img>
          <Typography
            style={{
              position: "relative",
              left: "51px",
              top: "5px",
              color: "#626E79",
              fontWeight: "700",
            }}
          >
            Webbuilder 1
          </Typography>
          <Typography
            style={{
              position: "relative",
              color: "#626E79",
              top: "5px",
              right: "2px",
              fontWeight: "400",
              fontSize: "16px",
              textAlign: "left",
              paddingBottom: "2px",
            }}
          >
            Computer Modern clasic with wix support
          </Typography>
          <Typography
            component="span"
            sx={{
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            $39.96&nbsp;
            <Typography
              variant="body2"
              sx={{ fontStyle: "italic", color: "#9FA9B3" }}
            >
              $49.96&nbsp;
            </Typography>{" "}
            <Typography sx={{ fontStyle: "Inter", color: "red", size: "13px" }}>
              (20% Off)
            </Typography>
          </Typography>
          <Button
            variant="contained"
            style={{
              position: "relative",
              backgroundColor: "#1b88f4",
              width: "232px",
              height: "48px",
              radius: "12px",
              top: "45px",
              right: "180px",
            }}
          >
            View Deal
          </Button>
        </Box>
        <Box style={{ alignItems: "center", margin: "20px", padding: "5px" }}>
          <img
            src="src\images\187db358671328189d3da83955a6ffe9.png"
            style={{
              width: "141px",
              height: "103px",
              position: "relative",
              left: "30px",
            }}
          ></img>
          <Typography
            style={{
              position: "relative",
              left: "51px",
              top: "5px",
              color: "#626E79",
              fontWeight: "700",
            }}
          >
            Webbuilder 2
          </Typography>
          <Typography
            style={{
              position: "relative",
              color: "#626E79",
              top: "5px",
              right: "2px",
              fontWeight: "400",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            Computer Modern clasic with wix support
          </Typography>
          <Typography
            component="span"
            sx={{
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            $39.96&nbsp;
            <Typography
              variant="body2"
              sx={{ fontStyle: "italic", color: "#9FA9B3" }}
            >
              $49.96&nbsp;
            </Typography>{" "}
            <Typography sx={{ fontStyle: "Inter", color: "red", size: "13px" }}>
              (20% Off)
            </Typography>
          </Typography>

          <Button
            variant="contained"
            style={{
              position: "relative",
              backgroundColor: "#1b88f4",
              width: "232px",
              height: "48px",
              radius: "12px",
              top: "45px",
              right: "180px",
            }}
          >
            View Deal
          </Button>
        </Box>
        <Box style={{ alignItems: "center", margin: "20px", padding: "5px" }}>
          <img
            src="src\images\187db358671328189d3da83955a6ffe9.png"
            style={{
              width: "141px",
              height: "103px",
              position: "relative",
              left: "30px",
            }}
          ></img>
          <Typography
            style={{
              position: "relative",
              left: "51px",
              top: "5px",
              color: "#626E79",
              fontWeight: "700",
            }}
          >
            Webbuilder 3
          </Typography>
          <Typography
            style={{
              position: "relative",
              color: "#626E79",
              top: "5px",
              right: "2px",
              fontWeight: "400",
              fontSize: "16px",
              textAlign: "left",
              paddingBottom: "2px",
            }}
          >
            Computer Modern clasic with wix support
          </Typography>
          <Typography
            component="span"
            sx={{
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            $39.96&nbsp;
            <Typography
              variant="body2"
              sx={{ fontStyle: "italic", color: "#9FA9B3" }}
            >
              $49.96&nbsp;
            </Typography>{" "}
            <Typography sx={{ fontStyle: "Inter", color: "red", size: "13px" }}>
              (20% Off)
            </Typography>
          </Typography>

          <Button
            variant="contained"
            style={{
              position: "relative",
              backgroundColor: "#1b88f4",
              width: "232px",
              height: "48px",
              radius: "12px",
              top: "45px",
              right: "180px",
            }}
          >
            View Deal
          </Button>
        </Box>
      </Box>
    </StyledBottomProductRow>
  );
}

export default BottomProductRow;
