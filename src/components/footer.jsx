import React from "react";

const Footer = () => {
  let regularDiv = {
    backgroundColor: "rgb(33, 37, 41)",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "10%",
    width: "100%",
  };
  let wrapperDiv = {
    display: "block",
    height: "100%",
    width: "100%",
  };
  return (
    <div style={{ height: "100%" }}>
      <div style={wrapperDiv} />
      <div style={regularDiv}>
        <font color="white">Seller-App | 2022 © tharindu.dev</font>
      </div>
    </div>
  );
};

export default Footer;
