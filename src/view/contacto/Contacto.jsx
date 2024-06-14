import { FaPhoneAlt } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";





const Contacto = () => {

    return (
        <section id='contacto'>
            <div className="">
                {/* header section */}
                <div className="text-center mb-10 max-w-[600px] mx-5 sm:mx-auto my-5">
                <h1 className="text-3xl font-bold ">Contacto</h1>
                <p className="text-xs text-gray-500 mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam impedit natus nobis hic odit consectetur at! Odio facilis, ducimus accusamus, rerum incidunt exercitationem, officiis omnis fuga fugiat temporibus ut?</p>
                </div>

               {/* Body Section */}
            <div className="bg-black sm:w-[90%] h-[400px] rounded-lg flex justify-center mx-auto my-5" data-aos="zoom-in">
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto items-center lg:gap-16">
                <div className="grid grid-cols-1 gap-5">
                    <p className="text-white"><FaPhoneAlt className="text-lime"/> +549 1145454545</p>
                    <p className="text-white"><FaVoicemail className="text-lime" /> correo@gmail.com</p>
                    <p className="text-white"><FaLocationArrow className="text-lime" /> Quilmes, Bs As, Argentina.</p>
                </div>
                <div className="my-5">
                <iframe className="mx-auto md:h-[250px] lg:w-[500px]" width="350" height="220" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=quilmes,%20Buenos%20Aires,%20Argentina+(DAVE)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
                </div>
                </div>
            </div>   
            </div>
        </section>
    )

}


export default Contacto;