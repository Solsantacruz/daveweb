import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes} from "react-icons/fa";
import { CiMenuFries} from "react-icons/ci";





const NavBar = () => {

    const [showMenu, setShowMenu] = useState();
    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    const content = <>
    <div className="lg:hidden block absolute top-16 w-full opacity-90 left-0 right-0 transition bg-lime z-50">
      <ul className="text-center text-xl p-20">
                        <Link spy={true} smooth={true} to="Home">
                        <li className="my-4 py-4 border-b border-black hover:font-bold">
                            Home
                        </li>
                        </Link>
                        <Link spy={true} smooth={true} to="About">
                        <li className="my-4 py-4 border-b border-black hover:font-bold ">
                            About
                        </li>
                        </Link>
                        <a spy={true} smooth={true} href="#contacto">
                        <li className="my-4 py-4 border-b border-black hover:font-bold">
                            Contacto
                        </li>
                        </a>
                    </ul>
                </div>
    </>
    return (
        <nav className="">
            <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 ">
            <div className="flex items-center flex-1">
                <span className="text-3lx font-bold">DAVE</span>
            </div>
            <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <Link spy={true} smooth={true} to="Home">
                        <li className="hover:font-medium transition border-b-2 hover:border-lime cursor-pointer">
                            Home
                        </li>
                        </Link>
                        <Link spy={true} smooth={true} to="About">
                        <li className="hover:font-medium transition border-b-2 hover:border-lime cursor-pointer">
                            About
                        </li>
                        </Link>
                        <a spy={true} smooth={true} href="#contacto">
                        <li className="hover:font-medium transition border-b-2 hover:border-lime cursor-pointer">
                            Contacto
                        </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div>
                {showMenu && content}
            </div>
            <button className="block md:hidden transtion" onClick={handleClick}>
                {showMenu ? <FaTimes /> : <CiMenuFries /> }
            </button>
            </div>
        </nav>
    )

}

export default NavBar;