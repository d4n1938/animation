import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Ani11 from "./Ani11";
import Ani12 from "./Ani12";
import Ani13 from "./Ani13";
import Ani14 from "./Ani14";

import AniUnity10 from "./1-10/AniUnity10";

import Navigation from "./Navigation";

const Home: NextPage = () => {
  return (
    <>
      <Navigation></Navigation>
      {/* <AniUnity10></AniUnity10> */}
      <Ani13></Ani13>
      <Ani14></Ani14>

      <style jsx>{`
        @import "../styles/functions.scss";
        section {
          @include flex-center(100vw, 100vh);
          font-size: 3rem;

          z-index: 200;

          background-color: rgb(59, 59, 59);
        }
      `}</style>
    </>
  );
};

export default Home;
