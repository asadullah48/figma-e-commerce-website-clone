import Image from "next/image";

export default function Sale() {
  return (
    <main>
    <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10">
      <div className="sm:w-full md:w-full lg:w-[80%] h-full">
        {/* Heading */}
        <div className="sm:pl-5 md:pl-0">
          <span className="border-l-8 border-red-500 text-red-500 font-bold">
            Today's
          </span>
          <h2 className="text-4xl font-bold mt-4">Flash Sales</h2>
        </div>

        {/* Products */}
        {/* Images */}
        <div className="flex sm:flex-col md:flex-row sm:items-center justify-between  mt-7 sm:space-y-6 md:space-y-0">
          <div>
            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
              <Image
                src="/sale/gamepod.png"
                alt="Gamepod"
                width={150}
                height={100}
                className="object-cover"
              ></Image>
            </div>

            {/*  */}
            <div className="flex flex-col">
              <span className="font-bold pt-3">HAVIT HV-G92 Gamepad</span>
              <span className="font-bold text-red-500">$120 <span className="text-gray-400 ml-2 line-through font-bold">$160</span></span>
            </div>
          </div>
          <div>
          <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
            <Image
              src="/sale/keyboard.png"
              alt="keyboard"
              width={150}
              height={100}
              className="object-cover"
            ></Image>
          </div>

          {/*  */}
          <div className="flex flex-col">
              <span className="font-bold pt-3">AK-900 Wired Keyboard</span>
              <span className="font-bold text-red-500">$960 <span className="text-gray-400 ml-2 line-through font-bold">$1160</span></span>
            </div>

          </div>
          
          <div>
          <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
            <Image
              src="/sale/lcd.png"
              alt="LCD"
              width={150}
              height={100}
              className="object-cover"
            ></Image>
          </div>

          {/*  */}
          <div className="flex flex-col">
              <span className="font-bold pt-3">IPS LCD Gaming Monitor</span>
              <span className="font-bold text-red-500">$370 <span className="text-gray-400 ml-2 line-through font-bold">$400</span></span>
            </div>

          </div>

          <div>
          <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
            <Image
              src="/sale/chair.png"
              alt="Chair"
              width={150}
              height={100}
              className="object-cover"
            ></Image>
          </div>

          {/*  */}
          <div className="flex flex-col">
              <span className="font-bold pt-3">S-Series Comfort Chair </span>
              <span className="font-bold text-red-500">$375 <span className="text-gray-400 ml-2 line-through font-bold">$400</span></span>
            </div>

          </div>


        </div>
      </div>
    </div>

    <button className="sm:mt-12 md:mt-20 sm:ml-[40px] md:ml-[40%] lg:ml-[45%] py-2 px-3 text-white bg-red-500 rounded-md">View All Products</button>
</main>
  );
}