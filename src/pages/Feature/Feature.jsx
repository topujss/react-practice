import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Feature = () => {
  return (
    <>
      <Header />
      <div className="section flex justify-between gap-5 max-w-screen-lg mx-auto">
        <div className="left-menu w-1/4">
          <ul className="border border-emerald-400 p-5 divide-y divide-violet-500">
            <li>
              <NavLink className="mt-3 block" to="java">
                java
              </NavLink>
            </li>
            <li>
              <NavLink className="mt-3 block" to="python">
                Python
              </NavLink>
            </li>
            <li>
              <NavLink className="mt-3 block" to="ai">
                AI
              </NavLink>
            </li>
            <li>
              <NavLink className="mt-3 block" to="cpp">
                C++
              </NavLink>
            </li>
            <li>
              <NavLink className="mt-3 block" to="javascript">
                Javascript
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right-show w-3/4">
          <Outlet />
        </div>
      </div>
      
    </>
  );
};

export default Feature;
