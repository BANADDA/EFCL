import React from "react";

export const Features = (props) => {
  const cardStyle = {
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    marginBottom: "20px",
    padding: "20px",
    textAlign: "center",
    minHeight: "300px", // Ensures all cards have the same height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "280px" // Adjusts the card width
  };

  const iconContainerStyle = {
    backgroundColor: "#025227", // Dark green background
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px auto" // Centering and margin for spacing
  };

  const iconStyle = {
    fontSize: "30px", // Adjust the icon size here
    color: "#fff" // Customize the icon color to white
  };

  const h3Style = {
    fontSize: "24px",
    marginTop: "10px"
  };

  const pStyle = {
    fontSize: "16px",
    color: "#777",
    fontWeight: "bold" // Slightly bold descriptions
  };

  const containerStyle = {
    textAlign: "center"
  };

  const sectionTitleStyle = {
    marginBottom: "40px"
  };

  return (
    <div id="features" style={containerStyle}>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title" style={sectionTitleStyle}>
          <h2>Our Values</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-4">
                  <div style={cardStyle}>
                    <div style={iconContainerStyle}>
                      <i className={d.icon} style={iconStyle}></i>
                    </div>
                    <h3 style={h3Style}>{d.title}</h3>
                    <p style={pStyle}>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
