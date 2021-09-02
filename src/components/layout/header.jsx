import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  IoCartOutline,
  IoHeartOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

const header = ({ shoppingCarInHeader = [] }) => {
  const productsInCar =
    process.browser && JSON.parse(localStorage.getItem("productsInCar"));

  return (
    <div className="h-24 w-full bg-green-500 flex justify-between items-center text-white pl-4 sm:pl-4 md:px-8 ">
      <Link href="/">
        <a className="text-3xl font-bold text-white">Terapify</a>
      </Link>
      <div className="flex">
        <Link className="flex justify-between items-center w-24 ml-2" href="/#">
          <a className="w-10 h-10 p-2 rounded-full cursor-pointer relative">
            <IoCartOutline className="text-3xl text-white hover:text-green-100" />
          </a>
        </Link>
        <Link className="flex justify-between items-center w-24" href="/#">
          <a className="w-10 h-10 p-2 rounded-full cursor-pointer relative">
            <IoHeartOutline className="text-3xl text-white hover:text-green-100" />
          </a>
        </Link>
        <Link className="flex justify-between items-center w-24" href="/#">
          <a className="w-10 h-10 p-2 rounded-full cursor-pointer relative">
            <IoPersonCircleOutline className="text-3xl text-white hover:text-green-100" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default header;
