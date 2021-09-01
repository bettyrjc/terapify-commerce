import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "Src/store/actions/products";
import { toast } from "react-toastify";
import Main from "Components/Main";

import Banner from "Components/Banner";
import Image from "next/image";

import Card from "Components/utils/card";
import CarouselComponent from "Src/components/CarouselComponent";
import { useCallback } from "react";

import Carousel, { consts } from "react-elastic-carousel";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

const Component = ({ children }) => (
  <div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 "
  >{children}</div>
)

const Home = ({ products, getProducts }) => {
  const BREAKPOINTS = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

  const productsInLocal =
    process.browser && JSON.parse(localStorage.getItem("productsInCar"));

  const [productsInCar, setProductsInCar] = useState(productsInLocal || []);

  useEffect(() => {
    getProducts();
  }, []);

  // const setProductsInShoppingCar = (e, product) => {
  //   const validateIfExist = productsInCar.some(
  //     (productInCar) => productInCar.id === product.id
  //   );
  //   if (!validateIfExist) {
  //     setProductsInCar([...productsInCar, product]);
  //     localStorage.setItem(
  //       "productsInCar",
  //       JSON.stringify([...productsInCar, product])
  //     );
  //     toast.success("🥰 Añadiendo al carrito");
  //   } else {
  //     toast.info("🤓 Ya tienes este producto en tu carrito");
  //   }
  // };
  console.log(products.products);

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

  function renderProducts (products) {
    let arrayElements = []

    for(let i = 0; i < products.length; i++) {

      if (i % 3 == 2 || i === products.length - 1) {
        arrayElements.push(
          <Component>
            <Card data={products[i - 2]} />
            <Card data={products[i - 1]} />
            <Card data={products[i]} />
          </Component>
        )
      }
    }

    
    return (
      <Carousel renderArrow={myArrow} breakPoints={BREAKPOINTS}>
        {arrayElements}
      </Carousel>
    ) 
  }

  return (
    <Main shoppingCarInHeader={productsInCar}>
      <div className="h-full">
        <Banner />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 px-24"
          style={{ marginTop: "-30rem" }}
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
        <div>
          <h1 className="text-green-700 text-2xl"> Productos mas vendidos</h1>
          {renderProducts(products.products)}
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
  pushInShoppingCar: (data) => dispatch(pushInShoppingCar(data)),
});

export default connect(mapStateToProperties, mapDispatchToProperties)(Home);
