import React from 'react'
import { Link } from 'react-router-dom'

const BreadcrumbTwo = () => {
    return (
        <div className="breadcrumb py-26 bg-color-one">
            <div className="container container-lg">
                <div className="breadcrumb-wrapper flex-between flex-wrap gap-16">
                    <h6 className="mb-0">Chi Tiết Cửa Hàng</h6>
                    <ul className="flex-align gap-8 flex-wrap">
                        <li className="text-sm">
                            <Link to="/" className="text-main-600 flex-align gap-8">
                                <i className="ph ph-house" />
                                Trang Chủ
                            </Link>
                        </li>
                        <li className="flex-align text-gray-500">
                            <i className="ph ph-caret-right" />
                        </li>
                        <li className="text-sm">
                            <Link to="/shop" className="text-main-600 flex-align gap-8">
                                Cửa Hàng
                            </Link>
                        </li>
                        <li className="flex-align text-gray-500">
                            <i className="ph ph-caret-right" />
                        </li>
                        <li className="text-sm">
                            <Link to="/" className="text-main-600 flex-align gap-8">
                                Lưới Cửa Hàng
                            </Link>
                        </li>
                        <li className="flex-align text-gray-500">
                            <i className="ph ph-caret-right" />
                        </li>
                        <li className="text-sm text-neutral-600">Khoai Tây Chiên Lay's</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BreadcrumbTwo