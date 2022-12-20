import image from "../../assets/bimbim1.png";
import "./Card.css";
function Card(props) {
  let cardData = props.cardData;
  console.log(cardData);
  return (
    <>
      <div className='col'>
        <div className='food-card card'>
          <div className='favourite'>
            <p className='quantity'>
              Stock: {cardData.quantity} <span className='status-on'></span>
            </p>
            <ion-icon name='heart-outline'></ion-icon>
          </div>
          <div className='item-info'>
            <img src={cardData.image} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{cardData.name} </h5>
              <div className='price-and-buy'>
                <div>
                  <p className='card-text'>đ{cardData.sellPrice}</p>
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

export default Card;
