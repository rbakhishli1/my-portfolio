import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-600 hover:text-white text-4xl font-bold cursive tracking widest"
            activeClassName="text-yellow"
          >
            Bakhishli
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-white cursive"
            activeClassName="text-red-100 bg-red-900"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-white cursive"
            activeClassName="text-red-100 bg-red-900"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-600 hover:text-white cursive"
            activeClassName="text-red-100 bg-red-900"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/rbakhishli1"
            className="mr-4"
            target="_blank"
            fgColor="#000000"
            bgColor="#b1b1b1"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://twitter.com/"
            className="mr-4"
            target="_blank"
            fgColor="#000000"
            bgColor="#b1b1b1"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/"
            className="mr-4"
            target="_blank"
            fgColor="#000000"
            bgColor="#b1b1b1"
            style={{ height: 40, width: 40 }}
          />
        </div>
      </div>
    </header>
  );
}
