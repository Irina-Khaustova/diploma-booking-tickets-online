import MainPageHeader from "../components/mainPaige/MainPageHeader";
import AboutUs from "../components/mainPaige/AboutUs";
import HowItsWorks from "../components/mainPaige/HowItsWorks";
import Footer from "../components/Footer";
import Reviews from "../components/mainPaige/Reviews";
//import { useDispatch } from "react-redux";
//import { useEffect } from "react";

export default function MainPage() {
  //const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(putInputValue(""));
  //   // eslint-disable-next-line
  // }, []);
  return (
    <>
      <MainPageHeader/>
      <AboutUs/>
      <HowItsWorks/>
      <Reviews/>
      <Footer/>
    </>
  );
}
