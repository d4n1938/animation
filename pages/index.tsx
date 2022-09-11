import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Ani01 from "./Ani01";
import Ani02 from "./Ani02";
import Navigation from "./Navigation";
const Home: NextPage = () => {
  return (
    <>
      <Navigation></Navigation>
      <Ani01></Ani01>
      <Ani02></Ani02>
    </>
  );
};

export default Home;
