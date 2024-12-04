import Image from "next/image";
import { FaApple } from "react-icons/fa";


export default function Hero(){
    return(
        <div className="w-full sm:h-[195px] md:h-[244px] flex justify-center mt-8">
            <div className="bg- sm:w-full md:h-full lg:w-[80%] h-full flex justify-between">

                {/* Left Side */}
                <div className="ml-8 sm:mt-4 md:mt-10 text-white space-y-3">
                    <div className="flex justify-center items-center">
                        <span ><FaApple className="text-[32px] text-white" /></span>
                        <span className="ml-4">iPhone 14 Series</span>
                    </div>

                    <div className="w-[200px] space-y-3">
                        <h1 className="text-3xl font-sans font-bold ml-5">Up to 10% off Voucher</h1>
                        <button className="font-bold underline underline-offset-8 ml-5">Shop Now</button>
                    </div>
                </div>

                {/* Right Side */}
                <div>
                    <Image src="/images/hero.png" alt="Hero Image" width={350} height={200} className="mt-3 sm:w-64 md:w-[350px]"></Image>

                </div>

            </div>
        </div>
    )
}