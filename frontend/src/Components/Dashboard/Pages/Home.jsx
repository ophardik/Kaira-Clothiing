import React, { useEffect } from 'react'
import Arct from '../../Designing/images/arct-icon.png'
import Banner1 from '../../Designing/images/banner-image-1.jpg'
import Banner2 from '../../Designing/images/banner-image-2.jpg'
import Banner3 from '../../Designing/images/banner-image-3.jpg'
import Banner4 from '../../Designing/images/banner-image-4.jpg'
import Cat1 from '../../Designing/images/cat-item1.jpg'
import Cat2 from '../../Designing/images/cat-item2.jpg'
import Insta1 from '../../Designing/images/insta-item1.jpg'
import Insta2 from '../../Designing/images/insta-item2.jpg'
import Insta3 from '../../Designing/images/insta-item3.jpg'
import Insta4 from '../../Designing/images/insta-item4.jpg'
import Insta5 from '../../Designing/images/insta-item5.jpg'
import Insta6 from '../../Designing/images/insta-item6.jpg'
import Logo from '../../Designing/images/dhl-logo.png'
import Logo1 from '../../Designing/images/logo1.png'
import Logo2 from '../../Designing/images/logo2.png'
import Logo3 from '../../Designing/images/logo3.png'
import Logo4 from '../../Designing/images/logo4.png'
import Logo5 from '../../Designing/images/logo5.png'
import Master from '../../Designing/images/master-card.png'
import Paypal from '../../Designing/images/paypal-card.png'
import Visa from '../../Designing/images/visa-card.png'
import Model1 from '../../Designing/images/post-image1.jpg'
import Model2 from '../../Designing/images/post-image2.jpg'
import Model3 from '../../Designing/images/post-image3.jpg'
import Product1 from '../../Designing/images/product-item-1.jpg'
import Product3 from '../../Designing/images/product-item-3.jpg'
import Product4 from '../../Designing/images/product-item-4.jpg'
import Product5 from '../../Designing/images/product-item-5.jpg'
import Product6 from '../../Designing/images/product-item-6.jpg'
import Product7 from '../../Designing/images/product-item-7.jpg'
import Product8 from '../../Designing/images/product-item-8.jpg'
import Product9 from '../../Designing/images/product-item-9.jpg'
import Product10 from '../../Designing/images/product-item-10.jpg'
import Pattern from '../../Designing/images/pattern-bg.png'
import Single2 from '../../Designing/images/single-image-2.jpg'
import VideoIm from '../../Designing/images/video-image.jpg'
import TextPattern from '../../Designing/images/text-pattern.png'
import MainLogo from '../../Designing/images/main-logo.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from 'react-router-dom'
import { FaStore, FaBookOpen, FaShoppingCart } from "react-icons/fa";
import { GiBoxUnpacking } from "react-icons/gi";
import { RiGlobalFill } from "react-icons/ri";
function Home() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const Icon = ({ name, width = 24, height = 4, color = 'currentColor' }) => {
    return (
      <svg width={width} height={height} fill={color}>
        <use xlinkHref={`#${name}`} />
      </svg>
    );
  };
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <defs>
          <symbol id="instagram" viewBox="0 0 15 15">
            <path fill="none" stroke="currentColor" d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z" />
          </symbol>
          <symbol id="facebook" viewBox="0 0 15 15">
            <path fill="none" stroke="currentColor" d="M7.5 0C3.35 0 0 3.35 0 7.5S3.35 15 7.5 15 15 11.65 15 7.5 11.65 0 7.5 0ZM8 8h1V6h-1v2ZM7 6h2V5h-1c-.5 0-.5-.5-.5-.5V4h-1v1H6v1h1v2h.5V7h1.5V6Z" />
          </symbol>
          <symbol id="twitter" viewBox="0 0 15 15">
            <path fill="none" stroke="currentColor" d="M14 3.5c-.5.2-1 .3-1.5.4-.5-.5-.5-1-1-1-.5 0-.5.5-.5.5V3c0-.5.5-.5.5-.5-1-.5-1.5-1-2-1a3 3 0 0 0-3 3 3 3 0 0 0 3 3h2a3 3 0 0 1 2-3ZM2 7.5c-.5-.5-.5-1-1-1-.5 0-.5.5-.5.5v1c0 .5-.5.5-.5.5h2s1-.5 1-1c0-.5-.5-.5-.5-.5z" />
          </symbol>
          <symbol id="youtube" viewBox="0 0 15 15">
            <path fill="none" stroke="currentColor" d="M11 3H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-3 4V5l4 2-4 2Z" />
          </symbol>
        </defs>
      </svg>

      {/* Example of how to use the Icon component */}
      {/* <h1>Social Media Icons</h1> */}
      <div>
        <Icon name="instagram" width={0} height={0} color="purple" />
        <Icon name="facebook" width={0} height={0} color="blue" />
        <Icon name="twitter" width={0} height={0} color="skyblue" />
        <Icon name="youtube" width={0} height={0} color="red" />
      </div>

      <div className="preloader text-white fs-6 text-uppercase overflow-hidden" />
      <div className="search-popup">
        <div className="search-popup-container">
          <form role="search" method="get" className="form-group" action="">
            <input
              type="search"
              id="search-form"
              className="form-control border-0 border-bottom"
              placeholder="Type and press enter"
              defaultValue=""
              name="s"
            />
            <button
              type="submit"
              className="search-submit border-0 position-absolute bg-white"
              style={{ top: 15, right: 15 }}
            >
              <svg className="search" width={24} height={24}>
                <use xlinkHref="#search" />
              </svg>
            </button>
          </form>
          <h5 className="cat-list-title">Browse Categories</h5>
          <ul className="cat-list">
            <li className="cat-list-item">
              <a href="#" title="Jackets">
                Jackets
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="T-shirts">
                Men
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Handbags">
                Handbags
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Accessories">
                Accessories
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Cosmetics">
                Cosmetics
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Dresses">
                Dresses
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Jumpsuits">
                Jumpsuits
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasCart"
        aria-labelledby="My Cart"
      >
        <div className="offcanvas-header justify-content-center">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <div className="order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Growers cider</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Fresh grapes</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Heinz tomato ketchup</h6>
                  <small className="text-body-secondary">Brief description</small>
                </div>
                <span className="text-body-secondary">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>
            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Continue to Checkout
            </button>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-light text-uppercase fs-6 p-3 border-bottom align-items-center">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center w-100">
            <div className="col-auto">
              <a className="navbar-brand text-white" href="index.html">
                <svg width={112} height={45} viewBox="0 0 112 45" xmlns="http://www.w3.org/2000/svg" fill="#111">
                  <path d="M2.51367 34.9297C2.58398 34.6836 2.64844 34.3789 2.70703 34.0156C2.77734 33.6523 2.83594 33.2012 2.88281 32.6621C2.92969 32.123 2.96484 31.4844 2.98828 30.7461C3.01172 29.9961 3.02344 29.123 3.02344 28.127V16.6836C3.02344 15.6875 3.01172 14.8203 2.98828 14.082C2.96484 13.332 2.92969 12.6875 2.88281 12.1484C2.83594 11.5977 2.77734 11.1406 2.70703 10.7773C2.64844 10.4141 2.58398 10.1094 2.51367 9.86328V9.79297H6.73242V9.86328C6.66211 10.1094 6.5918 10.4141 6.52148 10.7773C6.46289 11.1406 6.41016 11.5977 6.36328 12.1484C6.32812 12.6875 6.29297 13.332 6.25781 14.082C6.23438 14.8203 6.22266 15.6875 6.22266 16.6836V20.6035L16.4883 12.2188C17.6367 11.2813 18.2109 10.4727 18.2109 9.79297H23.1504V9.86328C22.459 10.0273 21.7559 10.3437 21.041 10.8125C20.3379 11.2695 19.5879 11.832 18.791 12.5L9.7207 20.0938L20.6367 32.082C21.0938 32.5508 21.4805 32.9434 21.7969 33.2598C22.125 33.5645 22.4121 33.8223 22.6582 34.0332C22.9043 34.2324 23.127 34.4023 23.3262 34.543C23.5371 34.6719 23.7539 34.8008 23.9766 34.9297V35H18.8262C18.7793 34.8945 18.6973 34.7598 18.5801 34.5957C18.4746 34.4316 18.3457 34.2617 18.1934 34.0859C18.0527 33.9102 17.8945 33.7285 17.7188 33.541C17.5547 33.3535 17.3965 33.1777 17.2441 33.0137L6.22266 20.9199V28.127C6.22266 29.123 6.23438 29.9961 6.25781 30.7461C6.29297 31.4844 6.32812 32.123 6.36328 32.6621C6.41016 33.2012 6.46289 33.6523 6.52148 34.0156C6.5918 34.3789 6.66211 34.6836 6.73242 34.9297V35H2.51367V34.9297ZM45.3846 35V34.9297C45.408 34.8711 45.4256 34.7832 45.4373 34.666C45.4491 34.5488 45.4549 34.4434 45.4549 34.3496C45.4549 33.9863 45.4022 33.5879 45.2967 33.1543C45.203 32.709 45.0155 32.1582 44.7342 31.502L42.6073 26.7207C41.951 26.6973 41.078 26.6855 39.9881 26.6855C38.8983 26.6855 37.7205 26.6855 36.4549 26.6855C35.5291 26.6855 34.6327 26.6855 33.7655 26.6855C32.91 26.6855 32.1366 26.6973 31.4452 26.7207L29.4237 31.3613C29.2479 31.7949 29.0604 32.2695 28.8612 32.7852C28.662 33.3008 28.5623 33.8223 28.5623 34.3496C28.5623 34.502 28.5741 34.6309 28.5975 34.7363C28.6209 34.8301 28.6444 34.8945 28.6678 34.9297V35H25.0819V34.9297C25.2928 34.707 25.5565 34.3145 25.8729 33.752C26.1893 33.1777 26.535 32.4629 26.91 31.6074L36.9823 9.26562H38.3885L47.9334 30.7461C48.1561 31.25 48.3846 31.7422 48.619 32.2227C48.8651 32.6914 49.0936 33.1133 49.3045 33.4883C49.5155 33.8633 49.703 34.1797 49.867 34.4375C50.0311 34.6953 50.1424 34.8594 50.201 34.9297V35H45.3846ZM33.994 25.1738C34.6737 25.1738 35.3709 25.1738 36.0858 25.1738C36.8006 25.1621 37.4979 25.1562 38.1776 25.1562C38.869 25.1445 39.5311 25.1387 40.1639 25.1387C40.7967 25.127 41.3709 25.1152 41.8866 25.1035L36.9471 13.9414L32.0955 25.1738H33.994ZM54.6989 34.9297C54.7692 34.6836 54.8337 34.3789 54.8923 34.0156C54.9509 33.6523 55.0036 33.2012 55.0505 32.6621C55.0973 32.123 55.1325 31.4844 55.1559 30.7461C55.1794 29.9961 55.1911 29.123 55.1911 28.127V16.6836C55.1911 15.6875 55.1794 14.8203 55.1559 14.082C55.1325 13.332 55.0973 12.6875 55.0505 12.1484C55.0036 11.5977 54.9509 11.1406 54.8923 10.7773C54.8337 10.4141 54.7692 10.1094 54.6989 9.86328V9.79297H58.9176V9.86328C58.8473 10.1094 58.777 10.4141 58.7067 10.7773C58.6481 11.1406 58.5954 11.5977 58.5485 12.1484C58.5134 12.6875 58.4781 13.332 58.4431 14.082C58.4206 14.8203 58.4089 15.6875 58.4089 16.6836V20.6035L68.6746 12.2188C69.823 11.2813 70.3972 10.4727 70.3972 9.79297H75.336V9.86328C74.645 10.0273 73.9427 10.3437 73.2282 10.8125" />
                </svg>
              </a>
            </div>
            <div className="col-auto ms-auto">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto align-items-center justify-content-center">
                  <li className="nav-item px-2">
                    <a className="nav-link active text-uppercase" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link text-uppercase" href="/about">About</a>
                  </li>
                  <li className="nav-item px-2">
                    <Link className="nav-link text-uppercase" to="/products">Products</Link>
                  </li>

                  <li className="nav-item px-2 dropdown">
                    <a className="nav-link dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="/men">Men</Link></li>
                      <li><Link className="dropdown-item" to="/women">Women</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item px-2">

                    <Link className="nav-link text-uppercase" to="/cart"><FaShoppingCart size={22} /></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="billbsectionoard" className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <h1
              className="section-title text-center mt-4"
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
                letterSpacing: "2px",
              }}
            >
              Kaira's Clothing
            </h1>
            <div className="col-md-6 text-center">
              <p>
                {/* <b>Kaira: Where Style Meets Comfort</b> */}
              </p>
            </div>
          </div>

          <div style={{ padding: "30px" }}>
            <h2 style={{ textAlign: "center" }}></h2>
            <p style={{ marginTop: "-19px" }}></p>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={15} // Adjust space between slides
              slidesPerView={2} // Default: Show 2 slides at a time
              breakpoints={{
                1024: {
                  slidesPerView: 3, // Show 3 slides for screens 1024px and larger (laptops and desktops)
                },
                768: {
                  slidesPerView: 2, // Show 2 slides for screens 768px and larger (tablets)
                },
                0: {
                  slidesPerView: 2, // Show 1 slide for screens smaller than 768px (phones)
                },
              }}
              style={{
                width: "100%", // Adjust Swiper width
                margin: "auto", // Center the Swiper
              }}
            >
              <SwiperSlide>
                <div className="banner-item">
                  <div className="image-holder zoom-effect">
                    <a href="#">
                      <img
                        src={Banner1}
                        alt="Soft leather jackets"
                        className="zoom-img"
                        style={{ width: "100%", borderRadius: "10px" }}
                      />
                    </a>
                  </div>
                  <div className="banner-content py-4">
                    <h5 className="element-title text-uppercase">Soft leather jackets</h5>
                    <p>
                      Leather jackets are durable, stylish outerwear that combine timeless fashion with functionality.
                    </p>
                    <div className="btn-left">
                      <Link to="/women" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">
                        Discover Now
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="banner-item">
                  <div className="image-holder zoom-effect">
                    <a href="#">
                      <img
                        src={Banner2}
                        alt="Soft leather jackets"
                        className="zoom-img"
                        style={{ width: "100%", borderRadius: "10px" }}
                      />
                    </a>
                  </div>
                  <div className="banner-content py-4">
                    <h5 className="element-title text-uppercase">Old Fashion Jacket</h5>
                    <p>
                      Old-fashioned jackets feature classic designs and timeless craftsmanship, offering a vintage, enduring style.
                    </p>
                    <div className="btn-left">
                      <Link to="/women" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">
                        Discover Now
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="banner-item">
                  <div className="image-holder zoom-effect">
                    <a href="#">
                      <img
                        src={Banner3}
                        alt="Out crop sweater"
                        className="zoom-img"
                        style={{ width: "100%", borderRadius: "10px" }}
                      />
                    </a>
                  </div>
                  <div className="banner-content py-4">
                    <h5 className="element-title text-uppercase">Out crop sweater</h5>
                    <p>
                      A cropped sweater is a shorter-length sweater that pairs well with high-waisted bottoms for a trendy look.
                    </p>
                    <div className="btn-left">
                      <Link to="/men" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">
                        Discover Now
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="banner-item">
                  <div className="image-holder zoom-effect">
                    <a href="#">
                      <img
                        src={Banner4}
                        alt="Soft leather jackets"
                        className="zoom-img"
                        style={{ width: "100%", borderRadius: "10px" }}
                      />
                    </a>
                  </div>
                  <div className="banner-content py-4">
                    <h5 className="element-title text-uppercase">Furry Jacket</h5>
                    <p>
                      A furry jacket is a soft, plush outerwear piece that provides warmth and a fashionable, cozy look.
                    </p>
                    <div className="btn-left">
                      <Link to="/men" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">
                        Discover Now
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>


      <section className="features py-5">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 text-center"
            // data-aos="fade-in"
            // data-aos-delay={0}
            >
              <div className="py-5">
                <svg width={38} height={38} viewBox="0 0 24 24">
                  <use xlinkHref="#calendar" />
                </svg>
                <FaBookOpen size={38} />
                <h4 className="element-title text-capitalize my-3">
                  Book An Appointment
                </h4>
                <p>
                  At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 text-center"
            // data-aos="fade-in"
            // data-aos-delay={300}
            >
              <div className="py-5">
                <svg width={38} height={38} viewBox="0 0 24 24">
                  <use xlinkHref="#shopping-bag" />
                </svg>
                <FaStore size={38} />

                <h4 className="element-title text-capitalize my-3">

                  Pick up in store
                </h4>
                <p>
                  At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 text-center"
            // data-aos="fade-in"
            // data-aos-delay={600}
            >
              <div className="py-5">
                <svg width={38} height={38} viewBox="0 0 24 24">
                  <use xlinkHref="#gift" />
                </svg>
                <GiBoxUnpacking size={38} />
                <h4 className="element-title text-capitalize my-3">
                  Special packaging
                </h4>
                <p>
                  At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
                </p>
              </div>
            </div>
            <div
              className="col-md-3 text-center"
            // data-aos="fade-in"
            // data-aos-delay={900}
            >
              <div className="py-5">
                <svg width={38} height={38} viewBox="0 0 24 24">
                  <use xlinkHref="#arrow-cycle" />
                </svg>
                <RiGlobalFill size={38} />
                <h4 className="element-title text-capitalize my-3">
                  free global returns
                </h4>
                <p>
                  At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


