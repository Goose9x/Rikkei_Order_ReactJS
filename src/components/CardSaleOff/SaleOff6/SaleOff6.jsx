import image from "../../../assets/bimbim1.png";

import {Link} from "react-router-dom"
function Item() {
  return (
    <>
      <div className='sale-col'>
        <div className='sale-food-card card'>
          <div className='sale-favourite'>
            <div className='sale-quantity'>


            <div className="ribbon">
                <div className="wrap">
                    <span className="ribbon6">Giảm 30%</span>
                </div>
            </div>



            </div>
          
          </div>
          <div className='item-info'>
            <div className="box-img"><img src="https://firebasestorage.googleapis.com/v0/b/ra-order.appspot.com/o/images%2Fmi-hao-hao.png?alt=media&token=cc16c7d3-9aa8-4386-bdb6-e0040b4e5be1" className='card-img-top' alt='...' /></div>
            <div className='card-body'>
              <h5 className='card-title'>Bim Bim phomai </h5>
              <div className='price-and-buy'>
                <div>
                  <p className='card-text-sale'>đ5.000</p>

                  <p className='card-text'>đ10.000</p>
                  <div className='rating'>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star'></span>
                    <span className='fa fa-star'></span>
                    <span className='reviewNumber'>(2)</span>
                  </div>
                </div>
                <button className="btn-sale"><Link className="top-link" to='/all_item'>Mua Ngay</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
