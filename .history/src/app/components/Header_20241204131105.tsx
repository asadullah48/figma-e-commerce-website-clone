import Link from "next/link";

export default function Header(){
    return(
      <div  className="w-full sm:h-[90px] md:h-[80px] flex justify-center items-center border-b-2">
        <div className="w-[80%] h-full flex sm:flex-col md:flex-row justify-between items-center">
         {/* Left Side */}
         <div className="">
            {/* Logo */}
            <h1 className="text-3xl font-bold">Exclusive</h1>
         </div>

        {/* Right Side */}
         <div className="">
            <ul className="flex gap-x-5 mr-4 sm:mb-4 md:mb-0">
            <li>
                <Link className="hover:underline" href={"/"}>Home</Link>
            </li>
            <li>
                <Link className="hover:underline" href={"/"}>Contact</Link>
            </li>
            <li>
                <Link className="hover:underline" href={"/"}>About</Link>
            </li>
            <li>
                <Link className="hover:underline" href={"/"}>Sign Up</Link>
            </li>
            </ul>
         </div>
      
      </div>
      </div>
    )
  }