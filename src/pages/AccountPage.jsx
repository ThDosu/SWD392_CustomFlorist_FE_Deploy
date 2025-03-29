import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";

import Breadcrumb from "../components/Breadcrumb";
import FooterTwo from "../components/FooterTwo";
import BottomFooter from "../components/BottomFooter";
import ShippingOne from "../components/ShippingOne";
import Login from "../components/Login";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";


const AccountPage = () => {



  return (
    <>
      {/* ColorInit */}
      <ColorInit color={false} />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#299E60" />

      {/* Preloader */}
      <Preloader />

      {/* HeaderOne
 */}
      {/* <HeaderOne
 category={true} /> */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Đăng nhập"} />

      {/* Account */}
      <Login />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default AccountPage;
