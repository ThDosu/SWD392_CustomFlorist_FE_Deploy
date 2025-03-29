import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getCountdown } from '../helper/Countdown';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';


const SampleNextArrow = memo(function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            type="button" onClick={onClick}
            className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
        >
            <i className="ph ph-caret-right" />
        </button>
    );
});

const SamplePrevArrow = memo(function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
        >
            <i className="ph ph-caret-left" />
        </button>
    );
});

const DealsOne = () => {
    const [timeLeft, setTimeLeft] = useState(getCountdown());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getCountdown());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 5,

                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,

                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,

                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,

                },
            },

        ],
    };

    const [flowers, setFlowers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios
        .get("http://localhost:/custom_florist/api/v1/flowers")
        .then((response) => {
          setFlowers(response.data.data.content);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <Spinner animation="border" />;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }


    return (
        <section className="deals-weeek pt-80">
            <div className="container container-lg">
                <div className="border border-gray-100 p-24 rounded-16">
                    <div className="section-heading mb-24">
                        <div className="flex-between flex-wrap gap-8">
                            <h5 className="mb-0">Deal of The Week</h5>
                            <div className="flex-align mr-point gap-16">
                                <Link
                                    to="/shop"
                                    className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                                >
                                    View All Deals
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="deal-week-box rounded-16 overflow-hidden flex-between position-relative z-1 mb-24">
                        <img
                            src="assets/images/bg/week-deal-bg.png"
                            alt=""
                            className="position-absolute inset-block-start-0 inset-block-start-0 w-100 h-100 z-n1 object-fit-cover"
                        />
                        <div className="d-lg-block d-none ps-32 flex-shrink-0">
                            <img src="assets/images/thumbs/week-deal-img1.png" alt="" />
                        </div>
                        <div className="deal-week-box__content px-sm-4 d-block w-100 text-center">
                            <h6 className="mb-20">Apple AirPods Max, Over Ear Headphones</h6>
                            <div className="countdown mt-20" id="countdown4">
                                <ul className="countdown-list style-four flex-center flex-wrap">
                                    <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                                        <span className="days" />
                                        {timeLeft.days} <br /> Days
                                    </li>
                                    <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                                        <span className="hours" />
                                        {timeLeft.hours} <br /> Hour
                                    </li>
                                    <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                                        <span className="minutes" />
                                        {timeLeft.minutes} <br /> Min
                                    </li>
                                    <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-circle bg-neutral-600">
                                        <span className="seconds" />
                                        {timeLeft.seconds} <br /> Sec
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-lg-block d-none flex-shrink-0 pe-xl-5">
                            <div className="me-xxl-5">
                                <img src="assets/images/thumbs/week-deal-img2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="deals-week-slider arrow-style-two">
                        <Slider {...settings}>

                        <div className="container mt-5">
            <h2 className="text-center mb-4">Flower Collection</h2>
            <div className="row">
                {flowers.map((flower) => (
                    <div className="col-md-4 mb-4" key={flower.flowerId}>
                        <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                            <Link
                                to={`/flower/${flower.flowerId}`}
                                className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                            >
                                <img
                                    src={flower.image}
                                    alt={flower.name}
                                    className="w-auto max-w-unset"
                                />
                            </Link>
                            <div className="product-card__content mt-16">
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                    <Link
                                        to={`/flower/${flower.flowerId}`}
                                        className="link text-line-2"
                                    >
                                        {flower.name}
                                    </Link>
                                </h6>
                                <span className="text-gray-500 text-xs">{flower.flowerType} - {flower.color}</span>
                                <div className="product-card__price my-20">
                                    <span className="text-heading text-md fw-semibold">
                                        ${flower.price} <span className="text-gray-500 fw-normal">/Qty</span>
                                    </span>
                                </div>
                                <Link
                                    to="/cart"
                                    className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                >
                                    Add To Cart <i className="ph ph-shopping-cart" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
                       
                          
                          
                            
                            
                           
                        </Slider>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default DealsOne