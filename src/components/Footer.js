import React from "react";

export default function Footer() {
  // const styles = {
  //   footerStyle: {
  //     position: "fixed",
  //     left: "0",
  //     bottom: "0",
  //     width: "100%",
  //     //backgroundColor: "#d1b3c4",
  //   },
  // };

  return (
    <footer>
      <div className="row justify-content-center text-center mt-3 mb-3">
        <div className="row col-3">
          <div className="col">
            <a href="mailto:maroursiss@gmail.com">Email</a>
          </div>
          <div className="col">
            <a href="https://github.com/marousiss">GitHub</a>
          </div>
          <div className="col">
            <a href="https://www.linkedin.com/in/sophiamarousis/">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
