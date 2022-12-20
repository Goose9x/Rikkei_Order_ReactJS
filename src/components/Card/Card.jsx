import image from "../../assets/bimbim1.png";
import "./Card.css";
function Card(props) {
  let cardData = props.cardData;
  return (
    <>
      <div className='col'>
        <div className='food-card card'>
          <div className='favourite'>
            <p className='quantity'>
              Stock: {cardData.quantity}{" "}
              <span
                className={cardData.quantity !== 0 ? "status-on" : "status-off"}
              ></span>
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
                <button
                  className={
                    cardData.quantity !== 0 ? "buy-item" : "buy-item-off"
                  }
                  disabled={cardData.quantity === 0 ? true : false}
                >
                  <ion-icon
                    name={
                      cardData.quantity !== 0
                        ? "bag-add-outline"
                        : "ban-outline"
                    }
                  ></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
