import React from "react";
import Slider from "react-slick";
import "./SaleOff.css";
import CardSaleOff from "../CardSaleOff/CardSaleOff";
function TopRated() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className='top-rated-items'>
       <div className="wrapper-top-rated">
       <h2> Sản phẩm giảm giá </h2>
        <button className="btn">Xem thêm</button>
       </div>
        <Slider {...settings}>
          <div>
            <CardSaleOff />
          </div>
          <div>
            <CardSaleOff />
          </div>
          <div>
            <CardSaleOff />
          </div>
          <div>
            <CardSaleOff />
          </div>
          <div>
            <CardSaleOff />
          </div>
          <div>
            <CardSaleOff />
          </div>
          <div>
            <CardSaleOff />
          </div>
          <div>
            <CardSaleOff />
          </div>
          <div>
            <CardSaleOff />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default TopRated;
