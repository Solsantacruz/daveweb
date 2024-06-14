
import { FaInstagram } from "react-icons/fa";




const FooterView = () => {

    return (
        <footer className="bg-black py-20 border-t-4 border-lime rounded-t-lg">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-col space-y-6 lg:space-y-0 items-center justify-center lg:gap-4">
                    <div className="flex flex-row lg:flex-row gap-5">
                    < FaInstagram className="text-lime text-2xl"/>
                    </div>
                    <p className=" text-primary text-white text-xs">&copy; 2024 Eliana Santa Cruz. Todos los derechos reservados.</p>
                </div>
                
            </div>
            
        </footer>
    )

}

export default FooterView;