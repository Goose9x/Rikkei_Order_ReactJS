import "./ItemInformation.css";

function ItemInformation(props) {
  const { data } = props;
  return (
    <>
      <div className='itemcontainer'>
        <div className='imtemfamily'>
          <div className='itemanh'>
            <img
              src='https://gentlenobra.com/wp-content/uploads/2022/03/gai-xinh-mac-bikini-mau-trang-1.jpg'
              alt=''
            />
          </div>
          <div className='imtemflofai'>
            <div className='tongchu'>
              <p className='velcro'>{data.name}</p>
              <p className='luanr'>{data.discription}</p>
            </div>
            <div className='tongto'>
              <div className='itemcart'>
                <div className='cartone'>
                  <p className='price'>Price</p>
                  <p className='tamchin'>$89</p>
                </div>
                <div className='cartone'>
                  <p className='price'>Status</p>
                  <p className='tamchin'>in Stock</p>
                </div>
                <div className='cartone'>
                  <p className='price'>Reviews</p>
                  <form action=''>
                    <input
                      className='star star-5'
                      id='star-5'
                      type='radio'
                      name='star'
                    />
                    <label className='star star-5' htmlFor='star-5'></label>
                    <input
                      className='star star-4'
                      id='star-4'
                      type='radio'
                      name='star'
                    />
                    <label className='star star-4' htmlFor='star-4'></label>
                    <input
                      className='star star-3'
                      id='star-3'
                      type='radio'
                      name='star'
                    />
                    <label className='star star-3' htmlFor='star-3'></label>
                    <input
                      className='star star-2'
                      id='star-2'
                      type='radio'
                      name='star'
                    />
                    <label className='star star-2' htmlFor='star-2'></label>
                    <input
                      className='star star-1'
                      id='star-1'
                      type='radio'
                      name='star'
                    />
                    <label className='star star-1' htmlFor='star-1'></label>
                  </form>
                </div>
                <div className='cartone'>
                  <p className='price'>Quantity</p>
                  <input type='number' />
                </div>
              </div>
            </div>
            <button className='addtocatr'>ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemInformation;
