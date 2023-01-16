import React from "react";
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="row mb-6 py-4 display-flex">
      <div className="row">
        <div className="col-6">
          <h2 className="name">Sophia Marousis</h2>
        </div>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </header>
  );
}