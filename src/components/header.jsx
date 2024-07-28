import React from "react";
import CustomButton from "./CustomButton"; // Adjust the import path as needed

export const Header = (props) => {
  const feclStyle = {
    fontSize: "5rem", // Larger font size
    color: "#FFFFFF", // White color for better contrast
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add text shadow for better readability
    fontWeight: "bold",
    marginBottom: "80px", // Small gap between FECL and title
    textAlign: "center",
  };

  const headerStyle = {
    fontSize: "3.0rem", // Adjust this value as needed
    lineHeight: "1.2",
    fontWeight: "bold",
    color: "#FFFFFF", // White color for better contrast
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" // Add text shadow for better readability
  };

  const paragraphStyle = {
    fontSize: "2.5rem", // Adjust this value as needed
    marginTop: "35px",
    fontWeight: "500", // Slightly bold
    color: "#DFDDDD", // White color for better contrast
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" // Add text shadow for better readability
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1
  };

  const containerStyle = {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full height of the viewport
    textAlign: "center"
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay" style={overlayStyle}></div>
        <div className="container" style={containerStyle}>
          <div>
            <div style={feclStyle}>
              Fenviron Centre Limited (FECL)
            </div>
            <h1 style={headerStyle}>
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <p style={paragraphStyle}>
              {props.data ? props.data.paragraph : "Loading"}
            </p>
            <CustomButton href="#about">
              Learn More
            </CustomButton>
          </div>
        </div>
      </div>
    </header>
  );
};
