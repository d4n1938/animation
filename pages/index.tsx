import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Ani01 from "./Ani01";
import Ani02 from "./Ani02";
import Ani03 from "./Ani03";
import Ani04 from "./Ani04";
import Ani05 from "./Ani05";
import Ani06 from "./Ani06";
import Ani07 from "./Ani07";
import Ani08 from "./Ani08";
import Ani09 from "./Ani09";
import Ani10 from "./Ani10";

import Navigation from "./Navigation";

const Home: NextPage = () => {
  return (
    <>
      <Navigation></Navigation>
      {/* <Ani01></Ani01> */}
      {/* <Ani02></Ani02> */}
      {/* <Ani03></Ani03> */}
      {/* <Ani04></Ani04> */}
      {/* <Ani05></Ani05> */}
      {/* <Ani06></Ani06> */}
      {/* <Ani07></Ani07> */}
      {/* <Ani08></Ani08> */}
      {/* <Ani09></Ani09> */}
      <Ani10></Ani10>
    </>
  );
};

export default Home;
