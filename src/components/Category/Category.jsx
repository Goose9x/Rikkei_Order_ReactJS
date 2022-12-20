
import React from "react";
import image from "../../assets/bimbim1.png";
import { Link } from "react-router-dom";
function Category() {
  return (
    <>
      <div className='categories'>
        <div className='cate-title1'>
          <Link to='#'>Tất cả sản phẩm</Link>
        </div>
        <div className='item-category'>
          <div className='category category1'>
            <img src={image} alt='ha' />
            <p>Bim Bim</p>
          </div>
          <div className='category category2'>
            <img src={image} alt='ha' />
            <p>Nước uống</p>
          </div>
          <div className='category category3'>
            <img src={image} alt='ha' />
            <p>Đồ Ăn Nhẹ</p>
          </div>
          <div className='category category4'>
            <img src={image} alt='ha' />
            <p>Khác</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
