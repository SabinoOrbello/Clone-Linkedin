import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LogoJob = () => {
  return (
    <>
      <Link to="/jobs" className="d-flex flex-column align-items-center bord text-decoration-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="#666666"
          class="mercado-match"
          width="25"
          height="25"
          focusable="false"
        >
          <path d="M22.84 10.22L21 6h-3.95V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2l2.22 5.18A3 3 0 007 13h14a2 2 0 001.84-2.78zM15.05 6h-6V5a1 1 0 011-1h4a1 1 0 011 1zM7 14h15v3a3 3 0 01-3 3H5a3 3 0 01-3-3V8.54l1.3 3A4 4 0 007 14z"></path>
        </svg>
        <p className="mercado-match fs-12">Lavoro</p>
      </Link>
    </>
  );
};

export default LogoJob;
