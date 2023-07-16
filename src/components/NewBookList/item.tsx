import React from 'react';
import '../../styles/components/NewBookList/item.scss';

const Item = () => {
  return (
    <div className="new-book-item">
      <div className="new-book-item-image-container">
        <img src="./assets/images/new-book1.jpg" />
      </div>
      <hr />
      <div className="new-book-item-information">
        <div>
          <div className="title-information">
            <span>Writer</span>
          </div>
          <div className="content-information">
            <span>Danh Huynh</span>
          </div>
        </div>
        <div>
          <div className="title-information">
            <span>Buy now</span>
          </div>
          <div className="content-information">
            <span>190,000 </span>vnđ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