<section
  className="collection bg-light position-relative py-5"
  style={{
    display: "flex",
    flexDirection: "column", // Vertically stack header and content
    textAlign: "center",
  }}
>
  <div
    className="container"
    style={{
      width: "100%",
      maxWidth: "1200px", // Optional: Restricts width for a neat look
      margin: "auto", // Centers the container horizontally
    }}
  >
    <div
      className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h4 className="text-uppercase">Shop by Category</h4>
      <a
        href="index.html"
        className="btn-link"
        style={{
          textDecoration: "none",
        }}
      >
        View All Categories
      </a>
    </div>
    <Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={15}
  slidesPerView={2}
  breakpoints={{
    1024: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    0: { 
      slidesPerView: 1, // Show only 1 slide per view on mobile
      allowTouchMove: false, // Disable swipe functionality on mobile
      navigation: false, // Disable navigation (arrows) on mobile
      pagination: false, // Disable pagination (dots) on mobile
    },
  }}
  onInit={(swiper) => {
    swiper.update(); // Force Swiper to recalculate dimensions
  }}
  style={{
    display: "flex",
    flex: "1",
    margin: "auto",
  }}
>


      <SwiperSlide
        style={{
          flexGrow: 1, // Allow slides to grow
          maxWidth: "50%", // Each slide takes 50% width
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center", // Center the text horizontally
        }}
      >
        <div
          className="cat-item image-zoom-effect"
          style={{
            display: "flex",
            flexDirection: "column", // Stack image and text vertically
            justifyContent: "center", // Center items vertically
            alignItems: "center", // Align text and image in the center
            textAlign: "center", // Center text inside the container
          }}
        >
          <div className="image-holder">
            <Link to="/men">
              <img
                src={Cat1}
                alt="categories"
                className="product-image img-fluid"
                style={{
                  width: "80%", // Reduce the width to 80%
                  height: "auto", // Maintain aspect ratio
                  margin: "0 auto",
                }}
              />
            </Link>
          </div>
          <div className="category-content">
            <div className="product-button">
              <Link to="/men" className="btn btn-common text-uppercase">
                Shop for Men
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        style={{
          flexGrow: 1, // Allow slides to grow
          maxWidth: "50%", // Each slide takes 50% width
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center", // Center the text horizontally
        }}
      >
        <div
          className="cat-item image-zoom-effect"
          style={{
            display: "flex",
            flexDirection: "column", // Stack image and text vertically
            justifyContent: "center", // Center items vertically
            alignItems: "center", // Align text and image in the center
            textAlign: "center", // Center text inside the container
          }}
        >
          <div className="image-holder">
            <Link to="/women">
              <img
                src={Cat2}
                alt="categories"
                className="product-image img-fluid"
                style={{
                  width: "80%", // Reduce the width to 80%
                  height: "auto", // Maintain aspect ratio
                  margin: "0 auto",
                }}
              />
            </Link>
          </div>
          <div className="category-content">
            <div className="product-button">
              <Link to="/women" className="btn btn-common text-uppercase">
                Shop for Women
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</section>

      <section>
        <div>
          <h2 style={{ textAlign: "center" }}>OUR NEW ARRIVALS</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={15}
            slidesPerView={2}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 2,
              },
            }}
            onInit={(swiper) => {
              swiper.update(); // Force Swiper to recalculate dimensions
            }}
            style={{
              width: "100%",
              margin: "auto",
            }}
          >
            <SwiperSlide>
              < div className="insta-item image-zoom-effect">
                <div className="image-holder">
                  <img
                    src={Insta2}
                    alt="Image 1"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              < div className="insta-item image-zoom-effect">
                <div className="image-holder">
                  <img
                    src={Insta3}
                    alt="Image 2"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              < div className="insta-item image-zoom-effect">
                <div className="image-holder">
                  <img
                    src={Insta5}
                    alt="Image 3"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              < div className="insta-item image-zoom-effect">
                <div className="image-holder">
                  <img
                    src={Insta6}
                    alt="Image 4"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="collection bg-light position-relative py-5">
        <div className="container">
          <div className="row">
            <div className="collection-item d-flex flex-wrap my-5">
              {/* Image Column */}
              <div className="col-md-6 col-12 column-container">
                <div className="image-holder">
                  <img
                    src={Single2}
                    alt="collection"
                    className="product-image img-fluid"
                    style={{ width: "100%", height: "auto" }} // Ensures responsive image
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="col-md-6 col-12 column-container bg-white">
                <div className="collection-content p-5 m-0 m-md-5">
                  <h3 className="element-title text-uppercase">
                    Classic winter collection
                  </h3>
                  <p>
                    Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus,
                    gravida orci, fringilla a. Ac sed eu fringilla odio mi.
                    Consequat pharetra at magna imperdiet cursus ac faucibus sit
                    libero. Ultricies quam nunc, lorem sit lorem urna, pretium
                    aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo
                    mollis diam sed facilisis at cursus imperdiet cursus ac faucibus
                    sit faucibus sit libero.
                  </p>
                  <Link to="/women" className="btn btn-dark text-uppercase mt-3">
                    Shop Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="best-sellers"
        className="best-sellers product-carousel py-5 position-relative overflow-hidden"
      >
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
            <h4 className="text-uppercase">Best Selling Items</h4>
            <a href="index.html" className="btn-link">
              View All Products
            </a>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={15}
            slidesPerView={2}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                clickable:false
              },
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 2,
              },
            }}
            onInit={(swiper) => {
              swiper.update(); // Force Swiper to recalculate dimensions
            }}
            style={{
              width: "100%",
              margin: "auto",
            }}
          >
            <SwiperSlide>
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
                  <Link to="/men">
                    <img
                      src={Product4}
                      alt="categories"
                      className="product-image img-fluid"
                    />
                  </Link>
                  <Link to="/men" className="btn-icon btn-wishlist">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <use xlinkHref="#heart" />
                    </svg>
                  </Link>
                  <div className="product-content">
                    <h5 className="text-uppercase fs-5 mt-3">
                      <Link to="/men">T-Shirt</Link>
                    </h5>
                    <Link
                      to="/men"
                      className="text-decoration-none"
                      data-after="Add to cart"
                    >
                      <span>$95.00</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
                  <Link to="/women">
                    <img
                      src={Product3}
                      alt="product"
                      className="product-image img-fluid"
                    />
                  </Link>
                  <Link to="/women" className="btn-icon btn-wishlist">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <use xlinkHref="#heart" />
                    </svg>
                  </Link>
                  <div className="product-content">
                    <h5 className="text-uppercase fs-5 mt-3">
                      <Link to="/women">Crop Top</Link>
                    </h5>
                    <Link
                      to="/women"
                      className="text-decoration-none"
                      data-after="Add to cart"
                    >
                      <span>$55.00</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
                  <Link to="/women">
                    <img
                      src={Product5}
                      alt="categories"
                      className="product-image img-fluid"
                    />
                  </Link>
                  <Link to="/women" className="btn-icon btn-wishlist">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <use xlinkHref="#heart" />
                    </svg>
                  </Link>
                  <div className="product-content">
                    <h5 className="text-uppercase fs-5 mt-3">
                      <Link to="/women">Dark florish onepiece</Link>
                    </h5>
                    <Link
                      to="/women"
                      className="text-decoration-none"
                      data-after="Add to cart"
                    >
                      <span>$65.00</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
                  <a href="index.html">
                    <img
                      src={Product6}
                      alt="categories"
                      className="product-image img-fluid"
                    />
                  </a>
                  <a href="index.html" className="btn-icon btn-wishlist">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <use xlinkHref="#heart" />
                    </svg>
                  </a>
                  <div className="product-content">
                    <h5 className="text-uppercase fs-5 mt-3">
                      <a href="index.html">Cotton off-white shirt</a>
                    </h5>
                    <a
                      href="index.html"
                      className="text-decoration-none"
                      data-after="Add to cart"
                    >
                      <span>$50.00</span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
                  <Link to="/women">
                    <img
                      src={Product9}
                      alt="categories"
                      className="product-image img-fluid"
                    />
                  </Link>
                  <Link to="/women" className="btn-icon btn-wishlist">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <use xlinkHref="#heart" />
                    </svg>
                  </Link>
                  <div className="product-content">
                    <h5 className="text-uppercase fs-5 mt-3">
                      <Link to="/women">Baggy Shirt</Link>
                    </h5>
                    <Link
                      to="/women"
                      className="text-decoration-none"
                      data-after="Add to cart"
                    >
                      <span>$70.00</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-item image-zoom-effect link-effect">
                <div className="image-holder">
                  <Link to="/women">
                    <img
                      src={Product10}
                      alt="categories"
                      className="product-image img-fluid"
                    />
                  </Link>
                  <Link to="/women" className="btn-icon btn-wishlist">
                    <svg width={24} height={24} viewBox="0 0 24 24">
                      <use xlinkHref="#heart" />
                    </svg>
                  </Link>
                  <div className="product-content">
                    <h5 className="text-uppercase fs-5 mt-3">
                      <Link to="/women">Hand Knitted Sweater</Link>
                    </h5>
                    <Link
                      to="/women"
                      className="text-decoration-none"
                      data-after="Add to cart"
                    >
                      <span>$70.00</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="icon-arrow icon-arrow-left">
            <svg width={50} height={50} viewBox="0 0 24 24">
              <use xlinkHref="#arrow-left" />
            </svg>
          </div>
          <div className="icon-arrow icon-arrow-right">
            <svg width={50} height={50} viewBox="0 0 24 24">
              <use xlinkHref="#arrow-right" />
            </svg>
          </div>
        </div>
      </section>

      <section className="video py-5 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="video-content" >
              <div className="video-bg">
                <img
                  src={VideoIm}
                  alt="video"
                  className="video-image img-fluid"
                />
              </div>
              <div className="video-player">
                <a
                  className="youtube"
                  href="https://www.youtube.com/embed/pjtsGzQjFM4"
                >
                  <svg width={24} height={24} viewBox="0 0 24 24">
                    <use xlinkHref="#play" />
                  </svg>
                  <img
                    src={TextPattern}
                    alt="pattern"
                    className="text-rotate"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials py-5 bg-light">
        <div className="section-header text-center mt-5">
          <h3 className="section-title">WE LOVE GOOD COMPLIMENT</h3>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.icon-arrow-left',
            nextEl: '.icon-arrow-right',
          }}
          spaceBetween={15}
          slidesPerView={1}
          loop={false}
          className="testimonial-swiper"
        >
          <SwiperSlide>
            <div className="testimonial-item text-center">
              <blockquote>
                <p>
                  “More than expected crazy soft, flexible and best fitted white
                  simple denim shirt.”
                </p>
                <div className="review-title text-uppercase">casual way</div>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item text-center">
              <blockquote>
                <p>
                  “Best fitted white denim shirt more than expected crazy soft,
                  flexible”
                </p>
                <div className="review-title text-uppercase">uptop</div>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item text-center">
              <blockquote>
                <p>
                  “Best fitted white denim shirt more white denim than expected
                  flexible crazy soft.”
                </p>
                <div className="review-title text-uppercase">Denim craze</div>
              </blockquote>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-item text-center">
              <blockquote>
                <p>
                  “Best fitted white denim shirt more than expected crazy soft,
                  flexible”
                </p>
                <div className="review-title text-uppercase">uptop</div>
              </blockquote>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Arrows for navigation */}
        <div className="icon-arrow icon-arrow-left">
          <svg width={50} height={50} viewBox="0 0 24 24">
            <use xlinkHref="#arrow-left" />
          </svg>
        </div>
        <div className="icon-arrow icon-arrow-right">
          <svg width={50} height={50} viewBox="0 0 24 24">
            <use xlinkHref="#arrow-right" />
          </svg>
        </div>

        <div className="testimonial-swiper-pagination d-flex justify-content-center mb-5" />
      </section>
      
      <section id="related-products" className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <h1
              className="section-title text-center mt-4"
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
                letterSpacing: "2px",
              }}
            >
              You May Also Like
            </h1>
            <div className="col-md-6 text-center">
              <p>
                Discover other products that might interest you. Browse through our curated selection of items that complement your choices.
              </p>
            </div>
          </div>

          <div style={{ padding: "30px" }}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={15}
              slidesPerView={2}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 2,
                },
              }}
              onInit={(swiper) => {
                swiper.update(); // Force Swiper to recalculate dimensions
              }}
              style={{
                width: "100%",
                margin: "auto",
              }}
            >
              <SwiperSlide>
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <Link to="/women">
                      <img
                        src={Product5}
                        alt="product"
                        className="product-image img-fluid"
                      />
                    </Link>
                    <Link to="/women" className="btn-icon btn-wishlist">
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#heart" />
                      </svg>
                    </Link>
                  </div>
                  <div className="product-content py-4">
                    <h5 className="text-uppercase fs-5 mt-3">
                      <Link to="/women">Dark Florish Onepiece</Link>
                    </h5>
                    <span>$95.00</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <Link to="/women">
                      <img
                        src={Product6}
                        alt="product"
                        className="product-image img-fluid"
                      />
                    </Link>
                    <Link to="/women" className="btn-icon btn-wishlist">
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#heart" />
                      </svg>
                    </Link>
                  </div>
                  <div className="product-content py-4">
                    <h5 className="text-uppercase fs-5 mt-3">
                      <Link to="/women">Baggy Shirt</Link>
                    </h5>
                    <span>$55.00</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <Link to="/women">
                      <img
                        src={Product7}
                        alt="product"
                        className="product-image img-fluid"
                      />
                    </Link>
                    <Link to="/women" className="btn-icon btn-wishlist">
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#heart" />
                      </svg>
                    </Link>
                  </div>
                  <div className="product-content py-4">
                    <h5 className="text-uppercase fs-5 mt-3">
                      <Link to="/women">Cotton Off-White Shirt</Link>
                    </h5>
                    <span>$65.00</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <Link to="/women">
                      <img
                        src={Product8}
                        alt="product"
                        className="product-image img-fluid"
                      />
                    </Link>
                    <Link to="/women" className="btn-icon btn-wishlist">
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#heart" />
                      </svg>
                    </Link>
                  </div>
                  <div className="product-content py-4">
                    <h5 className="text-uppercase fs-5 mt-3">
                      <Link to="/women">White Formal</Link>
                    </h5>
                    <span>$50.00</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="product-item image-zoom-effect link-effect">
                  <div className="image-holder">
                    <Link to="/men">
                      <img
                        src={Product1}
                        alt="product"
                        className="product-image img-fluid"
                      />
                    </Link>
                    <Link to="/men" className="btn-icon btn-wishlist">
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#heart" />
                      </svg>
                    </Link>
                  </div>
                  <div className="product-content py-4">
                    <h5 className="text-uppercase fs-5 mt-3">
                      <Link to="/men">Handmade Crop Sweater</Link>
                    </h5>
                    <span>$70.00</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>






      <section className="blog py-5">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
            <h4 className="text-uppercase">Read Blog Posts</h4>
            <a href="index.html" className="btn-link">
              View All
            </a>
          </div>
          <div className="row">
            <div className="col-md-4">
              <article className="post-item">
                <div className="post-image">
                  <Link to="https://myfashionworld.com/fashion/how-to-wear-pastel-clothing-the-right-way/">
                    <img
                      src={Model1}
                      alt="image"
                      className="post-grid-image img-fluid"
                    />
                  </Link>
                </div>
                <div className="post-content d-flex flex-wrap gap-2 my-3">
                  <div className="post-meta text-uppercase fs-6 text-secondary">
                    <span className="post-category">Fashion /</span>
                    <span className="meta-day"> jul 11, 2022</span>
                  </div>
                  <h5 className="post-title text-uppercase">
                    <Link to="https://myfashionworld.com/fashion/how-to-wear-pastel-clothing-the-right-way/">How to look outstanding in pastel</Link>
                  </h5>
                  <p>
                  To stand out in pastel colors, opt for a minimalist style with bold accents or statement pieces, combining soft tones with contrasting details...
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="post-item">
                <div className="post-image">
                  <Link to="https://www.vogue.co.uk/article/spring-summer-2024-fashion-trends">
                    <img
                      src={Model2}
                      alt="image"
                      className="post-grid-image img-fluid"
                    />
                  </Link>
                </div>
                <div className="post-content d-flex flex-wrap gap-2 my-3">
                  <div className="post-meta text-uppercase fs-6 text-secondary">
                    <span className="post-category">Fashion /</span>
                    <span className="meta-day"> jul 11, 2022</span>
                  </div>
                  <h5 className="post-title text-uppercase">
                    <Link to="/https://www.vogue.co.uk/article/spring-summer-2024-fashion-trends">Top 10 fashion trend for summer</Link>
                  </h5>
                  <p>
                  Summer fashion embraces pastels, oversized fits, sustainable fabrics, bold prints, and raffia accessories for a chic, comfortable, and eco-conscious look.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="post-item">
                <div className="post-image">
                  <Link to="https://www.reckontalk.com/weird-and-funny-fashion-show-trends-part-1/">
                    <img
                      src={Model3}
                      alt="image"
                      className="post-grid-image img-fluid"
                    />
                  </Link>
                </div>
                <div className="post-content d-flex flex-wrap gap-2 my-3">
                  <div className="post-meta text-uppercase fs-6 text-secondary">
                    <span className="post-category">Fashion /</span>
                    <span className="meta-day"> jul 11, 2022</span>
                  </div>
                  <h5 className="post-title text-uppercase">
                    <Link to="https://www.reckontalk.com/weird-and-funny-fashion-show-trends-part-1/">Crazy fashion with unique moment</Link>
                  </h5>
                  <p>
                  Crazy and weird fashion pushes boundaries with oversized silhouettes, clashing patterns, and futuristic accessories for an avant-garde, unconventional look...
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="logo-bar py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="logo-content d-flex flex-wrap justify-content-between">
              <img
                src={Logo1}
                alt="logo"
                className="logo-image img-fluid"
              />
              <img
                src={Logo2}
                alt="logo"
                className="logo-image img-fluid"
              />
              <img
                src={Logo3}
                alt="logo"
                className="logo-image img-fluid"
              />
              <img
                src={Logo4}
                alt="logo"
                className="logo-image img-fluid"
              />
              <img
                src={Logo5}
                alt="logo"
                className="logo-image img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="newsletter bg-light"
        style={{ background: `url(${Pattern}) no-repeat` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 py-5 my-5">
              <div className="subscribe-header text-center pb-3">
                <h3 className="section-title text-uppercase">
                  Sign Up for our newsletter
                </h3>
              </div>
              <form id="form" className="d-flex flex-wrap gap-2">
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email Addresss"
                  className="form-control form-control-lg"
                />
                <button className="btn btn-dark btn-lg text-uppercase w-100">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="instagram position-relative">
        <div className="d-flex justify-content-center w-100 position-absolute bottom-0 z-1">
          <a
            href="https://www.instagram.com/templatesjungle/"
            className="btn btn-dark px-5"
          >
            Follow us on Instagram
          </a>
        </div>
        <div className="row g-0">
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a href="https://www.instagram.com/templatesjungle/" target="_blank">
                <img
                  src={Insta1}
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a href="https://www.instagram.com/templatesjungle/" target="_blank">
                <img
                  src={Insta2}
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a href="https://www.instagram.com/templatesjungle/" target="_blank">
                <img
                  src={Insta3}
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a href="https://www.instagram.com/templatesjungle/" target="_blank">
                <img
                  src={Insta4}
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a href="https://www.instagram.com/templatesjungle/" target="_blank">
                <img
                  src={Insta5}
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <div className="insta-item">
              <a href="https://www.instagram.com/templatesjungle/" target="_blank">
                <img
                  src={Insta6}
                  alt="instagram"
                  className="insta-image img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="mt-5">
        <div className="container">
          <div className="row d-flex flex-wrap justify-content-between py-5">
            <div className="col-md-3 col-sm-6">
              <div className="footer-menu footer-menu-001">
                <div className="footer-intro mb-4">
                  <a href="index.html">
                    <img src={MainLogo} alt="logo" />
                  </a>
                </div>
                <p>
                  Kaira is a contemporary clothing brand that blends style, comfort, and sophistication to create timeless fashion pieces. Our designs are crafted to empower individuals with a perfect mix of elegance and modern flair.
                </p>
                <div className="social-links">
                  <ul className="list-unstyled d-flex flex-wrap gap-3">
                    <li>
                      <a href="#" className="text-secondary">
                        <svg width={24} height={24} viewBox="0 0 24 24">
                          <use xlinkHref="#facebook" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-secondary">
                        <svg width={24} height={24} viewBox="0 0 24 24">
                          <use xlinkHref="#twitter" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-secondary">
                        <svg width={24} height={24} viewBox="0 0 24 24">
                          <use xlinkHref="#youtube" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-secondary">
                        <svg width={24} height={24} viewBox="0 0 24 24">
                          <use xlinkHref="#pinterest" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-secondary">
                        <svg width={24} height={24} viewBox="0 0 24 24">
                          <use xlinkHref="#instagram" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-menu footer-menu-002">
                <h5 className="widget-title text-uppercase mb-4">Quick Links</h5>
                <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
                  <li className="menu-item">
                    <Link to="/" className="item-anchor">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/about" className="item-anchor">
                      About
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/products" className="item-anchor">
                      Products
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/login" className="item-anchor">
                      Login
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/cart" className="item-anchor">
                      Cart
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-menu footer-menu-003">
                <h5 className="widget-title text-uppercase mb-4">
                  Help &amp; Info
                </h5>
                <ul className="menu-list list-unstyled text-uppercase border-animation-left fs-6">
                  <li className="menu-item">
                    <a href="#" className="item-anchor">
                      Contact Us
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="item-anchor">
                      Find us easy
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="index.html" className="item-anchor">
                      Faqs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-menu footer-menu-004 border-animation-left">
                <h5 className="widget-title text-uppercase mb-4">Contact Us</h5>
                <p>
                  Do you have any questions or suggestions?{" "}
                  <a href="mailto:contact@yourcompany.com" className="item-anchor">
                    kaira@gmail.com
                  </a>
                </p>
                <p>
                  Do you need support? Give us a call.{" "}
                  <a href="tel:+43 720 11 52 78" className="item-anchor">
                    +43 720 11 52 78
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex flex-wrap">
                <div className="shipping">
                  <span>We ship with:</span>
                  <img src={Arct} alt="icon" />
                  <img src={Logo} alt="icon" />
                </div>
                <div className="payment-option">
                  <span>Payment Option:</span>
                  <img src={Visa} alt="card" />
                  <img src={Paypal} alt="card" />
                  <img src={Master} alt="card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Home
