import React from 'react';
import { Link } from 'gatsby';

export const Header: React.FC = () => {
  return (
    <header
      className="flex flex-col h-14 gradient-pinksea drop-shadow-lg"
    >
      <section
        className="
          flex items-center h-full px-2 md:px-9 justify-between
        "
      >
        <Link
          className="
            font-silk text-lg md:text-xl font-semibold text-white
          "
          to="/"
        >
          SILVER.GI.LOG
        </Link>
        <ul className="header_nav">
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/posts">
              Posts
            </Link>
          </li>
          <li>Projects</li>
        </ul>
      </section>
    </header>
  );
};
