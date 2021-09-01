import React from "react";
import Link from "next/link";

const footer = () => {
  return (
    <div className="gradient h-24 w-full px-4 py-8">
      <div className="sm:flex item-center justify-between">
        <div className="h-full">
          <Link href="#">
            <a className="text-3xl font-bold text-green-700">Terapify</a>
          </Link>

          <p className="mt-5 mr-5 w-1/2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            magnam nesciunt ipsa alias quia aliquam beatae, dignissimos, quo
            vero quae impedit unde placeat odit consectetur mollitia? Eaque
            neque iure
          </p>
        </div>

        <div className="h-full pr-4">
          <ul>
            <li className="mt-2">
              <Link href="#">
                <a>Home</a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a>Headphones</a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a>Speakers</a>
              </Link>
            </li>
            <li className="mt-2">
              <Link href="#">
                <a>Earphones</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-4">Copyright 2021. All Rights Reserved</p>
    </div>
  );
};

export default footer;
