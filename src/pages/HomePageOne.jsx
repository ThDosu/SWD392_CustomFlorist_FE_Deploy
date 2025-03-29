import React, { useEffect, useState } from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import BannerOne from "../components/BannerOne";
import FeatureOne from "../components/FeatureOne";
import PromotionalOne from "../components/PromotionalOne";
import FlashSalesOne from "../components/FlashSalesOne";
import ProductListOne from "../components/ProductListOne";
import OfferOne from "../components/OfferOne";
import RecommendedOne from "../components/RecommendedOne";
import HotDealsOne from "../components/HotDealsOne";
//import TopVendorsOne from "../components/TopVendorsOne";
import BestSellsOne from "../components/BestSellsOne";
import DeliveryOne from "../components/DeliveryOne";
//import OrganicOne from "../components/OrganicOne";
import ShortProductOne from "../components/ShortProductOne";
//import BrandOne from "../components/BrandOne";
import NewArrivalOne from "../components/NewArrivalOne";
import ShippingOne from "../components/ShippingOne";
import NewsletterOne from "../components/NewsletterOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
import { getCatagory, getProduct } from "../api/product";
import { ToastContainer } from "react-toastify";
const HomePageOne = () => {
  const token = localStorage.getItem("tokenFlower")
  const [category, setCategory]= useState({content:[]}) 
  const [products, setProducts]= useState([]) 
  
  const fetchCatagory = async () => {
    try {
        const response = await getCatagory();
        if (response.status === "OK") {
            setCategory(response.data);
        } else {
            console.error("Lỗi: API trả về trạng thái không hợp lệ", response);
        }
    } catch (error) {
        console.error("Lỗi khi gọi API getCatagory:", error);
    }
};
const fetchProduct = async () => {
  try {
      const response = await getProduct();
      console.log('response', response)
      if (response.status ==="OK") {
          setProducts(response.data);
      } else {
          console.error("Lỗi: API trả về trạng thái không hợp lệ", response);
      }
  } catch (error) {
      console.error("Lỗi khi gọi API getCatagory:", error);
  }
};
   useEffect(()=>{
    fetchProduct()
    fetchCatagory();
   },[token])
  return (
    
    <>
  <ToastContainer/>
      {/* Preloader */}
      <Preloader />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />

      {/* FeatureOne */}
      <FeatureOne category={category}/>

      {/* PromotionalOne */}
      <PromotionalOne  />

      {/* FlashSalesOne */}
      {/* <FlashSalesOne /> */}

      {/* ProductListOne */}
      <ProductListOne products={products}/>

      {/* OfferOne */}
      <OfferOne />

      {/* RecommendedOne */}
      {/* <RecommendedOne /> */}

      {/* HotDealsOne */}
      {/* <HotDealsOne /> */}

      {/* BestSellsOne */}
      <BestSellsOne />

      {/* DeliveryOne */}
      <DeliveryOne />


      {/* ShortProductOne */}
      <ShortProductOne />


      {/* NewArrivalOne */}
      <NewArrivalOne />

      {/* ShippingOne */}
      <ShippingOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterOne */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default HomePageOne;
