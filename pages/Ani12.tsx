import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

/*
DrawSVGPlugin.min.js, ScrollSmoother.min.js, and MorphSVGPlugin.min.js are Club GreenSock perks

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

Sign up at https://greensock.com/club or try them for free on CodePen or CodeSandbox
*/

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  PixiPlugin,
  TextPlugin,
  DrawSVGPlugin,
  ScrollSmoother,
  MorphSVGPlugin
);
import Vivus from "vivus";
const Ani12 = () => {
  let vivus;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    vivus = new Vivus("line", {
      start: "autostart", //アニメーションの自動再生
      duration: 400, //アニメーションの時間。数字が小さくなれば速くなり、大きくなれば遅くなる
      type: "scenario", // アニメーションのタイプを設定
      pathTimingFunction: Vivus.EASE, //動きの加速減速設定
    });
  });
  return (
    <>
      <svg
        id="line"
        stroke-miterlimit="10"
        version="1.1"
        viewBox="0 0 200 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M54.5347 0C56.9314 149.636 72.1106 215.373 113.654 278.514C155.197 341.655 182.359 378.848 135.224 482.642C88.0887 586.436 69.1546 570.995 69.1546 650.571C69.1546 730.146 70.8361 718.625 68.6739 800"
          fill="none"
          opacity="0.984615"
          stroke="#000000"
          stroke-width="5"
        />
      </svg>

      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";

        section {
          @include flex-center("", 500px);
          background-color: rgb(128, 128, 128);
        }
      `}</style>
    </>
  );
};
export default Ani12;
