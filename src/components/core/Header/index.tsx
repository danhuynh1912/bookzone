import React from 'react';
import '../../../styles/components/Header/index.scss';

const Header = () => {
  return (
    <div className="header-core">
      <div className="header-core-container">
        <div className="header-core-container-logo">
          <div>B</div>
          <div>BOOKZONE</div>
        </div>
        <div className="header-core-container-search">
          <input type="text" placeholder="what book are you looking for?" />
        </div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
