import React from "react";

const pages = [
  {
    href: "about",
    pageName: "About",
    linkName: "About me",
  },
  {
    href: "Portfolio",
    pageName: "Portfolio",
    linkName: "Portfolio",
  },
  {
    href: "contact",
    pageName: "Contact",
    linkName: "Contact",
  },
  {
    href: "resume",
    pageName: "Resume",
    linkName: "Resume",
  },
];

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="row mb-6 py-4 display-flex">
      <div className="row">
        <div className="col-6">
          <h2 className="name">Sophia Marousis</h2>
        </div>
        <div className="col-6">
          <ul className="nav nav-justified justify-content-center">
            {pages.map((page, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={`#${page.href}`}
                  onClick={() => handlePageChange(page.pageName)}
                  className={
                    currentPage === page.pageName
                      ? "nav-link active"
                      : "nav-link nav-text-white"
                  }
                >
                  {page.pageName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}