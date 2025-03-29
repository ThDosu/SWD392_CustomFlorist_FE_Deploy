import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ReactSlider from 'react-slider';
import { toast } from 'react-toastify';
import { productFake } from '../fakedata/fakeProduct';

const ShopSection = ({product,category}) => {
    const [grid, setGrid] = useState(false);
    const [active, setActive] = useState(false);
    const [products,setProducts]=useState([])
    const [fieldProduct, setFieldProduct] = useState([]);
        const [search] = useSearchParams()
        const keySearch = search.get("search");
    const sidebarController = () => {
        setActive(!active);
    };
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
    
    const style = {
        section: "shop py-80",
        container: "container container-lg",
        row: "row",
        sidebar: `shop-sidebar ${active ? "active" : ""}`,
        overlay: `side-overlay ${active ? "show" : ""}`,
        closeButton: "shop-sidebar__close d-lg-none d-flex w-32 h-32 flex-center border border-gray-100 rounded-circle hover-bg-main-600 position-absolute inset-inline-end-0 me-10 mt-8 hover-text-white hover-border-main-600",
        gridButton: "w-44 h-44 flex-center border rounded-6 text-2xl border-gray-100",
        gridActive: "border-main-600 text-white bg-main-600",
        sortSelect: "form-control common-input px-14 py-14 text-inherit rounded-6 w-auto",
        filterButton: "btn btn-main h-40 flex-align"
    };
    useEffect(() => {
        if (keySearch) {
            const filteredProducts = products.filter(item => item?.category?.name === keySearch);
            setFieldProduct(filteredProducts);
            console.log('fieldProduct', filteredProducts);
        }else{
            setFieldProduct(products)
        }
    }, [keySearch, products]);
    // Placeholder for categories (to be replaced with API data later)
    // const categories = [
    //     { name: "Mobile & Accessories", count: 12 },
    //     { name: "Laptop", count: 12 },
    //     { name: "Electronics", count: 12 }
    // ];
    useEffect(() => {
        if(product.length>0){
            setProducts(product)
        }else{
            setProducts(productFake)
        }
        
    }, [product])
    
    // Placeholder for products (to be replaced with API data later)
    return React.createElement(
        'section',
        { className: style.section },
        React.createElement(
            'div',
            { className: style.overlay }
        ),
        React.createElement(
            'div',
            { className: style.container },
            React.createElement(
                'div',
                { className: style.row },
                React.createElement(
                    'div',
                    { className: 'col-lg-3' },
                    React.createElement(
                        'div',
                        { className: style.sidebar },
                        React.createElement(
                            'button',
                            {
                                onClick: sidebarController,
                                type: 'button',
                                className: style.closeButton
                            },
                            React.createElement('i', { className: 'ph ph-x' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32' },
                            React.createElement(
                                'h6',
                                { className: 'text-xl border-bottom border-gray-100 pb-24 mb-24' },
                                'Category'
                            ),
                            React.createElement(
                                'ul',
                                { className: 'max-h-540 overflow-y-auto scroll-sm' },
                                category?.content?.map((category, index) =>
                                    React.createElement(
                                        'li',
                                        { key: index, className: 'mb-24' },
                                        React.createElement(
                                            Link,
                                            { to: `/shop?search=${category.name}`, className: 'text-gray-900 hover-text-main-600' },
                                            `${category.name}`
                                        )
                                    )
                                )
                            )
                        ),
                        // React.createElement(
                        //     'div',
                        //     { className: 'shop-sidebar__box border border-gray-100 rounded-8 p-32 mb-32' },
                        //     React.createElement(
                        //         'h6',
                        //         { className: 'text-xl border-bottom border-gray-100 pb-24 mb-24' },
                        //         'Filter by Price by Price'
                        //     ),
                        //     React.createElement(
                        //         'div',
                        //         { className: 'custom--range' },
                        //         React.createElement(
                        //             ReactSlider,
                        //             {
                        //                 className: 'horizontal-slider',
                        //                 thumbClassName: 'example-thumb',
                        //                 trackClassName: 'example-track',
                        //                 defaultValue: [0, 100],
                        //                 ariaLabel: ['Lower thumb', 'Upper thumb'],
                        //                 ariaValuetext: state => `Thumb value ${state.valueNow}`,
                        //                 renderThumb: (props, state) => {
                        //                     const { key, ...restProps } = props;
                        //                     return React.createElement('div', { ...restProps, key: state.index }, state.valueNow);
                        //                 },
                        //                 pearling: true,
                        //                 minDistance: 10
                        //             }
                        //         ),
                        //         React.createElement('br'),
                        //         React.createElement('br'),
                        //         React.createElement(
                        //             'div',
                        //             { className: 'flex-between flex-wrap-reverse gap-8 mt-24' },
                        //             React.createElement(
                        //                 'button',
                        //                 { type: 'button', className: style.filterButton },
                        //                 'Filter'
                        //             )
                        //         )
                        //     )
                        // )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-lg-9' },
                    React.createElement(
                        'div',
                        { className: 'flex-between gap-16 flex-wrap mb-40' },
                        React.createElement(
                            'span',
                            { className: 'text-gray-900' },
                            'Showing 1-20 of 85 results'
                        ),
                        React.createElement(
                            'div',
                            { className: 'position-relative flex-align gap-16 flex-wrap' },
                            React.createElement(
                                'div',
                                { className: 'list-grid-btns flex-align gap-16' },
                                React.createElement(
                                    'button',
                                    {
                                        onClick: () => setGrid(true),
                                        type: 'button',
                                        className: `${style.gridButton} ${grid ? style.gridActive : ''}`
                                    },
                                    React.createElement('i', { className: 'ph-bold ph-list-dashes' })
                                ),
                                React.createElement(
                                    'button',
                                    {
                                        onClick: () => setGrid(false),
                                        type: 'button',
                                        className: `${style.gridButton} ${!grid ? style.gridActive : ''}`
                                    },
                                    React.createElement('i', { className: 'ph ph-squares-four' })
                                )
                            ),
                            React.createElement(
                                'select',
                                { defaultValue: 1, className: style.sortSelect },
                                React.createElement('option', { value: 1 }, 'Popular'),
                                React.createElement('option', { value: 2 }, 'Latest'),
                                React.createElement('option', { value: 3 }, 'Trending'),
                                React.createElement('option', { value: 4 }, 'Matches')
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: `list-grid-wrapper ${grid ? 'list-view' : ''}` },
                        fieldProduct?.map(product =>
                            React.createElement(
                                'div',
                                { key: product.flowerId, className: 'product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2' },
                                React.createElement(
                                    Link,
                                    { 
                                        to: {
                                            pathname: `/product-details`,
                                            search: `?productId=${product.id}`, 
                                        }, 
                                        className: 'product-card__thumb flex-center rounded-8 bg-gray-50 position-relative' 
                                    },
                                    React.createElement('img', { src: product.imageUrl, alt: '', className: 'w-auto max-w-unset' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'product-card__content mt-16' },
                                    React.createElement(
                                        'h6',
                                        { className: 'title text-lg fw-semibold mt-12 mb-8' },
                                        React.createElement(
                                            Link,
                                            { to: {
                                                pathname: `/product-details`,
                                                search: `?productId=${product.id}`,

                                            }, className: 'link text-line-2' },
                                            product.name
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'product-card__price my-20' },
                                        React.createElement(
                                            'span',
                                            { className: 'text-heading text-md fw-semibold' },
                                            `$${product.price} `,
                                            React.createElement('span', { className: 'text-gray-500 fw-normal' }, '/Qty')
                                        )
                                    ),
                                    React.createElement(
                                        'button',
                                        {
                                            className: 'product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium',
                                            onClick: () => handleAddToCart(product)
                                        },
                                        'Add To Cart ',
                                        React.createElement('i', { className: 'ph ph-shopping-cart' })
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

export default ShopSection;