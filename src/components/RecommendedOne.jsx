import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const RecommendedOne = () => {

    const [flowers, setFlowers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        axios
            .get("http://localhost:8080/custom-florist/api/v1/flowers") // Fixed API URL
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
        return <p>Loading...</p>; // You can replace with a spinner
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <section className="recommended">
            <div className="container container-lg">
                <div className="section-heading flex-between flex-wrap gap-16">
                    <h5 className="mb-0">Recommended for you</h5>
                    <ul className="nav common-tab nav-pills" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="pills-all-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-all"
                                type="button"
                                role="tab"
                                aria-controls="pills-all"
                                aria-selected="true"
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-grocery-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-grocery"
                                type="button"
                                role="tab"
                                aria-controls="pills-grocery"
                                aria-selected="false"
                            >
                                Grocery
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-fruits-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-fruits"
                                type="button"
                                role="tab"
                                aria-controls="pills-fruits"
                                aria-selected="false"
                            >
                                Fruits
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-juices-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-juices"
                                type="button"
                                role="tab"
                                aria-controls="pills-juices"
                                aria-selected="false"
                            >
                                Juices
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-vegetables-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-vegetables"
                                type="button"
                                role="tab"
                                aria-controls="pills-vegetables"
                                aria-selected="false"
                            >
                                Vegetables
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-snacks-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-snacks"
                                type="button"
                                role="tab"
                                aria-controls="pills-snacks"
                                aria-selected="false"
                            >
                                Snacks
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-organic-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-organic"
                                type="button"
                                role="tab"
                                aria-controls="pills-organic"
                                aria-selected="false"
                            >
                                Organic Foods
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="pills-all"
                        role="tabpanel"
                        aria-labelledby="pills-all-tab"
                        tabIndex={0}
                    >
                            
            <div className="container container-lg">
                
                <div className="row g-12">
                    {flowers.length > 0 ? (
                        flowers.map((flower) => (
                            <div key={flower.id} className="col-xxl-2 col-lg-3 col-sm-4 col-6">
                                <div className="product-card h-100 p-8 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white">
                                        {flower.category}
                                    </span>
                                    <Link to={`/product-details/${flower.id}`} className="product-card__thumb flex-center">
                                        <img src={flower.image} alt={flower.name} />
                                    </Link>
                                    <div className="product-card__content p-sm-2">
                                        <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                            <Link to={`/product-details/${flower.id}`} className="link text-line-2">
                                                {flower.name}
                                            </Link>
                                        </h6>
                                        <div className="product-card__price mb-8">
                                            <span className="text-heading text-md fw-semibold">
                                                ${flower.price} <span className="text-gray-500 fw-normal">/Qty</span>
                                            </span>
                                        </div>
                                        <Link to="/cart" className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 mt-24 w-100 justify-content-center">
                                            Add To Cart <i className="ph ph-shopping-cart" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading flowers...</p>
                    )}
                </div>
            </div>
                        </div>
                    </div>
                </div>
        </section>

    )
}

export default RecommendedOne