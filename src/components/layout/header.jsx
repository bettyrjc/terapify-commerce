import React from "react";
import Link from "next/link";
import Image from "next/image";
// import shoppingCar from "Src/assets/shoppingCar.png";
const header = ({ shoppingCarInHeader = [] }) => {
  const productsInCar =
    process.browser && JSON.parse(localStorage.getItem("productsInCar"));

  return (
    <div className="h-24 w-full bg-green-500 flex justify-between items-center text-white pl-4 sm:pl-4 md:px-8 ">
      <Link href="/">
        <a className="text-3xl font-bold text-white">Terapify</a>
      </Link>
      <Link
        className="flex justify-between items-center w-24"
        href="/shoppingCar"
      >
        <a className="w-14 h-14 hover:bg-green-700 p-2 rounded-full cursor-pointer relative">
          {/* <Image
            // src={shoppingCar}
            alt="shoppingcart"
            className="w-full h-full"
          /> */}
          hola
          <div className="absolute top-0 right-0 bg-red-500 w-5 h-5 rounded-full">
            <p className="flex item-center justify-center text-sm">
              {/* {productsInCar?.length ? productsInCar.length : "0" } */}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default header;
