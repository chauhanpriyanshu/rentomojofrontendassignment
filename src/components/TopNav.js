import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNav = () => {
  return (
    <React.Fragment>
      <h1>RentoMojo Frontend UI/UX Assignment</h1>
      <h3>HomePage - User Table</h3>
      {/* <div className="nav-link">
        <NavLink to="/top" activeClassName="active">
          Top Stories
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          Latest Stories
        </NavLink>
        <NavLink to="/best" activeClassName="active">
          Best Stories
        </NavLink>
      </div> */}
    </React.Fragment>
  );
};

export default TopNav;