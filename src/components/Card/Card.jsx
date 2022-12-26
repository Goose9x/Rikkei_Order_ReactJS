import "./Card.css";

function Card(props) {
  let { cardData, handleAddingCart } = props;

  return (
    <>
      <div className='col'>
        <div className='product-card card'>
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
            <div
              className={cardData.quantity === 0 ? "sold-out" : "display-none"}
            >
              HẾT HÀNG
            </div>
            <img src={cardData.image} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{cardData.name} </h5>
              <div className='price-and-buy'>
                <div>
                  <p className='product-name'>đ{cardData.sellPrice}</p>
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
                  id={cardData.id}
                  className={
                    cardData.quantity !== 0 ? "buy-item" : "buy-item-off"
                  }
                  disabled={cardData.quantity === 0 ? true : false}
                  onClick={handleAddingCart}
                >
                  <ion-icon
                    id={cardData.id}
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
