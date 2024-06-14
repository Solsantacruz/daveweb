import React from "react";
import Slice from "../../components/Slider/Slice";
import Parrafo from "../../components/Parrafo/Parrafo";
import FooterView from "../Footer/Footer";
import PreviewProducts from "../Productos/PreviewProducts";
import AOS from "aos";
import "aos/dist/aos.css";
import Contacto from "../contacto/Contacto";


const HomePage = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

    return (
        <>
        <Slice />
        
        <Parrafo />
        <PreviewProducts handleOrderPopup={handleOrderPopup}/>
        <Contacto handleOrderPopup={handleOrderPopup}/>
        <FooterView />
        
        </>
    )

}


export default HomePage;