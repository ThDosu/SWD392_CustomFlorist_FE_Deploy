import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getGoogleAuthUrl, login, signup } from '../api/authApi';
import { toast, ToastContainer } from "react-toastify";

const style = {
    container: "account py-80",
    formContainer: "container container-lg",
    card: "border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40",
    input: "common-input",
    button: "btn btn-main py-18 px-40",
    googleButton: "btn btn-light border py-18 px-40 mt-16 w-100 d-flex align-items-center justify-content-center gap-2",
    link: "text-main-600 text-decoration-underline",
};

const Login = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        address: "",
        phone: "",
        gender: "",
    });

    const [passwordError, setPasswordError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        if (e.target.name === "password" && e.target.value.length < 6) {
            setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
        } else {
            setPasswordError("");
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const response = await getGoogleAuthUrl();
            window.location.href = response.data.url;
        } catch (error) {
            toast.error("Google login failed", { position: "top-right" });
            console.error("Google login failed", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData);
            localStorage.setItem("tokenFlower", response.data);
            if (response.status === "OK") {
                toast.success("Đăng nhập thành công!", { position: "top-right" });
                navigate("/");
            }
        } catch (error) {
            toast.error(error.response?.data || "Đăng nhập thất bại", { position: "top-right" });
        }
    };

    const handleSubmitSignin = async (e) => {
        e.preventDefault();
        
        if (formData.password.length < 6) {
            toast.error("Mật khẩu phải có ít nhất 6 ký tự", { position: "top-right" });
            return;
        }

        try {
            const response = await signup(formData);
            localStorage.setItem("token", response.data.data);
            toast.success("Vui lòng kiểm tra Mail, xác nhận tài khoản!", { position: "top-right" });
            setFormData({
                email: "",
                password: "",
                name: "",
                address: "",
                phone: "",
                gender: "",
            });
        } catch (error) {
            toast.error(error.response?.data || "Đăng ký thất bại", { position: "top-right" });
        }
    };

    return (
        <section className={style.container}>
            <ToastContainer />
            <div className={style.formContainer}>
                <div className="row gy-4">
                    {/* Form Đăng Nhập */}
                    <form className="col-xl-6 pe-xl-5" onSubmit={handleSubmit}>
                        <div className={`${style.card} h-100`}>
                            <h6 className="text-xl mb-32">Đăng Nhập</h6>
                            <div className="mb-24">
                                <label className="text-neutral-900 text-lg mb-8 fw-medium">
                                    Tên đăng nhập hoặc email <span className="text-danger">*</span>
                                </label>
                                <input type="email" className={style.input} name="email" placeholder="Nhập email đăng nhập" onChange={handleChange} />
                            </div>
                            <div className="mb-24">
                                <label className="text-neutral-900 text-lg mb-8 fw-medium">Mật khẩu</label>
                                <input type="password" className={style.input} name="password" placeholder="Nhập mật khẩu" onChange={handleChange} />
                            </div>
                            <button type="submit" className={style.button}>Đăng nhập</button>
                            {/* <button className="btn border w-100 d-flex align-items-center justify-content-center shadow-md mt-3"
                                onClick={handleGoogleLogin}>
                                <img src="/assets/images/logo/Logo_google.jpg" alt="Google Logo" style={{ height: '24px', marginRight: '10px' }} />
                                <span>Đăng nhập với Google</span>
                            </button> */}
                            {/* <div className="mt-48">
                                <Link to="#" className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline">Quên mật khẩu?</Link>
                            </div> */}
                        </div>
                    </form>

                    {/* Form Đăng Ký */}
                    <form className="col-xl-6" onSubmit={handleSubmitSignin}>
                        <div className={style.card}>
                            <h6 className="text-xl mb-32">Đăng Ký</h6>
                            <input type="text" className={style.input} name="name" placeholder="Tên đăng nhập" onChange={handleChange} />
                            <input type="email" className={style.input} name="email" placeholder="Địa chỉ email" onChange={handleChange} />
                            <input type="tel" className={style.input} name="phone" placeholder="Số điện thoại" onChange={handleChange} />
                            <input type="text" className={style.input} name="address" placeholder="Địa chỉ" onChange={handleChange} />

                            <div className="mb-24">
                                <label className="text-neutral-900 text-lg mb-8 fw-medium">Giới tính</label>
                                <div className="d-flex gap-24">
                                    <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Nam</label>
                                    <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Nữ</label>
                                    <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Khác</label>
                                </div>
                            </div>

                            {/* Mật khẩu */}
                            <div className="mb-24">
                                <label className="text-neutral-900 text-lg mb-8 fw-medium">
                                    Mật khẩu <span className="text-danger">*</span>
                                </label>
                                <input type="password" className={style.input} name="password" placeholder="Nhập mật khẩu" onChange={handleChange} />
                                {passwordError && <p className="text-danger mt-2">{passwordError}</p>}
                            </div>

                            <p className="text-gray-500">
                                Thông tin cá nhân của bạn sẽ được sử dụng theo <Link to="#" className={style.link}>chính sách bảo mật</Link>.
                            </p>

                            <button type="submit" className={style.button}>Đăng Ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
