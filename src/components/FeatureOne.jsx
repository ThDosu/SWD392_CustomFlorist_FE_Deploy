import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const FeatureOne = ({category}) => {
    console.log(category)
    const ArrowButton = ({ className, onClick, direction }) => (
        <button
            type="button"
            onClick={onClick}
            className={`${className} slick-${direction} slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}
        >
            <i className={`ph ph-caret-${direction === 'next' ? 'right' : 'left'}`} />
        </button>
    );

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 10,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <ArrowButton direction="next" />, 
        prevArrow: <ArrowButton direction="prev" />, 
        responsive: [
            { breakpoint: 1699, settings: { slidesToShow: 9 } },
            { breakpoint: 1599, settings: { slidesToShow: 8 } },
            { breakpoint: 1399, settings: { slidesToShow: 6 } },
            { breakpoint: 992, settings: { slidesToShow: 5 } },
            { breakpoint: 768, settings: { slidesToShow: 4 } },
            { breakpoint: 575, settings: { slidesToShow: 3 } },
            { breakpoint: 424, settings: { slidesToShow: 2 } },
            { breakpoint: 359, settings: { slidesToShow: 1 } },
        ],
    };

    const featureItems = [
        { img: "https://happyflower.vn/app/uploads/2022/05/Hoacuoi_WhiteTulip_2.jpg", title: "Hoa cưới 💍" },
        { img: "https://bizweb.dktcdn.net/100/347/446/files/hoa-khai-truong-cao-cap-sang-trong-o-cau-giay-ha-noi.jpg?v=1660226553731", title: "Hoa khai trương 🎊" },
        { img: "https://nhahoa.com.vn/wp-content/uploads/2022/04/Hop-Hoa-Mung-Sinh-Nhat-Me-HH093.jpg", title: "Hoa sinh nhật 🎂" },
        { img: "https://hoahanoi.com.vn/wp-content/uploads/2020/06/hoa-chuc-mung-sinh-nhat-bo-e1624945727169.jpg", title: "Hoa chúc mừng 🎉" },
        { img: "https://dienhoaxanh.com/wp-content/uploads/2023/06/cam-hoa-de-ban-tiec-cuoi.png", title: "Hoa hội nghị & sự kiện 🏛️" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70k4QuFO5Vl3mq1AsqhA4qnd2p3Y6VDitpA&s", title: "Hoa theo mùa & ngày lễ 🎄" },
        { img: "https://happyflower.vn/app/uploads/2022/05/Hoacuoi_WhiteTulip_2.jpg", title: "Hoa cưới 💍" },
        { img: "https://bizweb.dktcdn.net/100/347/446/files/hoa-khai-truong-cao-cap-sang-trong-o-cau-giay-ha-noi.jpg?v=1660226553731", title: "Hoa khai trương 🎊" },
        { img: "https://nhahoa.com.vn/wp-content/uploads/2022/04/Hop-Hoa-Mung-Sinh-Nhat-Me-HH093.jpg", title: "Hoa sinh nhật 🎂" },
        { img: "https://hoahanoi.com.vn/wp-content/uploads/2020/06/hoa-chuc-mung-sinh-nhat-bo-e1624945727169.jpg", title: "Hoa chúc mừng 🎉" },
        { img: "https://dienhoaxanh.com/wp-content/uploads/2023/06/cam-hoa-de-ban-tiec-cuoi.png", title: "Hoa hội nghị & sự kiện 🏛️" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70k4QuFO5Vl3mq1AsqhA4qnd2p3Y6VDitpA&s", title: "Hoa theo mùa & ngày lễ 🎄" },
        { img: "https://happyflower.vn/app/uploads/2022/05/Hoacuoi_WhiteTulip_2.jpg", title: "Hoa cưới 💍" },
        { img: "https://bizweb.dktcdn.net/100/347/446/files/hoa-khai-truong-cao-cap-sang-trong-o-cau-giay-ha-noi.jpg?v=1660226553731", title: "Hoa khai trương 🎊" },
        { img: "https://nhahoa.com.vn/wp-content/uploads/2022/04/Hop-Hoa-Mung-Sinh-Nhat-Me-HH093.jpg", title: "Hoa sinh nhật 🎂" },
        { img: "https://hoahanoi.com.vn/wp-content/uploads/2020/06/hoa-chuc-mung-sinh-nhat-bo-e1624945727169.jpg", title: "Hoa chúc mừng 🎉" },
        { img: "https://dienhoaxanh.com/wp-content/uploads/2023/06/cam-hoa-de-ban-tiec-cuoi.png", title: "Hoa hội nghị & sự kiện 🏛️" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70k4QuFO5Vl3mq1AsqhA4qnd2p3Y6VDitpA&s", title: "Hoa theo mùa & ngày lễ 🎄" },
        { img: "https://happyflower.vn/app/uploads/2022/05/Hoacuoi_WhiteTulip_2.jpg", title: "Hoa cưới 💍" },
        { img: "https://bizweb.dktcdn.net/100/347/446/files/hoa-khai-truong-cao-cap-sang-trong-o-cau-giay-ha-noi.jpg?v=1660226553731", title: "Hoa khai trương 🎊" },
        { img: "https://nhahoa.com.vn/wp-content/uploads/2022/04/Hop-Hoa-Mung-Sinh-Nhat-Me-HH093.jpg", title: "Hoa sinh nhật 🎂" },
        { img: "https://hoahanoi.com.vn/wp-content/uploads/2020/06/hoa-chuc-mung-sinh-nhat-bo-e1624945727169.jpg", title: "Hoa chúc mừng 🎉" },
        { img: "https://dienhoaxanh.com/wp-content/uploads/2023/06/cam-hoa-de-ban-tiec-cuoi.png", title: "Hoa hội nghị & sự kiện 🏛️" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70k4QuFO5Vl3mq1AsqhA4qnd2p3Y6VDitpA&s", title: "Hoa theo mùa & ngày lễ 🎄" },
        { img: "https://happyflower.vn/app/uploads/2022/05/Hoacuoi_WhiteTulip_2.jpg", title: "Hoa cưới 💍" },
        { img: "https://bizweb.dktcdn.net/100/347/446/files/hoa-khai-truong-cao-cap-sang-trong-o-cau-giay-ha-noi.jpg?v=1660226553731", title: "Hoa khai trương 🎊" },
        { img: "https://nhahoa.com.vn/wp-content/uploads/2022/04/Hop-Hoa-Mung-Sinh-Nhat-Me-HH093.jpg", title: "Hoa sinh nhật 🎂" },
        { img: "https://hoahanoi.com.vn/wp-content/uploads/2020/06/hoa-chuc-mung-sinh-nhat-bo-e1624945727169.jpg", title: "Hoa chúc mừng 🎉" },
        { img: "https://dienhoaxanh.com/wp-content/uploads/2023/06/cam-hoa-de-ban-tiec-cuoi.png", title: "Hoa hội nghị & sự kiện 🏛️" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70k4QuFO5Vl3mq1AsqhA4qnd2p3Y6VDitpA&s", title: "Hoa theo mùa & ngày lễ 🎄" },
        { img: "https://happyflower.vn/app/uploads/2022/05/Hoacuoi_WhiteTulip_2.jpg", title: "Hoa cưới 💍" },
        { img: "https://bizweb.dktcdn.net/100/347/446/files/hoa-khai-truong-cao-cap-sang-trong-o-cau-giay-ha-noi.jpg?v=1660226553731", title: "Hoa khai trương 🎊" },
        { img: "https://nhahoa.com.vn/wp-content/uploads/2022/04/Hop-Hoa-Mung-Sinh-Nhat-Me-HH093.jpg", title: "Hoa sinh nhật 🎂" },
        { img: "https://hoahanoi.com.vn/wp-content/uploads/2020/06/hoa-chuc-mung-sinh-nhat-bo-e1624945727169.jpg", title: "Hoa chúc mừng 🎉" },
        { img: "https://dienhoaxanh.com/wp-content/uploads/2023/06/cam-hoa-de-ban-tiec-cuoi.png", title: "Hoa hội nghị & sự kiện 🏛️" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70k4QuFO5Vl3mq1AsqhA4qnd2p3Y6VDitpA&s", title: "Hoa theo mùa & ngày lễ 🎄" },
        { img: "https://happyflower.vn/app/uploads/2022/05/Hoacuoi_WhiteTulip_2.jpg", title: "Hoa cưới 💍" },
        { img: "https://bizweb.dktcdn.net/100/347/446/files/hoa-khai-truong-cao-cap-sang-trong-o-cau-giay-ha-noi.jpg?v=1660226553731", title: "Hoa khai trương 🎊" },
        { img: "https://nhahoa.com.vn/wp-content/uploads/2022/04/Hop-Hoa-Mung-Sinh-Nhat-Me-HH093.jpg", title: "Hoa sinh nhật 🎂" },
        { img: "https://hoahanoi.com.vn/wp-content/uploads/2020/06/hoa-chuc-mung-sinh-nhat-bo-e1624945727169.jpg", title: "Hoa chúc mừng 🎉" },
        { img: "https://dienhoaxanh.com/wp-content/uploads/2023/06/cam-hoa-de-ban-tiec-cuoi.png", title: "Hoa hội nghị & sự kiện 🏛️" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70k4QuFO5Vl3mq1AsqhA4qnd2p3Y6VDitpA&s", title: "Hoa theo mùa & ngày lễ 🎄" },
        { img: "https://happyflower.vn/app/uploads/2022/05/Hoacuoi_WhiteTulip_2.jpg", title: "Hoa cưới 💍" },
        { img: "https://bizweb.dktcdn.net/100/347/446/files/hoa-khai-truong-cao-cap-sang-trong-o-cau-giay-ha-noi.jpg?v=1660226553731", title: "Hoa khai trương 🎊" },
        { img: "https://nhahoa.com.vn/wp-content/uploads/2022/04/Hop-Hoa-Mung-Sinh-Nhat-Me-HH093.jpg", title: "Hoa sinh nhật 🎂" },
        { img: "https://hoahanoi.com.vn/wp-content/uploads/2020/06/hoa-chuc-mung-sinh-nhat-bo-e1624945727169.jpg", title: "Hoa chúc mừng 🎉" },
        { img: "https://dienhoaxanh.com/wp-content/uploads/2023/06/cam-hoa-de-ban-tiec-cuoi.png", title: "Hoa hội nghị & sự kiện 🏛️" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70k4QuFO5Vl3mq1AsqhA4qnd2p3Y6VDitpA&s", title: "Hoa theo mùa & ngày lễ 🎄" },
        { img: "https://happyflower.vn/app/uploads/2022/05/Hoacuoi_WhiteTulip_2.jpg", title: "Hoa cưới 💍" },
        { img: "https://bizweb.dktcdn.net/100/347/446/files/hoa-khai-truong-cao-cap-sang-trong-o-cau-giay-ha-noi.jpg?v=1660226553731", title: "Hoa khai trương 🎊" },
        { img: "https://nhahoa.com.vn/wp-content/uploads/2022/04/Hop-Hoa-Mung-Sinh-Nhat-Me-HH093.jpg", title: "Hoa sinh nhật 🎂" },
        { img: "https://hoahanoi.com.vn/wp-content/uploads/2020/06/hoa-chuc-mung-sinh-nhat-bo-e1624945727169.jpg", title: "Hoa chúc mừng 🎉" },
        { img: "https://dienhoaxanh.com/wp-content/uploads/2023/06/cam-hoa-de-ban-tiec-cuoi.png", title: "Hoa hội nghị & sự kiện 🏛️" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70k4QuFO5Vl3mq1AsqhA4qnd2p3Y6VDitpA&s", title: "Hoa theo mùa & ngày lễ 🎄" },
    ];

    return (
        <div className="feature" id="featureSection">
            <div className="container container-lg">
                <div className="position-relative arrow-center">
                    <Slider {...settings}>
                        {category && category?.content?.map((item, index) => (
                            <div key={index} className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle overflow-hidden" style={{ width: '120px', height: '120px', margin: '0 auto' }}>
                                    <Link to={`/shop?search=${item.name}`} className="w-100 h-100 flex-center">
                                        <img src={featureItems[index].img} alt={item.name} className="w-100 h-100 object-cover rounded-circle" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">{item.name}</Link>
                                    </h6>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FeatureOne;
