import React, { useEffect, useState } from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import Breadcrumb from "../components/Breadcrumb";
import ShopSection from "../components/ShopSection";
import ShippingOne from "../components/ShippingOne";
import ShippingTwo from "../components/ShippingTwo";
import FooterTwo from "../components/FooterTwo";
import ColorInit from "../helper/ColorInit";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
import { getCatagory, getProduct } from "../api/product";

const ShopPage = () => {
    const [category, setCategory]= useState({content:[]}) 
    const [products, setProducts]= useState([]) 
    const token = localStorage.getItem("tokenFlower")
    const fetchCatagory = async () => {
      try {
          const response = await getCatagory();
          console.log('response', response)
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
      if (response.status === "OK") {
          setProducts(response.data);
      } else {
          console.error("Lỗi: API trả về trạng thái không hợp lệ", response);
      }
  } catch (error) {
      console.error("Lỗi khi gọi API getCatagory:", error);
  }
};
   useEffect(()=>{
    fetchCatagory()
    fetchProduct()
   },[token])
  return (
    <>
    <ToastContainer/>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      {/* <HeaderTwo category={true} /> */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Shop"} />

      {/* ShopSection */}
      <ShopSection category={category} product={products}/>

      {/* ShippingTwo */}
      {/* <ShippingTwo /> */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />


    </>
  );
};

export default ShopPage;
