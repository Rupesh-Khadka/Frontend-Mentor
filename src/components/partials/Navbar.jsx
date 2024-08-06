import React from 'react';
import logo from '../../assets/image/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="frst py-md ">
          <div className="justify-center items-center flex bold text-white frst">
            Looking to hire developers? <span className="p-sm"><u>Visit our Hiring Platform</u></span>
          </div>
        </nav>
        <nav className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <div className="text-lg mx-xl flex items-center justify-center">
              <img className="logo mx-sm" src={logo} alt="Frontend Mentor Logo" />
              <span class="le ">Frontend</span> <span class="px-sm">Mentor</span>
            </div>
          </div>
          <div>
            <ul className="flex list-none items-center mx-xl text-sm">
              <li className="link head p-sm bold">
                <Link to="/learningpath"><i>LEARNING PATHS</i></Link>
              </li>
              <li className="link head p-sm bold">
                <Link to="/challenges"><i>CHALLENGES</i></Link>
              </li>
              <li className="link head p-sm bold">
                <Link to="/solution"><i>SOLUTION</i></Link>
              </li>
              <li className="link head p-sm bold">
                <Link to="/articles"><i>ARTICLES</i></Link>
              </li>
              <li className="link head p-sm bold">
                <Link to="/unlockpro"><i>UNLOCK PRO</i></Link>
              </li>
              <li className="head bold items-center justify-center flex bg-black border-radius  ">
                 <i >Log in with GITHUB<i className="fab fa-github p-sm"></i></i>
                 
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
