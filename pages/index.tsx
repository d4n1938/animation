import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Ani01 from "./Ani01";
import Ani02 from "./Ani02";
import Ani03 from "./Ani03";
import Ani04 from "./Ani04";
import Ani05 from "./Ani05";

import Navigation from "./Navigation";

const Home: NextPage = () => {
  return (
    <>
      <Navigation></Navigation>
      {/* <Ani01></Ani01> */}
      {/* <Ani02></Ani02> */}
      {/* <Ani03></Ani03> */}
      {/* <Ani04></Ani04> */}
      <Ani05></Ani05>
    </>
  );
};

export default Home;
