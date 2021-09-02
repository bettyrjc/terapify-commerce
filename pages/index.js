import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { useCallback } from "react";
import Carousel, { consts } from "react-elastic-carousel";

import Image from "next/image";

import Main from "Components/Main";
import Banner from "Components/Banner";
import Card from "Components/utils/card";
import CardInfo from "Components/utils/cardInfo";
import CarouselComponent from "Src/components/CarouselComponent";

import { getProducts, getProductsByCategory } from "Src/store/actions/products";

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
  useEffect(() => {
    getProducts();
    getProductsByCategory("jewelery");
    getProductsByCategory("women's clothing");
    getProductsByCategory("electronics");
  }, []);

  const myArrow = useCallback(({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <IoChevronBackCircleOutline size={40} color="white" />
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
      <div className="h-full">
        <Banner />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 px-24 "
          style={{ marginTop: "-30rem", marginBottom: "10rem" }}
        >
          <div>
            <p className="leading-tight text-white font-black xs:text-2xl md:text-5xl capitalize">
              special way {"\n"} to realize your own {"\n"} business.
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
          <h1 className="text-green-700 text-2xl ml-4 mb-4 font-bold">
            Productos mas vendidos
          </h1>
          {renderProducts(products?.products)}
        </div>

        <CardInfo />

        <h1
          style={{ fontSize: "3rem" }}
          className="text-green-200 mt-10 border-b-2 border-green-200 mx-8 pb-6 font-extrabold ml-6 text-center my-10"
        >
          Categorias
        </h1>
        <div className="mx-8 mt-4">
          <h1 className="text-green-700 text-2xl ml-6 tracking-wider mb-4 font-bold">
            Jewelry
          </h1>
          {renderProducts(products.productsByJewelry)}
        </div>
        <div className="mx-8 mt-4">
          <h1 className="text-green-700 text-2xl ml-6 tracking-wider mb-4 font-bold">
            Womens clothing
          </h1>
          {renderProducts(products.productsByWomen)}
        </div>
        <div className="mx-8 mt-4">
          <h1 className="text-green-700 text-2xl ml-6 tracking-wider mb-4 font-bold">
            Electronic
          </h1>
          {renderProducts(products.productsByElectronic)}
        </div>
      </div>
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
