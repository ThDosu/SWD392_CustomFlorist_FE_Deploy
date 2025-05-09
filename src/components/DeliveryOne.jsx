import React from 'react'
import { Link } from 'react-router-dom'

const DeliveryOne = () => {
    return (
        <div className="delivery-section">
            <div className="container container-lg">
                <div className="delivery position-relative rounded-16 bg-main-600 p-16 flex-align gap-16 flex-wrap z-1">
                    <img
                        src="assets/images/bg/delivery-bg.png"
                        alt=""
                        className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100"
                    />
                    <div className="row align-items-center">
                        <div className="col-md-3 d-md-block d-none">
                            <div className="delivery__man text-center">
                                <img src="assets/images/thumbs/logo.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-7">
                            <div className="text-center">
                                <h4 className="text-white mb-8">
                                    Chúng mình mở hàng vào Ngày Mai từ 9:00 sáng đến 10:00 tối
                                </h4>
                                <Link
                                    to="/shop"
                                    className="mt-16 btn btn-main-two fw-medium d-inline-flex align-items-center rounded-pill gap-8"
                                    tabIndex={0}
                                >
                                    Mua sắm ngay!
                                    <span className="icon text-xl d-flex">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-5 d-sm-block d-none">
                            <img src="assets/images/thumbs/wow.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DeliveryOne