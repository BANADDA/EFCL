import React from "react";

const CustomButton = ({ href, children }) => {
  const buttonStyle = {
    backgroundColor: "#4CAF50", // Green color
    borderColor: "#4CAF50",
    color: "#fff",
    padding: "20px 50px", // Increase padding for a larger button
    fontSize: "1.5rem", // Increase font size
    fontWeight: "bold",
    borderRadius: "5px",
    textDecoration: "none",
    display: "inline-block",
    cursor: "pointer"
  };

  const buttonHoverStyle = {
    backgroundColor: "#45A049" // Darker green on hover
  };

  return (
    <a
      href={href}
      style={buttonStyle}
      onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
      onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
    >
      {children}
    </a>
  );
};

export default CustomButton;
