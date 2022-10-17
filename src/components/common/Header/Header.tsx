import React from 'react';

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
        <h1
          className="
            font-silk text-lg md:text-xl font-semibold text-white
          "
        >
          SILVER.GI.LOG
        </h1>
        <ul className="header_nav">
          <li>About</li>
          <li>Posts</li>
          <li>Tags</li>
          <li>Projects</li>
        </ul>
      </section>
    </header>
  );
};
