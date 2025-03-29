import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const { UserID } = JSON.parse(localStorage.getItem("userLoginFlower")) || [];

const ProductListOne = ({ products }) => {
    const handleAddToCart = (product) => {
        console.log('product', product);

        const cart = JSON.parse(localStorage.getItem('cartFlower')) || [];
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.compositions = existingProduct.compositions || [];

            existingProduct.compositions.forEach(comp => {
                const matchingComp = product.compositions?.find(p => p.id === comp.id);
                if (matchingComp) {
                    comp.quantity += matchingComp.quantity;
                }
            });
        } else {
            cart.push({ ...product, compositions: product.compositions || [] });
        }

        toast.success("Add cart success");
        localStorage.setItem('cartFlower', JSON.stringify(cart));
    };
    return (
        <div className="product mt-24">
            <div className="container container-lg">
                <div className="row gy-4 g-12">
                    {products?.map((flower) => (
                        <div className="col-xxl-2 col-lg-3 col-sm-4 col-6" key={flower?.id}>
                            <div className="product-card px-8 py-16 border border-gray-200 hover-border-main-600 rounded-16 position-relative transition-2 shadow-sm hover-shadow-lg hover-translate-y-2" style={{ transition: 'all 0.3s ease-in-out' }}>
                                <button
                                    onClick={() => handleAddToCart(flower)}
                                    className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16"
                                >
                                    Add <i className="ph ph-shopping-cart" />
                                </button>

                                <Link to={`/product-details?productId=${flower?.id}`} className="product-card__thumb flex-center">
                                    <img src={flower?.imageUrl || "assets/images/thumbs/product-img6.png"} alt={flower?.name} />
                                </Link>
                                <div className="product-card__content mt-12">
                                    <div className="product-card__price mb-16">
                                        <span className="text-heading text-md fw-semibold">
                                            {flower?.price} VND<span className="text-gray-500 fw-normal"></span>
                                        </span>
                                    </div>
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link to={`/product-details?productId=${flower?.id}`} className="link text-line-2">
                                            {flower?.name}
                                        </Link>
                                    </h6>
                                    <div className="mt-12">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-valuenow={flower?.sold}
                                            aria-valuemin={0}
                                            aria-valuemax={flower?.stock}
                                        >
                                            <div
                                                className="progress-bar bg-main-600 rounded-pill"
                                                style={{ width: `${(flower?.sold / flower?.stock) * 100}%` }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: {flower?.compositions?.length}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductListOne;
