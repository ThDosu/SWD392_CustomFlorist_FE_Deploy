import React from 'react'

const ShippingOne = () => {
    return (
        <section className="shipping mb-24" id="shipping">
              <div className="col-lg-12 text-center">
                        <h3 className="text-main">Tại sao chọn CustomFlorist?</h3>
                    </div>
            <div className="container container-lg">
                <div className="row gy-4">
                    <div className="col-xxl-3 col-sm-6">
                        <div className="shipping-item flex-align gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                            <span className="w-56 h-56 flex-center rounded-circle bg-main-600 text-white text-32 flex-shrink-0">
                                <i className="ph-fill ph-car-profile" />
                            </span>
                            <div className="">
                                <h6 className="mb-0">Hoa nhập khẩu cao cấp</h6>
                                <span className="text-sm text-heading">
                                Chúng tôi sử dụng hoa nhập khẩu tươi nhất từ Hà Lan, Nhật Bản, Ecuador...
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-sm-6">
                        <div className="shipping-item flex-align gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                            <span className="w-56 h-56 flex-center rounded-circle bg-main-600 text-white text-32 flex-shrink-0">
                                <i className="ph-fill ph-hand-heart" />
                            </span>
                            <div className="">
                                <h6 className="mb-0"> Thiết kế theo yêu cầu</h6>
                                <span className="text-sm text-heading">
                                Mỗi bó hoa là một kiệt tác được cá nhân hóa, phù hợp với từng sự kiện.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-sm-6">
                        <div className="shipping-item flex-align gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                            <span className="w-56 h-56 flex-center rounded-circle bg-main-600 text-white text-32 flex-shrink-0">
                                <i className="ph-fill ph-credit-card" />
                            </span>
                            <div className="">
                                <h6 className="mb-0">Dịch vụ tận tâm</h6>
                                <span className="text-sm text-heading">
                                Đội ngũ nhân sự florists nhiệt tình, chuyên nghiệp, với nhiều năm kinh nghiệm                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-sm-6">
                        <div className="shipping-item flex-align gap-16 rounded-16 bg-main-50 hover-bg-main-100 transition-2">
                            <span className="w-56 h-56 flex-center rounded-circle bg-main-600 text-white text-32 flex-shrink-0">
                                <i className="ph-fill ph-chats" />
                            </span>
                            <div className="">
                                <h6 className="mb-0">Vận chuyển nhanh</h6>
                                <span className="text-sm text-heading">
                                Giao hoa nhanh chóng, hỗ trợ khách hàng 24/7, đảm bảo hài lòng.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ShippingOne