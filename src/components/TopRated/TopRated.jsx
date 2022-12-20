import React from "react";
import Slider from "react-slick";
import "./TopRated.css";
import CardTopRated from "../CardTopRated/CardTopRated";
import TopRated1 from "../CardTopRated/TopRated1/TopRated1";
import TopRated2 from "../CardTopRated/TopRated2/TopRated2";
import TopRated3 from "../CardTopRated/TopRated3/TopRated3";
import TopRated4 from "../CardTopRated/TopRated4/TopRated4";
import TopRated5 from "../CardTopRated/TopRated5/TopRated5";
import TopRated6 from "../CardTopRated/TopRated6/TopRated6";
import TopRated7 from "../CardTopRated/TopRated7/TopRated7";
import TopRated8 from "../CardTopRated/TopRated8/TopRated8";
import TopRated9 from "../CardTopRated/TopRated9/TopRated9";
import TopRated10 from "../CardTopRated/TopRated10/TopRated10";
import TopRated11 from "../CardTopRated/TopRated11/TopRated11";
function TopRated() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
  };

  return (
    <>
      <div className='sale-off-items'>
        <div className='wrapper-sale-off'>
          <h2> Sản phẩm bán chạy </h2>
          <button className='btn'>Xem thêm</button>
        </div>
        <Slider {...settings}>
          <div className='abc'>
            <CardTopRated />
          </div>
          <div>
            <TopRated1 />
          </div>
          <div>
            <TopRated2 />
          </div>
          <div>
            <TopRated3 />
          </div>
          <div>
            <TopRated4 />
          </div>
          <div>
            <TopRated5 />
          </div>
          <div>
            <TopRated6 />
          </div>
          <div>
            <TopRated7 />
          </div>
          <div>
            <TopRated8 />
          </div>
          <div>
            <TopRated9 />
          </div>
          <div>
            <TopRated10 />
          </div>
          <div>
            <TopRated11 />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default TopRated;
