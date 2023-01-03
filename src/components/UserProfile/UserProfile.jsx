import React from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";
function UserProfile() {
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
                <p className="text-username-profile">Bien123</p>
                <p className="text-file">Sửa Hồ Sơ</p>
              </div>
            </div>
            <div className='my-account'>
              <i class='fa-solid fa-user'></i>
              <p className="text-my-account">Tài khoản của tôi</p>
            </div>

            <div className='purchase-history'>
                <a className="text-my-account" href="/purchase_history">Lịch sử mua hàng</a>
            </div>
          </div>

          <div className='wrapper-user-right'>
            <div className='text-my-profile'>
              <h4>Hồ sơ của tôi</h4>
              <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>
            <div className='box-my-profile'>
              <div className='box-my-profile-left'>
                <div className="text-child-my-profile">
                  <label className="text-name">Tên đăng nhập</label>
                  <span>Bien 123r</span>
                </div>

                <div className="text-child-my-profile">
                  <label className="text-name1" htmlFor=''>Tên</label>
                  <input className="input-user-name" type='text' />
                </div>

                <div className="text-child-my-profile">
                  <label className="text-name">Email</label>
                  <span>tranbien@gmail.com</span>
                </div>

                <div className="text-child-my-profile">
                  <label className="text-name">Số điện thoại</label>
                  <span>096856789</span>
                </div>

                <button className="btn-userprofile">Lưu</button>
              </div>

              <div className='box-my-profile-right'>
                <div className="user-avatar-img">
                  <img src='https://img.meta.com.vn/Data/image/2022/06/16/avatar-vo-dien-hinh-nen-vo-dien-25.jpg' alt='' />
                </div>
                <button className="btn-upload-user-name">Chọn Ảnh</button>
                <div className="photo-information">
                  <p>Dung lượng file tối đa 1 MB</p>
                  <p>Định dạng: JPEG, PNG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
