import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export default function Footer(){
    return (
        <footer className="sm:h-full md:h-[310px] bg-black">
        <div className=" flex sm:flex-col md:flex-row text-white mt-16 justify-evenly sm:h-full md:h-[280px] items-start sm:pt-4 md:pt-12 sm:pb-4 md:pb-0 sm:pl-4 md:pl-2 lg:pl-0 sm:gap-y-5 md:gap-y-0 ">
            <div className="space-y-2">
                <h1 className="text-2xl font-bold">Exclusive</h1>
                <ul className="space-y-2">
                    <li>Subscribe</li>
                    <li>Get 10% off your first order</li>
                    <li>Subscribe</li>
                    <li><input type="text" className="text-white bg-black rounded-md border-white"/></li>
                </ul>
            </div>
            <div className="space-y-2">
            <h1 className="text-2xl font-bold">Support</h1>
                <ul className="space-y-2">
                    <li className="w-48">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                    <li>exclusive@gmail.com</li>
                    <li>+88015-88888-9999</li>
                </ul>
            </div>
            <div className="space-y-2">
            <h1 className="text-2xl font-bold">Account</h1>
                <ul className="space-y-2">
                    <li>My Account</li>
                    <li>Login</li>
                    <li>Cart</li>
                    <li>Wishlist</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div className="space-y-2 md:ml-4 lg:ml-0">
            <h1 className="text-2xl font-bold">Quick Link</h1>
                <ul className="space-y-2">
                    <li>Privacy Policy</li>
                    <li>Terms Of Use</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="space-y-2 md:ml-4 lg:ml-0">
            <h1 className="text-2xl font-bold">Download App</h1>
                <ul className="space-y-2">
                    <li>Save $3 with App New User Only</li>
                    <li></li>
                    <li></li>
                    <li className="">
                        <div className="flex flex-row gap-2">
                            <span className=""><FaFacebookF width={20} height={20}/></span>
                            <span><CiTwitter width={20} height={20}/></span>
                            <span><FaInstagram width={20} height={20}/></span>
                            <span className="bg-black"><Link href="https://www.linkedin.com/in/daniyal-inam/"><FaLinkedinIn width={20} height={20}/></Link></span>
                        </div>
                    </li>
                </ul>
            </div>
            

        </div>
        <div className="flex md:justify-center sm:pl-4 md:pl-0">
            <h2 className="text-gray-500 sm:pb-8 md:pb-0">Copyright Rimel 2022. All right reserved</h2>
        </div>


        </footer>
    )
}