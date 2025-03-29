import React from 'react';
import { Link } from 'react-router-dom';

const promotions = [
    { img: "https://th.bing.com/th/id/OIP.cvShTmQtQ-rNEFa7d1uo-QHaEJ?rs=1&pid=ImgDetMain", title: "Hoa Tươi Mỗi Ngày" },
    { img: "https://hoatuoi360.vn/uploads/file/hinh%20san%20pham/chi%20tiet%20sp/binh-hoa-hong-do-ket-hop-baby-hoatuoi360-01.jpg", title: "Đa Dạng Nhiều Mẫu Xinh" },
    { img: "https://floralgaragesg.com/wp-content/uploads/2023/09/image_2023_09_18T11_12_11_060Z-1201x800.png", title: "Giao Hàng Nhanh Chóng" },
    { img: "https://images.smartshanghai.com.cn/uploads/compressed/2021/05/07/895a013e-8bda-4e00-ab48-c79cb3a8ae6a.jpeg.1024.0.jpg", title: "Đặt Hoa Online mọi lúc, mọi nơi" }
];

const PromotionalItem = ({ img, title }) => (
    <div className="col-xl-3 col-sm-6 col-xs-6">
        <div className="promotional-banner-item position-relative rounded-24 overflow-hidden z-1">
            <img 
                src={img} 
                alt={title} 
                className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1" 
            />
            <div className="promotional-banner-item__content">
                <h6 
                    style={{
                        color: 'white', 
                        fontSize: '32px', 
                        fontWeight: 'bold', 
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        display: 'inline-block'
                    }} 
                    className="promotional-banner-item__title"
                >
                    {title}
                </h6>
                <Link to="/shop" className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24">
                    Mưa sắm ngay!
                    <span className="icon text-xl d-flex">
                        <i className="ph ph-arrow-right" />
                    </span>
                </Link>
            </div>
        </div>
    </div>
);

const PromotionalOne = () => {
    return (
        <section className="promotional-banner pt-80">
            <div className="container container-lg">
                <div className="row gy-4">
                    {promotions.map((item, index) => (
                        <PromotionalItem key={index} img={item.img} title={item.title} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PromotionalOne;
