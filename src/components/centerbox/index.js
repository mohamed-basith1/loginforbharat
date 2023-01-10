import React from "react";

const Centerbox = ({ height, width, color, gap, children }) => {
  return (
    <div
      style={{
        height: height,
        width: width,
        background: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: gap,
        borderRadius: 3,
      }}
    >
      {children}
    </div>
  );
};

export default Centerbox;
