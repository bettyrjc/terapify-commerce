import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  let router = useRouter();
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

        <div className="h-fullpr-4">
          <ul className="mr-4">
            {router.locales.map((locale) => (
              <li className="mt-2 text-base  w-24 " key="locale">
                <Link href={router.asPath} locale={locale}>
                  <a>{locale}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center mt-4">Copyright 2021. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
