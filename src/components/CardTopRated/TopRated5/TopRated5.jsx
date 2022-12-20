

import { Link } from "react-router-dom";

function Item() {
  return (
    <>
      <div className='col'>
        <div className='food-card card'>
          <div className='top-favourite'>
            <p className='top-quantity'>
            <Link className="top-link" to='/all_item'>TOP</Link>
            </p>
          </div>
          <div className='item-info'>
            <div className="box-img"><img src="https://firebasestorage.googleapis.com/v0/b/ra-order.appspot.com/o/images%2Fbanh-trang.png?alt=media&token=ef8471b9-d220-440b-b925-c0de18ba1620" className='card-img-top1' alt='...' /></div>
            <div className='card-body'>
              <div className="card-top-text"><h5 className='card-title1'>Bán 1000k+/tháng</h5></div>
              <div className='price-and-buy'>
                <div className="name-text"> 
                  <p className='card-text1'>Dung gà bán bimbim</p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
