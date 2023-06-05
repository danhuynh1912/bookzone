import React from 'react';
import Header from '../../components/core/Header/index.tsx';
import Introduce from '../../components/Introduce/index.tsx';

// styles
import '../../styles/pages/Main/index.scss';

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Introduce />
      </div>
    </div>
  );
};

export default MainPage;
