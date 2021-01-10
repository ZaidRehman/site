import React from "react";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

export default function LayoutSection(props) {
  const { children, centerImage, ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="Zaid"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={centerImage} />
      {children}
      <Footer />
    </div>
  );
}
