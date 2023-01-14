import React from "react";

export default function Footer() {
  const styles = {
    footerStyle: {
      position: "fixed",
      left: "0",
      bottom: "0",
      width: "100%",
      //backgroundColor: "#d1b3c4",
    },
  };

  return (
    <footer style={styles.footerStyle}>
      <div className="container text-center mt-3 mb-3">
        <p>footer info</p>
      </div>
    </footer>
  );
}
