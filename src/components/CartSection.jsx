import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QuantityControl from "../helper/QuantityControl";

const CartSection = () => {
    const cartItem = JSON.parse(localStorage.getItem("cartFlower")) || [];
    const userData = JSON.parse(localStorage.getItem("userLoginFlower")) || {};
    const { UserID } = userData;
    const [cartItems, setCartItems] = useState(cartItem);

    const calculateSubtotal = (items) => {
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const [subtotal, setSubtotal] = useState(calculateSubtotal(cartItems));
    const estimatedTax = 10000.0;
    const [total, setTotal] = useState(subtotal + estimatedTax);
    const navigate = useNavigate();

    useEffect(() => {
        const newSubtotal = calculateSubtotal(cartItems);
        setSubtotal(newSubtotal);
        setTotal(newSubtotal + estimatedTax);
        localStorage.setItem("cartFlower", JSON.stringify(cartItems));
    }, [cartItems]);

    const updateQuantity = (id, newQuantity) => {
        setCartItems((prevItems) => 
            prevItems.map((item) => 
                item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleCheckout = async () => {
        if (!UserID) {
            alert("Vui lòng đăng nhập để tiếp tục thanh toán!");
            navigate("/login");
            return;
        }

        if (cartItems.length === 0) {
            alert("Giỏ hàng của bạn đang trống!");
            return;
        }

        const orderData = {
            userId: UserID,
            totalPrice: total,
            orderItems: cartItems.map((item) => ({
                bouquetId: item.id, 
                quantity: item.quantity,
                subTotal: item.price * item.quantity,
                orderBouquetFlowers: item?.compositions?.map(flower => ({
                    flowerId: flower.flowerId,
                    quantity: flower.quantity
                })) || []
            }))
        };

        console.log('Dữ liệu đơn hàng', orderData);
        navigate("/checkout", { state: { order: orderData } });
    };

    return (
        <section className="cart py-80">
            <div className="container container-lg">
                <div className="row gy-4">
                    <div className="col-xl-9 col-lg-8">
                        <div className="cart-table border border-gray-100 rounded-8 px-40 py-48">
                            <div className="overflow-x-auto scroll-sm scroll-sm-horizontal">
                                <table className="table style-three">
                                    <thead>
                                        <tr>
                                            <th>Sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Tạm tính</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <div className="table-product d-flex align-items-center gap-24">
                                                        <Link to={`/product-details?productId=${item?.id}`} className="border rounded-8">
                                                            <img style={{ maxWidth: "100px", height: "100px" }} src={item.imageUrl} alt={item.name} />
                                                        </Link>
                                                        <div className="table-product__content text-start">
                                                            <h6 className="title text-lg fw-semibold mb-8">
                                                                <Link to={`/product-details?productId=${item?.id}`} className="link text-line-2">
                                                                    {item.name}
                                                                </Link>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{item.price.toFixed(0)} VND</td>
                                                <td>
                                                    <QuantityControl
                                                        value={item.quantity}
                                                        onQuantityChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
                                                    />
                                                </td>
                                                <td>{(item.price * item.quantity).toFixed(0)} VND</td>
                                                <td>
                                                    <button onClick={() => removeItem(item.id)} className="btn btn-danger">Xóa</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="cart-sidebar border border-gray-100 rounded-8 px-24 py-40">
                            <h6 className="text-xl mb-32">Tổng giỏ hàng</h6>
                            <div className="bg-color-three rounded-8 p-24">
                                <div className="mb-32 flex-between gap-8">
                                    <span>Tạm tính</span>
                                    <span>{subtotal.toFixed(0)} VND</span>
                                </div>
                                <div className="mb-32 flex-between gap-8">
                                    <span>Phí giao hàng</span>
                                    <span>Miễn phí</span>
                                </div>
                                <div className="mb-0 flex-between gap-8">
                                    <span>Thuế ước tính</span>
                                    <span>{estimatedTax.toFixed(0)} VND</span>
                                </div>
                            </div>
                            <div className="bg-color-three rounded-8 p-24 mt-24">
                                <div className="flex-between gap-8">
                                    <span>Tổng cộng</span>
                                    <span>{total.toFixed(0)} VND</span>
                                </div>
                            </div>
                            <button onClick={handleCheckout} className="btn btn-main mt-40 py-18 w-100 rounded-8">
                                Đến trang thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartSection;
