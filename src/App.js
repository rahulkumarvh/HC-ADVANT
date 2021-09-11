import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dropdown from "./components/navbar/Dropdown";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Contact from "./components/contact/Contact";
import Product from "./components/EnRProducts/Products";
import Careers from "./components/careers/Careers";
import Footer from "./components/footer/Footer";
import RealEstate from "./components/real-estate/RealEstate";
import HR from "./components/hr-consultancy/HR";
import Emerging from "./components/emerging-markets/Emerging";

function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/real-estate" exact component={RealEstate} />
          <Route path="/hr-consultancy" exact component={HR} />
          <Route path="/emerging-markets" exact component={Emerging} />
          <Route path="/careers" component={Careers} />
          <Route path="/softwares" exact component={Product} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
