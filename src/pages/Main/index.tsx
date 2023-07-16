import React from 'react';

// components
import Header from '../../components/core/Header/index.tsx';
import Introduce from '../../components/Introduce/index.tsx';
import NewBookList from '../../components/NewBookList/index.tsx';

// styles
import '../../styles/pages/Main/index.scss';

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Introduce />
        <NewBookList />
      </div>
    </div>
  );
};

export default MainPage;
