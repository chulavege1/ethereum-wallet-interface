import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const MarketIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 3h18v18H3V3z"
    />
  </svg>
);

const Route_nav: React.FC = (): ReactElement => {
  return (
    <nav>
      <Link to="market">
        <MarketIcon />
        Market
      </Link>
    </nav>
  );
};

export default Route_nav;
