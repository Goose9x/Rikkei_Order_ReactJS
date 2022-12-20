import image from "../../assets/bimbim1.png";
import "./CardSaleOff.css";
function Item() {
  return (
    <>
      <div className='top-col'>
        <div className='top-food-card card'>
          <div className='favourite'>
            <p className='quantity'>
              Stock: 10 <span className='status-on'></span>
            </p>
            <ion-icon name='heart-outline'></ion-icon>
          </div>
          <div className='item-info'>
            <img src={image} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>Bim Bim phomai </h5>
              <div className='price-and-buy'>
                <div>
                  <p className='card-text'>đ5.000</p>
                  <div className='rating'>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star checked'></span>
                    <span className='fa fa-star'></span>
                    <span className='fa fa-star'></span>
                    <span className='reviewNumber'>(2)</span>
                  </div>
                </div>
                <ion-icon name='bag-add-outline'></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
