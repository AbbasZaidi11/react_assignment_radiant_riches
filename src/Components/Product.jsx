import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import React from "react";
import { useState } from "react";
const StyledProduct = styled("div")`
  position: relative;
  left: 330px;
  height: 255px;
  width: 1024px;
  margin-top: 20px;
  display: flex;
`;
const ImageContainer = styled("div")`
  & > img {
    width: 141px;
    height: 103px;
  }
  position: relative;
  left: 25px;
  top: 15px;
`;
const StyledDescriptionContainer = styled("div")`
  width: 490px;
  position: relative;
  left: 48px;
`;
const StyledText = styled.span`
  font-weight: bold;
`;
const StyledShowMore = styled(Typography)`
  color: #1b88f4;
  margin-top: 10px;
`;
const StyledRatingBox = styled("div")`
  position: relative;
  left: 100px;
  width: 135px;
  height: 118px;
  background-color: #f3f9ff;
`;
const StyledViewButton = styled(Button)`
  position: relative;
  background-color: #1b88f4;
  width: 232px;
  height: 48px;
  radius: 12px;
  left: 60px;
  top: 30px;
`;
function Product(props) {
  const [value, setValue] = React.useState(props.stars);
  return (
    <StyledProduct>
      <ImageContainer>
        <img src="src\images\187db358671328189d3da83955a6ffe9.png"></img>
      </ImageContainer>
      <StyledDescriptionContainer>
        <Typography>
          <StyledText>{props.name}</StyledText> {props.desc}
        </Typography>
        <Typography style={{ fontWeight: "bold" }}>Main highlights</Typography>
        <div
          style={{
            position: "relative",
            left: "25px",
            marginTop: "5px",
            marginBottom: "9px",
          }}
        >
          <Typography>{props.highlite}</Typography>
        </div>
        <StyledShowMore>Show More</StyledShowMore>
      </StyledDescriptionContainer>
      <div>
        <StyledRatingBox>
          <Typography
            style={{
              fontSize: "32px",
              fontWeight: "32",
              color: "#074786",
              fontStyle: "inter",
              marginLeft: "35%",
            }}
          >
            {props.ratings}
          </Typography>
          <Typography
            style={{
              color: " #074786",
              fontSize: "14px",
              fontStyle: "inter",
              marginLeft: "25%",
            }}
          >
            {props.review}
          </Typography>
          <Rating
            style={{ marginLeft: "5%" }}
            name="simple-controlled"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </StyledRatingBox>
        <StyledViewButton variant="contained">View More</StyledViewButton>
      </div>
    </StyledProduct>
  );
}

export default Product;
