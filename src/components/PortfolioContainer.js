import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {

  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="container portfolio-content">{renderPage()}</div>
      <Footer />
    </div>
  );
}

