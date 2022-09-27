import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useState } from "react";
import { getWindowSize } from "./api/GetWindowSize";

function Ani05() {
  const [xPosition, setX] = useState(0);
  const move = () => {
    console.log("aaa");
  };
  const { height, width } = getWindowSize();

  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  // react nextjsの性質上、useEffect内ではないと動かなかった
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to(".a", {
    //   scrollTrigger: {
    //     trigger: ".a",
    //     markers: true,
    //     toggleActions: "restart pause reverse pause",
    //   },
    //   x: 200,
    //   rotation: 360,
    //   duration: 5,
    // });

    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: (event.screenX + 257 - width / 2) / 16,
        y: -(event.screenY + 973 - height / 2) / 16,
      });
      console.log(globalCoords);
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  });

  return (
    <>
      <section>
        <div className="a">
          <div className="in1">aaa</div>
          <div className="in2">222</div>
          <div className="title">title</div>
        </div>
      </section>
      <section>
        <div className="a"></div>
      </section>
      <section>
        <div className="a"></div>
      </section>
      <section>
        <div className="a"></div>
      </section>
      {/* style--------------------------------------------------- */}

      <style jsx>{`
        @import "../styles/functions.scss";

        section {
          @include flex-center("", 800px);
          background-color: rgb(223, 223, 223);
          div {
            position: relative;
            width: 400px;
            height: 200px;
            background-color: red;
            transform: rotateY(${globalCoords.x}deg)
              rotateX(${globalCoords.y}deg);
            .in1 {
              background-color: aqua;
              position: absolute;
              top: -20px;
              left: -20px;
              z-index: 10;
              width: 50px;
              height: 50px;
            }
            .in2 {
              background-color: aqua;
              position: absolute;
              top: -20px;
              right: -20px;
              z-index: 20;
              width: 50px;
              height: 50px;
            }
            .title {
              background-color: rgba(0, 255, 72, 0.43);
              position: absolute;
              bottom: -20px;
              left: -20px;
              width: 100px;
              z-index: 20;
              width: 50px;
              height: 50px;
            }
          }
        }
      `}</style>
    </>
  );
}
export default Ani05;
