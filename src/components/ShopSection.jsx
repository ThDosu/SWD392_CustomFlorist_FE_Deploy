import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { productFake } from '../fakedata/fakeProduct';

const ShopSection = ({ product, category }) => {
    const [grid, setGrid] = useState(false);
    const [active, setActive] = useState(false);
    const [products, setProducts] = useState([]);
    const [fieldProduct, setFieldProduct] = useState([]);
    const [search] = useSearchParams();
    const keySearch = search.get("search");

    useEffect(() => {
        if (keySearch) {
            const filteredProducts = products.filter(item => item?.category?.name === keySearch);
            setFieldProduct(filteredProducts);
        } else {
            setFieldProduct(products);
        }
    }, [keySearch, products]);

    useEffect(() => {
        if (product.length > 0) {
            setProducts(product);
        } else {
            setProducts(productFake);
        }
    }, [product]);

    const sidebarController = () => {
        setActive(!active);
    };

    const handleAddToCart = (product) => {
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
        <section className="shop py-80">
            <div className={`side-overlay ${active ? "show" : ""}`} />
            <div className="container container-lg">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-lg-3">
                        <div className={`shop-sidebar ${active ? "active" : ""}`}>
                            <button
                                onClick={sidebarController}
                                type="button"
                                className="shop-sidebar__close d-lg-none d-flex w-32 h-32 flex-center border border-gray-100 rounded-circle hover-bg-main-600 position-absolute inset-inline-end-0 me-10 mt-8 hover-text-white hover-border-main-600"
                            >
                                <i className="ph ph-x" />
                            </button>

                            {/* Category Section */}
                            <div className="shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32">
                                <h6 className="text-xl border-bottom border-gray-100 pb-24 mb-24">Category</h6>
                                <ul className="max-h-540 overflow-y-auto scroll-sm">
                                    {category?.content?.map((category, index) => (
                                        <li key={index} className="mb-24">
                                            <Link to={`/shop?search=${category.name}`} className="text-gray-900 hover-text-main-600">
                                                {category.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Products Section */}
                    <div className="col-lg-9">
                        <div className="flex-between gap-16 flex-wrap mb-40">
                            <span className="text-gray-900">Showing 1-20 of 85 results</span>
                            <div className="position-relative flex-align gap-16 flex-wrap">
                                <div className="list-grid-btns flex-align gap-16">
                                    <button
                                        onClick={() => setGrid(true)}
                                        type="button"
                                        className={`w-44 h-44 flex-center border rounded-6 text-2xl border-gray-100 ${grid ? "border-main-600 text-white bg-main-600" : ""}`}
                                    >
                                        <i className="ph-bold ph-list-dashes" />
                                    </button>
                                    <button
                                        onClick={() => setGrid(false)}
                                        type="button"
                                        className={`w-44 h-44 flex-center border rounded-6 text-2xl border-gray-100 ${!grid ? "border-main-600 text-white bg-main-600" : ""}`}
                                    >
                                        <i className="ph ph-squares-four" />
                                    </button>
                                </div>
                                <select defaultValue={1} className="form-control common-input px-14 py-14 text-inherit rounded-6 w-auto">
                                    <option value={1}>Popular</option>
                                    <option value={2}>Latest</option>
                                    <option value={3}>Trending</option>
                                    <option value={4}>Matches</option>
                                </select>
                            </div>
                        </div>

                        {/* Product List */}
                        <div className={`list-grid-wrapper ${grid ? 'list-view' : ''}`}>
                            {fieldProduct?.map(product => (
                                <div
                                    key={product.flowerId}
                                    className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2"
                                >
                                    {/* Product Image (Fixed Size with Object Cover) */}
                                    <Link
                                        to={{
                                            pathname: `/product-details`,
                                            search: `?productId=${product.id}`,
                                        }}
                                        className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                    >
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className="w-full h-[200px] object-cover rounded-8"
                                        />
                                    </Link>

                                    {/* Product Info */}
                                    <div className="product-card__content mt-16">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link
                                                to={{
                                                    pathname: `/product-details`,
                                                    search: `?productId=${product.id}`,
                                                }}
                                                className="link text-line-2"
                                            >
                                                {product.name}
                                            </Link>
                                        </h6>
                                        <div className="product-card__price my-20">
                                            <span className="text-heading text-md fw-semibold">
                                                ${product.price} <span className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <button
                                            className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add To Cart <i className="ph ph-shopping-cart" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopSection;
