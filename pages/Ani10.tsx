import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const sleep = (msec: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, msec));

const Ani10 = () => {
  let flag: Boolean = false;
  useEffect(() => {});
  let tl = gsap.timeline().time(1);
  const HoverAni = () => {
    flag = true;
    tl.play();

    tl.to(".hover", {
      scale: 2,
      duration: 1,
    });
    tl.to(".hover", {
      rotate: 90,
      duration: 1,
      background: "#00ea00",
    });
    (async () => {
      await sleep(2000);
      if (flag) {
        tl.pause();
      }
    })();
  };
  const LeaveAni = () => {
    flag = false;

    tl.play();
    tl.reversed(true);
  };
  return (
    <>
      <section>
        <div
          className="hover"
          onMouseOver={HoverAni}
          onMouseLeave={LeaveAni}
        ></div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";
        section {
          @include flex-center(100vw, 100vh);
          font-size: 3rem;
          background-color: rgb(40, 40, 40);

          top: 0;
          left: 0;
          z-index: 200;
          div {
            width: 100px;
            height: 100px;
            background-color: orange;
          }
        }
      `}</style>
    </>
  );
};
export default Ani10;
