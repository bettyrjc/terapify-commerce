import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useCallback } from "react";
import Carousel, { consts } from "react-elastic-carousel";

import Main from "Components/Main";
import Banner from "Components/Banner";
import Card from "Components/utils/card";
import CardInfo from "Components/utils/cardInfo";
import CarouselComponent from "Src/components/CarouselComponent";
import Loader from "react-loader-spinner";

import { getProducts, getProductsByCategory } from "Src/store/actions/products";
import useTranslation from "next-translate/useTranslation";

import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

const Component = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    {children}
  </div>
);
const BREAKPOINTS = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const Home = ({ products, getProducts, getProductsByCategory }) => {
  let { t } = useTranslation();
  const title = t("common:titleSlider");
  const titleCategories = t("common:titleCategories");
  const jewelry = t("common:jewelry");
  const women = t("common:women");
  const electronic = t("common:electronic");
  const benefits = t("common:benefits");
  const selled = t("common:selled");

  useEffect(() => {
    getProducts();
    getProductsByCategory("jewelery");
    getProductsByCategory("women's clothing");
    getProductsByCategory("electronics");
  }, [products.loading]);

  const myArrow = useCallback(({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <IoChevronBackCircleOutline size={40} color="#57CC99" />
      ) : (
        <IoChevronForwardCircleOutline size={40} color="#57CC99" />
      );
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }, []);

  function renderProducts(products) {
    let arrayElements = [];

    for (let i = 0; i < products.length; i++) {
      if (i % 3 == 2 || i === products.length - 1) {
        arrayElements.push(
          <Component>
            <Card data={products[i - 2]} />
            <Card data={products[i - 1]} />
            <Card data={products[i]} />
          </Component>
        );
      }
    }

    return (
      <Carousel renderArrow={myArrow} breakPoints={BREAKPOINTS}>
        {arrayElements}
      </Carousel>
    );
  }

  return (
    <Main>
      {products.loading ? (
        <div className="flex justify-center mt-4 items-center h-screen">
          <Loader
            type="Puff"
            color="#80ED99"
            height={200}
            width={200}
          />
        </div>
      ) : (
        <div className="h-full">
          <Banner />
          <div
            className="grid grid-cols-1 sm:grid-cols-2 px-24 "
            style={{ marginTop: "-30rem", marginBottom: "10rem" }}
          >
            <div>
              <p className="leading-tight text-white font-black xs:text-2xl md:text-5xl capitalize">
                {title}
              </p>

              <p className="text-white my-8 font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>

            <CarouselComponent />
          </div>
          <div className="mx-8 mt-20">
            <h1 className="text-green-700 text-3xl ml-4 mb-4 font-bold">
              {selled}
            </h1>
            {renderProducts(products?.products)}
          </div>
          <CardInfo title={benefits} />
          <h1
            style={{ fontSize: "3rem" }}
            className="text-green-200 mt-10 border-b-2 border-green-200 mx-8 pb-6 font-extrabold ml-6 text-center my-10"
          >
            {titleCategories}
          </h1>
          <div className="mx-8 mt-4">
            <h1 className="text-green-700 text-2xl ml-6 tracking-wider mb-4 font-bold">
              {jewelry}
            </h1>
            {renderProducts(products.productsByJewelry)}
          </div>
          <div className="mx-8 mt-4">
            <h1 className="text-green-700 text-2xl ml-6 tracking-wider mb-4 font-bold">
              {women}
            </h1>
            {renderProducts(products.productsByWomen)}
          </div>
          <div className="mx-8 mt-4">
            <h1 className="text-green-700 text-2xl ml-6 tracking-wider mb-4 font-bold">
              {electronic}
            </h1>
            {renderProducts(products.productsByElectronic)}
          </div>
        </div>
      )}
    </Main>
  );
};

const mapStateToProperties = (state) => {
  return { products: state.products };
};

const mapDispatchToProperties = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  getProductsByCategory: (params) => dispatch(getProductsByCategory(params)),
});

export default connect(mapStateToProperties, mapDispatchToProperties)(Home);
