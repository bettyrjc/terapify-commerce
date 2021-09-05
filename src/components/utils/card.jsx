import React from "react";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";

const card = ({ data, setProductsInShoppingCar }) => {
  return (
    <>
      <div className="sm:mt-2 md:mt-0 w-full bg-white hover:shadow-lg p-4 rounded-lg flex flex-col justify-between border-2 border-gray-200 ">
        <div>
          <div className="px-4 pt-4 pb-2 flex item-center justify-center">
            <div className="w-32 h-32">
              <img
                src={`${data.image}`}
                alt={data.title}
                className="w-full h-full bg-cover"
              />
            </div>
          </div>
          <h2 className="text-base font-bold text-gray-800">{data.title}</h2>
          <div className="flex my-1 text-sm">
            <p className="mr-2 text-gray-800">Price:</p>
            <p className="font-bold text-sm text-blue-200 text-green-200">
              {data.price}$
            </p>
          </div>
          <div className="flex mb-1 text-sm">
            <p className="mr-2 text-gray-800">Rate:</p>
            <p className="font-bold text-sm text-blue-200 text-gray-800">
              {data.rating.rate} / 5
            </p>
          </div>
          <div className="flex mb-1 text-sm">
            <p className="mr-2 text-gray-800">In stock:</p>
            <p className="font-bold text-sm text-blue-200 text-gray-800">
              {data.rating.count} / 5
            </p>
          </div>
        </div>

        <div className="flex justify-end items-center cursor-pointer">
          <IoCartOutline className="text-3xl text-green-500 hover:text-green-100 mr-4" />
          <IoHeartOutline className="text-3xl text-green-500 hover:text-green-100" />
        </div>
      </div>
    </>
  );
};

export default card;
