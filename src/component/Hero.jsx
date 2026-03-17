import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ecobazar.css';

// الأيقونات
import { IoMdStar } from "react-icons/io";
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';

// الصور الخاصة بك
import img from "../../img/ceacf192f06daaf9ab6d0274ea45517b334ce6b1.png";
import img2 from "../../img/Image (2).png";
import img3 from "../../img/Image (2).png";
import img4 from "../../img/Image (3).png";
import img5 from "../../img/Image (4).png";
import img6 from "../../img/Image (5).png";
import headPhone from "../../img/headphones 1.png";
import delivery from "../../img/delivery-truck 1.png";
import shopping from "../../img/shopping-bag.png";
import cricl from "../../img/cricl.png";
import image6 from "../../img/Image 6.png";

const EcobazarHero = () => {
    return (
        <>
            {/* 1. Hero Section */}
            <section
                className="py-5 position-relative"
                style={{ backgroundColor: '#EDF2EE', minHeight: '600px' }}
            >
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-lg-6">
                            <p className="text-uppercase fw-medium mb-2" style={{ color: '#00B207', letterSpacing: '1px', fontSize: '14px' }}>
                                Welcome to Shopery
                            </p>
                            <h1 className="display-4 fw-bold mb-3" style={{ color: '#1A1A1A' }}>
                                Fresh & Healthy <br /> <span className="fw-normal">Organic Food</span>
                            </h1>
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <span className="fs-4">Sale up to</span>
                                <span className="fs-4 fw-bold" style={{ color: '#FF8A00' }}>30% OFF</span>
                            </div>
                            <p className="text-muted mb-4">Free shipping on all your order. we deliver, you enjoy</p>
                            <button className="btn btn-lg rounded-pill px-4 py-2 text-white d-inline-flex align-items-center gap-2" style={{ backgroundColor: '#00B207' }}>
                                Shop now
                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.25 1.875L16.875 7.5M16.875 7.5L11.25 13.125M16.875 7.5L1.125 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src={img} className="img-fluid drop-shadow" alt="Veggies" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Features Bar */}
            <div className="container" style={{ marginTop: '-50px', position: 'relative', zIndex: '10' }}>
                <div className="bg-white shadow-sm border rounded-3 p-4">
                    <div className="row g-4 justify-content-center text-center text-lg-start">
                        <FeatureItem src={delivery} title="Free Shipping" desc="Free shipping on all your order" />
                        <FeatureItem src={headPhone} title="Customer Support 24/7" desc="Instant access to Support" />
                        <FeatureItem src={shopping} title="100% Secure Payment" desc="We ensure your money is safe" />
                        <FeatureItem src={cricl} title="Money-Back Guarantee" desc="30 Days Money-Back" />
                    </div>
                </div>
            </div>

            {/* 3. Featured Products */}
            <div className='container mt-5 pt-4'>
                <div className='text-center mb-4'>
                    <h2 className='fw-bold'>Featured Products</h2>
                </div>
                <div className='row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3'>
                    <ProductCard image={img2} name="Green Apple" price="14.99" />
                    <ProductCard image={img3} name="Chanise Cabbage" price="14.99" />
                    <ProductCard image={img4} name="Green Lettuce" price="14.99" />
                    <ProductCard image={img5} name="Green Chili" price="14.99" isActive={true} />
                    <ProductCard image={img6} name="Corn" price="14.99" />
                </div>
            </div>

            {/* 4. Hot Deals & Lists */}
            <div className='container mt-5 pt-3 mb-5'>
                <div className='row g-4'>
                    <div className='col-lg-3 col-md-6'>
                        <h5 className="fw-bold mb-3">Hot Deals</h5>
                        <ListProductItem image={img2} name="Green Apple" price="14.99" />
                        <ListProductItem image={img3} name="Indian Malta" price="14.99" isActive={true} />
                        <ListProductItem image={img4} name="Green Lettuce" price="14.99" />
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <h5 className="fw-bold mb-3">Best Seller</h5>
                        <ListProductItem image={img5} name="Eggplant" price="14.99" />
                        <ListProductItem image={img6} name="Red Capsicum" price="14.99" oldPrice="20.99" />
                        <ListProductItem image={img2} name="Red Tomatos" price="14.99" />
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        <h5 className="fw-bold mb-3">Top Rated</h5>
                        <ListProductItem image={img3} name="Big Potatos" price="14.99" />
                        <ListProductItem image={img6} name="Corn" price="14.99" oldPrice="20.99" />
                        <ListProductItem image={img5} name="Fresh Cauliflower" price="14.99" />
                    </div>

                    <div className='col-lg-3 col-md-6'>
                        {/* Summer Sale Banner */}
                        <div className="rounded-3 text-center w-100"
                            style={{
                                backgroundImage: `url(${image6})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                minHeight: '420px', // زيادة الارتفاع ليتناسب مع الصورة
                                paddingTop: '40px'  // دفع المحتوى من الأعلى ليكون مشابه للتصميم
                            }}>
                            <p className="text-uppercase mb-2 fw-bold" style={{ fontSize: '13px', letterSpacing: '1px', color: '#1A1A1A' }}>
                                Summer Sale
                            </p>

                            <h2 className="display-6 fw-bold mb-4" style={{ color: '#00B207' }}>
                                75% off
                            </h2>

                            <button className="btn bg-white rounded-pill px-4 py-2 fw-bold shadow-sm d-inline-flex align-items-center gap-2"
                                style={{ color: '#00B207', fontSize: '15px' }}>
                                Shop Now
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

/* --- المكونات المساعدة (Helper Components) --- */

const FeatureItem = ({ src, title, desc }) => (
    <div className="col-md-6 col-lg-3">
        <div className="d-flex align-items-center gap-3 px-2">
            <img src={src} alt={title} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div>
                <h6 className="mb-0 fw-bold" style={{ fontSize: '15px', color: '#1A1A1A' }}>{title}</h6>
                <small className="text-muted" style={{ fontSize: '13px' }}>{desc}</small>
            </div>
        </div>
    </div>
);

const ProductCard = ({ image, name, price, isActive }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className={`card h-100 product-card p-3 rounded-3 ${isActive ? 'active-card' : ''}`}>

                <div className="card-actions" style={{
                    opacity: isHovered || isActive ? 1 : 0,
                    visibility: isHovered || isActive ? 'visible' : 'hidden',
                    transition: '0.3s ease'
                }}>
                    <div className="action-icon"><AiOutlineHeart size={18} /></div>
                    <div className="action-icon"><AiOutlineEye size={18} /></div>
                </div>

                <div className="text-center mb-3 mt-2">
                    <img src={image} className="img-fluid" alt={name} style={{ height: '140px', objectFit: 'contain' }} />
                </div>

                <div className="card-body p-0">
                    <p className="text-muted mb-1" style={{ fontSize: '14px' }}>{name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold" style={{ color: '#1A1A1A', fontSize: '16px' }}>${price}</span>
                        <button className="bag-btn">
                            <HiOutlineShoppingBag size={18} />
                        </button>
                    </div>
                    <div className="text-warning mt-2" style={{ fontSize: '14px' }}>
                        <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar color="#E5E5E5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ListProductItem = ({ image, name, price, oldPrice, isActive }) => (
    <div className={`list-item-card d-flex align-items-center p-2 mb-3 rounded-3 border ${isActive ? 'active-list' : ''}`}>
        <img src={image} alt={name} style={{ width: '80px', height: '80px', objectFit: 'contain' }} className="me-3" />

        <div className="flex-grow-1">
            <p className="mb-1" style={{ fontSize: '14px', color: '#1A1A1A' }}>{name}</p>
            <div className="d-flex align-items-center gap-2 mb-1">
                <span className="fw-bold" style={{ fontSize: '15px' }}>${price}</span>
                {oldPrice && <span className="text-muted text-decoration-line-through" style={{ fontSize: '13px' }}>${oldPrice}</span>}
            </div>
            <div className="text-warning" style={{ fontSize: '12px' }}>
                <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar color="#E5E5E5" />
            </div>
        </div>

        {isActive && (
            <div className="d-flex flex-column gap-1 pe-2">
                <button className="list-action-btn green-bag"><HiOutlineShoppingBag size={16} /></button>
                <button className="list-action-btn"><AiOutlineEye size={16} /></button>
                <button className="list-action-btn"><AiOutlineHeart size={16} /></button>
            </div>
        )}
    </div>
);

export default EcobazarHero;