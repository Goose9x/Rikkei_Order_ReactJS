import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Cart.css"
import Swal from 'sweetalert2'
function Cart() {

    const cartList = [{
        id: 1,
        image: 'https://gaixinhbikini.com/wp-content/uploads/2022/08/baifern-kunthada-12.jpg',
        price: 25000,
        name: 'Nâng mắt', quantity: 1,

    },
    {
        id: 2,
        image: 'https://anhgaisexy.com/wp-content/uploads/2021/10/20210818-thipsuda-jitaree-8-617x847.jpg',
        price: 15000,
        name: 'Nâng chân', quantity: 1,

    },
    {
        id: 3,
        image: 'https://bedental.vn/wp-content/uploads/2022/11/f99a5cc9ebcceba1dd49af0d509732dc.jpg',
        price: 35000,
        name: 'Nâng tai', quantity: 1,

    },
    {
        id: 4,
        image: 'https://gentlenobra.com/wp-content/uploads/2022/03/gai-xinh-mac-bikini-mau-trang-1.jpg',
        price: 35000,
        name: 'Nâng ngực', quantity: 1,

    },
    {
        id: 5,
        image: 'https://image-us.24h.com.vn/upload/2-2021/images/2021-05-22/anh-8-1621645023-458-width650height813.jpg',
        price: 45000,
        name: 'Nâng nách', quantity: 1,

    }]

    const sum1 = cartList.reduce((pre, x) => pre + x.price * x.quantity,
        0)
    const [data, setData] = useState(cartList)
    const [sum, setSum] = useState(sum1)
    const add = (price) => {
        add.toLocaleString('pl-PL');
    }

    const handleChange = (value, id) => {
        if (value <= 1) {
            const newData = data.map(item => {
                if (item.id === id) {
                    item.quantity = 1
                    return item
                }
                return item
            })
            setData(newData)
        } else {
            const newData = data.map(item => {
                if (item.id === id) {
                    item.quantity = value
                    return item
                }
                return item
            })
            setData(newData)

        }
        const newSum = data.reduce((pre, x) => pre + x.price * x.quantity, //method tìm hiểu hàm này
            0)
        setSum(newSum)
    }
    const handleClick = (id) => {
        let index = data.findIndex((e) => e.id === id)
        console.log(data);
        data.splice(index, 1)
        setData(data)
    }
    const handleThanhcong = () => {
        if (handleThanhcong) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Mua hàng thành công',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <>
            <div className="modal-body">
                <div className="cart-row">
                    <span className="cart-item cart-header cart-column">Sản Phẩm</span>
                    <span className="cart-price cart-header cart-column">Giá</span>
                    <span className="cart-quantity cart-header cart-column">Số Lượng</span>
                </div>
                <div className="cart-items">
                    {
                        data.map((item, index) => <div key={ index } className="cart-row">
                            <div className="cart-item cart-column">
                                <img className="cart-item-image" src={ item.image } width="100" height="100" />
                                <span className="cart-item-title">{ item.name }</span>
                            </div>
                            <span className="cart-price cart-column">{ item.price * item.quantity }</span>
                            <div className="cart-quantity cart-column">
                                <input className="cart-quantity-input" type="number" value={ item.quantity } onChange={ (e) => handleChange(e.target.value, item.id) } />
                                <button onClick={ (e) => handleClick(item.id) } className="btn btn-danger" type="button">Xóa</button>
                            </div>
                        </div>)
                    }
                    <div className="cart-total">
                        <strong className="cart-total-title">Tổng Cộng:</strong>
                        <span className="cart-total-price">{ sum }VNĐ</span>
                        <button onClick={ handleThanhcong } className="thanhtoan">Thanh Toán</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;