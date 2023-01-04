import React, { useEffect, useState } from "react";
import PurchasedItem from "../components/PurchasedItem/PurchasedItem";
import { Link } from "react-router-dom";
function PurchaseHistoryContainer() {
  const [historyData, setHistoryData] = useState([]);
  useEffect(() => {
    const fetchDataUser = async () => {
      const res = await fetch(`http://127.0.0.1:3000/history`);
      const dataUser = await res.json();
      setHistoryData(dataUser.data);
    };
    fetchDataUser().catch(console.error);
  }, []);
  return (
    <>
      <div className='user-profile-container'>
        <div className='user-container'>
          <div className='wrapper-user-left'>
            <div className='chile-userprofile'>
              <div className='box-img-userprofile'>
                <img
                  src='https://img.meta.com.vn/Data/image/2022/06/16/avatar-vo-dien-hinh-nen-vo-dien-25.jpg'
                  alt=''
                />
              </div>
              <div className='box-username'>
                <p className='text-username-profile'>Bien123</p>
                <p className='text-file'>Sửa Hồ Sơ</p>
              </div>
            </div>
            <div className='my-account'>
              <Link to='/user_profile'>
                <p className='text-my-account'>Tài khoản của tôi</p>
              </Link>
            </div>
            <div className='purchase-history'>
              <Link className='text-my-account' to='/purchase_history'>
                Lịch sử mua hàng
              </Link>
            </div>
          </div>
          <div className='wrapper-user-right'>
            <div className='text-my-profile'>
              <h4 className='account-profile'>Lịch sử mua hàng</h4>
              <p className='account-profile'>
                Cảm ơn bạn đã tin tưởng chúng tôi !!!
              </p>
            </div>
            <div className='purchased-history-container'>
              {historyData.length === 0 ? (
                <div> bạn chưa mua gì cả</div>
              ) : (
                historyData.map((e) => <PurchasedItem historyData={e} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseHistoryContainer;
