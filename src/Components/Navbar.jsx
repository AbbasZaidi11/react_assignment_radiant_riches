import { AppBar, Toolbar, Typography, Box, styled } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
const Search = styled("div")`
  width: 258px;
  height: 37px;
  top: 14px;
  left: 480px;
  position: relative;
  radius: 8px;
  background-color: #ffffff;
  border-radius: 5px;
  border-width: 1px;
  border-top-color: #e1e4e6;
  margin-bottom: 21px;
`;

const Header = styled(AppBar)`
  position: fixed;
  margin: 0px;
  overflow-x: hidden;
  padding: 0px;
`;
const StyledToolBar = styled(Toolbar)`
  width: 100%; /* Removed fixed width */
  overflow-x: hidden !important;
  background-color: #212731;
  height: 64px;
`;

const SearchIconWrapper = styled("div")`
  & > svg {
    color: black;
    width: 24px;
    height: 24px;
    top: 8px;
    left: 5px;
    position: relative;
  }
`;
const Options = styled(Box)`
  display: flex;
  flex-direction: row;
  position: relative;
  left: 630px;
  justify-content: space-between;
  width: 500px;
  padding-left: 20px;
  & > p {
    color: #d1d6da;
    font-style: Inter;
  }
`;
function Navbar() {
  return (
    <>
      <Header>
        <StyledToolBar>
          <Search>
            <SearchIconWrapper>
              <SearchTwoToneIcon />
            </SearchIconWrapper>
          </Search>
          <Options>
            <Typography>Categories</Typography>
            <Typography>Website Builders</Typography>
            <Typography>Today's deals</Typography>
          </Options>
        </StyledToolBar>
      </Header>
    </>
  );
}

export default Navbar;
