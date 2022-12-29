import "./ItemInformation.css";

function ItemInformation(props) {
  const { data } = props;
  console.log(data);
  return (
    <>
      <div className='wrapper-item'>
        <div className='imtemfamily'>
          <div className='itemanh'>
            <img src={data.image} alt='' />
          </div>

          <div className='imtemflofai'>
            <div className='tongchu'>
              <p className='velcro'>[Chính hãng] {data.name.toUpperCase()}</p>
              <p className='luanr'>{data.discription}</p>
            </div>

            <div className='tongto'>
              <div className='itemcart'>
                <div className='cartone'>
                  <p className='price'>Price</p>
                  <p className='tamchin'>đ{data.sellPrice}</p>
                </div>
                <div className='cartone'>
                  <p className='price'>Status</p>
                  <p className='tamchin'>in Stock</p>
                </div>
                <div className='cartone'>
                  <p className='price'>Reviews</p>
                  <form action='' className='icon-star'>
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
                <div className='cartone1'>
                  <p className='price'>Sản phẩm có sẵn: {data.quantity}</p>
                  <div>
                    <button className='btn-Item'>-</button>
                    <input className='input-item' type='text' />
                    <button className='btn-Item'>+</button>
                  </div>
                </div>
              </div>
            </div>
            <button className='addtocatr'>ADD TO CART</button>
          </div>
        </div>

        <div>
          <h1>Đánh giá sản phẩm</h1>
          <div className='item-star'>
            <div className='star-rating'>
              <span className='text-item'>4.5</span>
              <span className='text-item1'>trên 5</span>
              <div className='box-star'>
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
            </div>

            <div className='item-comment'>
              <div className='textarea-item'>
                <textarea
                  className='textarea-item-comment'
                  name=''
                  id=''
                ></textarea>
              </div>
              <button className='btn-submit-comment'>Submit</button>
              <p>Bim bim xịn quá</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemInformation;
