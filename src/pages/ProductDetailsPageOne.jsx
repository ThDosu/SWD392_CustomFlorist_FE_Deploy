import React, { useEffect, useState } from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import ProductDetailsOne from "../components/ProductDetailsOne";
import NewArrivalTwo from "../components/NewArrivalTwo";
import ShippingOne from "../components/ShippingOne";
import NewsletterOne from "../components/NewsletterOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import BreadcrumbTwo from './../components/BreadcrumbTwo';
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
import {  useSearchParams } from "react-router-dom";
import { getProductById } from "../api/product";
import { productFake } from "../fakedata/fakeProduct";
import { ToastContainer } from "react-toastify";

const ProductDetailsPageOne = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  console.log("productId",productId)

  const [productDetail,setProductDetail] = useState({})
  const fetchProduct = async(productId) =>{
    try{
      const response = await getProductById(productId);
      if(response.status === "OK"){
        setProductDetail(response.data);
      }else{
        console.log('productFake', productFake)
        const response = productFake.find((item) => item.id === Number(productId));
        setProductDetail(response);
      }
      
  
    }catch{
      console.log('productFake', productFake)
      const response = productFake.find((item) => item.id === Number(productId));
      console.log('ressasasponse', response)
        setProductDetail(response);
    }
    
  }
  console.log('productDetail', productDetail)
  useEffect(()=>{
    fetchProduct(productId)
  },[productId])
  return (
    <>
 <ToastContainer/>
      {/* Preloader */}
      <Preloader />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <BreadcrumbTwo title={"Product Details"} />

      {/* ProductDetailsOne */}
      <ProductDetailsOne productDetail={productDetail} />

      {/* NewArrivalTwo */}
      {/* <NewArrivalTwo /> */}

      {/* ShippingOne */}
      <ShippingOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterTwo */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />



    </>
  );
};

export default ProductDetailsPageOne;
