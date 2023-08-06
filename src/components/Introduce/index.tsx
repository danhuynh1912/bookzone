import React from 'react';
import '../../styles/components/Introduce/index.scss';

const Introduce = () => {
  return (
    <div className="introduce-comp">
      <div className="introduce-comp-left">
        <p>TOGETHER IN STYLE</p>
        <span>Hai người, một tâm hồn - Đồng điệu phong cách cùng Danhuynh shop</span>
        <button>XEM THÊM</button>
      </div>
      <div className="introduce-comp-right">
        <img src="./assets/images/banner-bookzone.jpeg" alt="banner" />
      </div>
    </div>
  );
};

export default Introduce;
