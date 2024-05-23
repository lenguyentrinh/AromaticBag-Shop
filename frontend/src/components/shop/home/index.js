import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import IntroduceAboutShop from "./IntroduceAboutShop";
export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
      <Slider />

      <IntroduceAboutShop />
      <section className="mr-4 ml-4">
        <ProductCategory />
      </section>
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
