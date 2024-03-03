import BottomNavBar from "./Components/BottomNavBar";
import BottomProductRow from "./Components/BottomProductRow";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import SignUp from "./Components/SignUp";
import Title from "./Components/Title";
import Tools from "./Components/Tools";

function App() {
  return (
    <>
      <Navbar />
      <Title />
      <Tools />
      <Product
        name="WixPro 72-Inch Responsive Website Builder-"
        desc="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        highlite="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        ratings="9.8"
        review="Exceptional"
        stars="5"
      />
      <Product
        name="SiteCraft 68-Inch Ultimate Web Design Studio-"
        desc="Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
        highlite="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
        ratings="9.5"
        review="Excellent"
        stars="4.5"
      />

      <Product
        name="WixPro 72-Inch Responsive Website Builder-"
        desc="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
        highlite="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        ratings="9.3"
        review="Exceptional"
        stars="5"
      />

      <Product
        name="CDK Resposive Builder: "
        desc="An extensive library of widgets and apps, and detailed step-by-step guides"
        highlite={"Why we love it: 1.Documentation 2.Easy Use 3.Out Of Box"}
        ratings="9.1"
        review="Very Good"
        stars="4"
      />
      <BottomProductRow />
      <SignUp />
      <BottomNavBar />
    </>
  );
}

export default App;
