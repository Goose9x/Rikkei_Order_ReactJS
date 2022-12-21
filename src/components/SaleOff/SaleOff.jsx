import React from "react";
import Slider from "react-slick";
import "./SaleOff.css";
import SaleOff0 from "../CardSaleOff/SaleOff0/SaleOff0"
import SaleOff1 from "../CardSaleOff/SaleOff1/SaleOff1"
import SaleOff2 from "../CardSaleOff/SaleOff2/SaleOff2"
import SaleOff3 from "../CardSaleOff/SaleOff3/SaleOff3"
import SaleOff4 from "../CardSaleOff/SaleOff4/SaleOff4"
import SaleOff5 from "../CardSaleOff/SaleOff5/SaleOff5"
import SaleOff6 from "../CardSaleOff/SaleOff6/SaleOff6"
import SaleOff7 from "../CardSaleOff/SaleOff7/SaleOff7"
import SaleOff8 from "../CardSaleOff/SaleOff8/SaleOff8"
import SaleOff9 from "../CardSaleOff/SaleOff9/SaleOff9"
import SaleOff10 from "../CardSaleOff/SaleOff10/SaleOff10"
function TopRated() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
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
            <SaleOff0 />
          </div>
          <div>
            <SaleOff1 />
          </div>
          <div>
            <SaleOff2 />
          </div>
          <div>
            <SaleOff3 />
          </div>
          <div>
            <SaleOff4 />
          </div>
          <div>
            <SaleOff5 />
          </div>
          <div>
            <SaleOff6 />
          </div>
          <div>
            <SaleOff7 />
          </div>
          <div>
            <SaleOff8 />
          </div>

          <div>
            <SaleOff9 />
          </div>

          <div>
            <SaleOff10 />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default TopRated;
