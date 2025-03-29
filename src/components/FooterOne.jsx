import React from 'react'
import { Link } from 'react-router-dom'

const FooterOne = () => {
    return (
        <footer className="footer py-120">
            <img
                src="assets/images/bg/body-bottom-bg.png"
                alt="BG"
                className="body-bottom-bg"
            />
            <div className="container container-lg">
                <div className="footer-item-wrapper d-flex align-items-start flex-wrap">
                    <div className="footer-item" style={{ padding: '20px', marginRight: '30px' }}>
                        <h6 className="footer-item__title" style={{ visibility: 'hidden' }}>Logo</h6>
                        
                            <Link to="/">
                                <img 
                                    src="assets/images/logo/your-florist-logo.png" 
                                    alt="Your Florist Logo" 
                                    style={{ 
                                        width: '300px',
                                        height: 'auto',
                                        maxWidth: '100%' 
                                    }} 
                                />
                            </Link>
                        
                    </div>
                    <div className="footer-item" style={{ padding: '20px', marginRight: '30px' }}>
                        <h6 className="footer-item__title">Chăm sóc khách hàng</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/introduction" className="text-gray-600 hover-text-main-600">
                                    Giới thiệu
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/contact" className="text-gray-600 hover-text-main-600">
                                    Liên hệ 
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/delivery-policy" className="text-gray-600 hover-text-main-600">
                                    Chính Sách Vận Chuyển
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/questions" className="text-gray-600 hover-text-main-600">
                                    Câu Hỏi Thường Gặp
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/refund-policy" className="text-gray-600 hover-text-main-600">
                                    Chính Sách Hoàn Tiền
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="/info-security" className="text-gray-600 hover-text-main-600">
                                    Chính Sách Bảo Mật
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/why-choose-us" className="text-gray-600 hover-text-main-600">
                                    Tại Sao Nên Chọn Your Florist
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item" style={{ padding: '20px', marginRight: '30px' }}>
                        <h6 className="footer-item__title">Theo dõi</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="https://www.facebook.com" className="text-gray-600 hover-text-main-600">
                                    Facebook
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="https://www.twitter.com" className="text-gray-600 hover-text-main-600">
                                    Twitter
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="https://www.instagram.com" className="text-gray-600 hover-text-main-600">
                                    Instagram
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link to="https://www.linkedin.com" className="text-gray-600 hover-text-main-600">
                                    Linkedin
                                </Link>
                            </li>
                            <li className="">
                                <Link to="https://www.youtube.com" className="text-gray-600 hover-text-main-600">
                                    Youtube
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item" style={{ padding: '20px' }}>
                        <h6 className="footer-item__title">SHOP HOA Your Florist</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <span className="text-gray-600">
                                    Cửa hàng chính: 142 Nguyễn Văn Cừ, Phường Nguyễn Cư Trinh, Quận 1, TP.HCM
                                </span>
                            </li>
                            <li className="mb-16">
                                <span className="text-gray-600">
                                    Cửa Hàng TP.HCM: 225/3 Nguyễn Đình Chiểu, Phường 5, Quận 3, TP.HCM
                                </span>
                            </li>
                            <li className="">
                                <span className="text-gray-600">
                                    Chi nhánh Hà Nội: 65 Trần Phú, Ba Đình, Hà Nội
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default FooterOne