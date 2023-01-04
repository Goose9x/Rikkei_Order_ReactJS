import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./UserProfile.css";
function UserProfile() {
  const [dataUserProfile, setDataUserProfile] = useState([]);
  const [cookies, setCookie] = useCookies(["loginCookies"]);
  const [nameValue, setNameValue] = useState("");
  const [gmailValue, setGamailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  useEffect(() => {
    const fetchDataUser = async () => {
      const res = await fetch(
        `http://127.0.0.1:3000/auth/user/profile/${cookies.userId}`
      );
      const dataUser = await res.json();
      setDataUserProfile(dataUser.data[0]);
      // console.log(dataUser.data);
    };
    fetchDataUser().catch(console.error);
  }, []);

  const handleClickUpdateUserProfile = (e) => {
    let id = e.target.id;
    console.log(id);
    const fetchDataUserProfile = async () => {
      const res = await fetch(`http://127.0.0.1:3000/auth/user/profile/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Math.floor(Math.random() * 999999),
          name: nameValue,
          gmail: gmailValue,
          phone: phoneValue,
        }),
      });
      // const dataUser = await res.json();
      // setDataUserProfile(dataUser);
    };
    fetchDataUserProfile().catch(console.error);
  };

  const handleChangeName = (e) => {
    setNameValue(e.target.value);
  };
  const handleChangeGmail = (e) => {
    setGamailValue(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhoneValue(e.target.value);
  };

  console.log(dataUserProfile);
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
              <p className='text-my-account'>Tài khoản của tôi</p>
            </div>

            <div className='purchase-history'>
              <Link className='text-my-account' to='/purchase_history'>
                Lịch sử mua hàng
              </Link>
            </div>
          </div>

          <div id={cookies.id} className='wrapper-user-right'>
            <div className='text-my-profile'>
              <h4 className='account-profile'>Hồ sơ của tôi</h4>
              <p className='account-profile'>
                Quản lý thông tin hồ sơ để bảo mật tài khoản
              </p>
            </div>
            <div className='box-my-profile'>
              <div className='box-my-profile-left'>
                <div className='text-child-my-profile'>
                  <label className='text-name'>Tên đăng nhập</label>
                  {dataUserProfile ? (
                    <>
                      <span>{dataUserProfile.name}</span>
                    </>
                  ) : (
                    <div>loading....</div>
                  )}
                  {/* <span>{123}</span> */}
                </div>

                <div className='text-child-my-profile'>
                  <label className='text-name' htmlFor=''>
                    Tên
                  </label>
                  <input
                    onChange={handleChangeName}
                    value={nameValue}
                    className='input-user-name'
                    type='text'
                  />
                </div>

                <div className='text-child-my-profile'>
                  <label className='text-name'>Email</label>
                  {dataUserProfile ? (
                    <>
                      <span>{dataUserProfile.gmail}</span>
                    </>
                  ) : (
                    <div>loading....</div>
                  )}
                  <a href=''>Thay đổi</a>
                  <input
                    onChange={handleChangeGmail}
                    value={gmailValue}
                    className='gmail-userprofile'
                    type='text'
                    name=''
                    id=''
                  />
                </div>
                <div className='text-child-my-profile'>
                  <label className='text-name'>Số điện thoại</label>
                  {dataUserProfile ? (
                    <>
                      <span>{dataUserProfile.phone}</span>
                    </>
                  ) : (
                    <div>loading....</div>
                  )}
                  <a href=''>Thay đổi</a>
                  <input
                    onChange={handleChangePhone}
                    value={phoneValue}
                    className='phone-userprofile'
                    type='text'
                    name=''
                    id=''
                  />
                </div>
              </div>
              <div className='box-my-profile-right'>
                <div className='user-avatar-img'>
                  <img
                    src='https://img.meta.com.vn/Data/image/2022/06/16/avatar-vo-dien-hinh-nen-vo-dien-25.jpg'
                    alt=''
                  />
                </div>
                <button className='btn-upload-user-name'>Chọn Ảnh</button>
                <div className='photo-information'>
                  <p>Dung lượng file tối đa 1 MB</p>
                  <p>Định dạng: JPEG, PNG</p>
                </div>
              </div>
            </div>
            <button
              id={cookies.userId}
              onClick={handleClickUpdateUserProfile}
              className='btn-userprofile'
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
