import Image from "next/image";

export default function Product() {
  return (
    <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center sm:mt-10 md:mt-10">
      <div className="sm:w-full md:w-full lg:w-[80%] h-full">
        {/* Heading */}
        <div className="sm:pl-5 md:pl-0">
          <span className="border-l-8 border-red-500 text-red-500 font-bold">
            Today's`&apos`
          </span>
         <div className="flex justify-between">
         <h2 className="text-4xl font-bold mt-4">Best Selling Products</h2>
         <button className="sm:hidden md:block px-12 text-white bg-red-500 rounded-md">View All</button>
         </div>
        </div>

        {/* Products */}
        {/* Images */}
        <div className="flex sm:flex-col md:flex-row sm:items-center justify-between mt-7 sm:space-y-6 md:space-y-0">
          <div>
            <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
              <Image
                src="/bestsale/coat.png"
                alt="Coat"
                width={150}
                height={100}
                className="object-cover"
              ></Image>
            </div>

            {/*  */}
            <div className="flex flex-col">
              <span className="font-bold pt-3">The north coat</span>
              <span className="font-bold text-red-500">$260 <span className="text-gray-400 ml-2 line-through font-bold">$360</span></span>
            </div>
          </div>
          <div>
          <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
            <Image
              src="/bestsale/bag.png"
              alt="Bag"
              width={150}
              height={100}
              className="object-cover"
            ></Image>
          </div>

          {/*  */}
          <div className="flex flex-col">
              <span className="font-bold pt-3">Gucci duffle bag</span>
              <span className="font-bold text-red-500">$960 <span className="text-gray-400 ml-2 line-through font-bold">$1160</span></span>
            </div>

          </div>
          
          <div>
          <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
            <Image
              src="/bestsale/cpucooler.png"
              alt="RGB CPU Cooler"
              width={150}
              height={100}
              className="object-cover"
            ></Image>
          </div>

          {/*  */}
          <div className="flex flex-col">
              <span className="font-bold pt-3">RGB liquid CPU Cooler</span>
              <span className="font-bold text-red-500">$160 <span className="text-gray-400 ml-2 line-through font-bold">$170</span></span>
            </div>

          </div>

          <div>
          <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
            <Image
              src="/bestsale/bookself.png"
              alt="Small BookSelf"
              width={150}
              height={100}
              className="object-cover"
            ></Image>
          </div>

          {/*  */}
          <div className="flex flex-col">
              <span className="font-bold pt-3">Small BookSelf </span>
              <span className="font-bold text-red-500">$360 <span className="text-gray-400 ml-2 line-through font-bold"></span></span>
            </div>

          </div>


        </div>

        <button className="sm:block md:hidden sm:px-5 md:px-12 sm:py-2 md:py-0 sm:mt-10 md:mt-0 text-white bg-red-500 rounded-md sm:ml-[7%] md:ml-0">View All</button>

      </div>
    </div>
  );
}