import React from "react";
import { descriptionCard } from "Src/store/mock";
const cardInfo = ({ title }) => {
  return (
    <div className="mx-10">
      <h2
        style={{ fontSize: "3rem" }}
        className="text-green-200 mt-10 border-b-2 border-green-200 mx-8 pb-6 font-extrabold ml-6 text-center my-10"
      >
        {title}
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {descriptionCard.map((data) => {
          return (
            <div
              key={data.id}
              className="sm:mt-2 md:mt-0 w-full h-auto bg-white text-gray-500 hover:text-green-200 hover:shadow-2xl p-6 rounded-lg flex flex-col justify-between "
            >
              <div className="flex item-center justify-center w-full">
                {data.icon}
              </div>
              <h2 className="text-2xl my-2 text-center">{data.title}</h2>
              <p className="text-gray-700">{data.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default cardInfo;
