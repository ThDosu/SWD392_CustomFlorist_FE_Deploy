import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}
    >
      <i className="ph ph-caret-right" />
    </button>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}
    >
      <i className="ph ph-caret-left" />
    </button>
  );
};

const BannerOne = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const banners = [
    {
      img: "https://in.flowercorner.vn/uploads/P67b80eac1dca11.10889059.webp",
      title: "Đặt Hàng Tạp Hóa Hàng Ngày Và Nhận Giao Hàng Nhanh",
    },
    {
      img: "https://in.flowercorner.vn/uploads/P657fd247737038.75342862.webp",
      title: "Đặt Hàng Tạp Hóa Hàng Ngày Và Nhận Giao Hàng Nhanh",
    },
    {
        img: "https://in.flowercorner.vn/uploads/P649ea8ef2ed4f0.09844576.webp",
        title: "Đặt Hàng Tạp Hóa Hàng Ngày Và Nhận Giao Hàng Nhanh",
      }
  ];

  return (
    <div className="banner">
      <div className="container container-lg">
        <div className="banner-item rounded-24 overflow-hidden position-relative arrow-center">
          <a
            href="#featureSection"
            className="scroll-down w-84 h-84 text-center flex-center bg-main-600 rounded-circle border border-5 text-white border-white position-absolute start-50 translate-middle-x bottom-0 hover-bg-main-800"
          >
            <span className="icon line-height-0">
              <i className="ph ph-caret-double-down" />
            </span>
          </a>
          <img
            src="/assets/images/bg/banner-bg.png"
            alt="Banner Background"
            className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24"
          />
          <div className="banner-slider">
          <Slider {...settings}>
  {banners.map((banner, index) => (
    <div key={index} style={{ width: "100%", textAlign: "center" }}>
      <img
        src={banner.img}
        alt={`Banner ${index + 1}`}
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
    </div>
  ))}
</Slider>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
