import React from 'react';
import '../../styles/components/Introduce/index.scss';

const Introduce = () => {
  return <div className="introduce-comp">
    <div className="introduce-comp-left">
      <p>The easiest way to find the best book!</p>
      <span>With us, you can shop online & help save your high street at the same time</span>
      <button>EXPLORE BOOK</button>
    </div>
    <div className="introduce-comp-right">
      <img src="./assets/images/banner-bookzone.jpeg" alt="banner" />
    </div>
  </div>;
};

export default Introduce;
