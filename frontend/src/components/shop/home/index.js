import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";
// import FollowONIG from "./FollowMe";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
      <Slider />
      {/* Category, Search & Filter Section */}
      {/* <ourShop /> */}
      <section className="">
        <div className=" about-shop">
          <h3 className="hearder-about-shop text-center" >
            WELCOME TO OUR STORE
          </h3>
          <div className="sub-title-about-shop text-center mt-4">
            The product is completely made from natural ingredients that are user-friendly and bring an extremely pleasant fragrance<br /> bring an extremely pleasant fragrance
          </div>
          <div className="content-about-shop m-4 md:mx-8 md:my-6 grid grid-cols-1 md:grid-cols-3">
            <div className="content-about-shop-item flex">
              <div className="item-about-shop-image">
              <img className="fix-our-shop-image" src="./image/ingredients.jpg" alt="Girl in a jacket"></img>
              </div>
              <div className="item-about-shop-content">
                <h6 className="item-about-shoh6-header">Natural ingredients</h6>
                <p className="item-about-shop-header">Ingredients 100% natural</p>

              </div>
            </div>
            <div className="content-about-shop-item flex">
              <div className="item-about-shop-image">
              <img className="fix-our-shop-image" src="./image/quality.png" alt="Girl in a jacket"></img>
              </div>
              <div className="item-about-shop-content">
                <h6 className="item-about-shoh6-header">Exceptional quality</h6>
                <p className="item-about-shop-header">Providing outstanding quality <br/>compared to product price</p>

              </div>
            </div>
            <div className="content-about-shop-item flex">
              <div className="item-about-shop-image">
              <img className="fix-our-shop-image" src="./image/scents.jpg" alt="Girl in a jacket"></img>
              </div>
              <div className="item-about-shop-content">
                <h6 className="item-about-shoh6-header">Diverse scents</h6>
                <p className="item-about-shop-header">Made from natural ingredients:  <br/>jasmine, lavender...</p>

              </div>
            </div>
          </div>
          
        </div>

      </section>
      <section className="mr-4 ml-4">
        <ProductCategory />
      </section>
      {/* Product Section */}
      {/* <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SingleProduct />
      </section> */}
      {/* <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <FollowONIG />
      </section> */}
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;
