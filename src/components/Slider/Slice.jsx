import { slider } from "../../data";
import Slider from 'react-slick';




const Slice = () => {

    let setting = {
        dots:false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className=" w-[95%] h-[200px] lg:h-[500px] mx-auto overflow-hidden"> {/* Contenedor con tamaño fijo */}
            <Slider {...setting}>
                {slider.map((items, index) => {
                    const { image } = items;
                    return (
                        <div key={index} className="flex justify-center items-center h-full">
                            <img className="w-full h-full object-cover" src={image} alt="imagen" /> {/* Tamaño fijo y cubre el contenedor */}
                        </div>
                    );
                })}
            </Slider>
        </div>
    )
}



export default Slice;