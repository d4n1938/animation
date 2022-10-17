import React, { useEffect, useState } from "react";
import { getWindowSize } from "../api/GetWindowSize";

function Ani05() {
  const { height, width } = getWindowSize();

  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  // react nextjsの性質上、useEffect内ではないと動かなかった
  useEffect(() => {
    const handleWindowMouseMove = (event: any) => {
      setGlobalCoords({
        x: (event.clientX - width / 2) / 16,
        y: -(event.clientY - height / 2) / 10,
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
      {/* style--------------------------------------------------- */}

      <style jsx>{`
        @import "../../styles/functions.scss";

        section {
          @include flex-center("", 800px);
          background-color: rgb(223, 223, 223);
          perspective: 3000px;

          div {
            position: relative;
            width: 400px;
            height: 200px;
            background-color: red;
            transform: rotateY(${globalCoords.x}deg)
              rotateX(${globalCoords.y}deg) translateZ(80px);

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
              position: absolute;
              width: 300px;
              height: 80px;
              bottom: -20px;
              left: -40px;
              z-index: 200;
              font-size: 4rem;
              background-color: rgba(0, 255, 72, 0.43);
            }
          }
        }
      `}</style>
    </>
  );
}
export default Ani05;
