import "./Card.css";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
function Card(props) {
  let cardData = props.cardData;
  // console.log(cardData);
  const [cookies, setCookie, removeCookie] = useCookies(["loginCookie"]);
  const handleClick = (e) => {
    if (Object.keys(cookies).length === 0) {
      window.location.href = "http://localhost:8000/login";
    } else {
      console.log(cookies.userId);
      console.log(e.target.id);
      toast("Thêm vào giỏ hàng thành công", {
        autoClose: 1000,
      });
    }
  };
  const handleClickLike =(e)=>{
    if(Object.keys(cookies).length === 0){
      window.location.href="http://localhost:8000/login";
    }else{
      console.log(cookies.userId);
      console.log(e.target.id);
      toast("Thêm vào trang yêu thích thành công", {
        autoClose: 1000,
      });
    }
  }
  return (
    <>
      <div className='col'>
        <div className='product-card card'>
          <ToastContainer autoClose={1000} />
          <div className='favourite'>
            <p className='quantity'>
              Stock: {cardData.quantity}{" "}
              <span
                className={cardData.quantity !== 0 ? "status-on" : "status-off"}
              ></span>
            </p>
            <button className="card-btn-like" onClick={handleClickLike}><ion-icon id={cardData.id} name='heart-outline'></ion-icon></button>
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
                  onClick={handleClick}
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
