import React from "react";

const LuluButton = ({ onClick, buttonName }) => {
  const buttonStyle = {
    padding: "20px 40px",
    fontSize: "18px",
    backgroundColor: "#007acc",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px", // This adds vertical spacing
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {buttonName}
    </button>
  );
};

export default LuluButton;
