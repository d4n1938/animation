import { animate } from "framer-motion";
import gsap, { Expo } from "gsap";
import { useEffect, useState } from "react";
const Ani08 = () => {
  const [isPress, setIsPress] = useState<Boolean>();
  const [flag, setFlag] = useState<Boolean>(true);

  let Style = {};
  useEffect(() => {
    let tl = gsap.timeline();
    if (isPress) {
      tl.to(".child", {
        rotateX: -50,
        rotateY: 50,
        rotateZ: 20,
        ease: Expo.easeOut,
        duration: 1,
      });
      // setTimeout(() => {
      //   setFlag(true);
      // }, 1000);
      tl.to(".cover", {
        height: 600,
        ease: Expo.easeOut,
        duration: 0.5,
      });
    } else {
      tl.to(".cover", {
        height: 200,
        duration: 0.5,
        ease: Expo.easeOut,
      });
      // setTimeout(() => {
      //   setFlag(false);
      // }, 100);
      tl.to(".child", {
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        duration: 1,
        ease: Expo.easeOut,
      });
    }
  }, [isPress]);

  return (
    <>
      <section>
        <div className="cover">
          <div
            className="child"
            style={flag ? { position: "relative" } : { position: "absolute" }}
          >
            a
          </div>
          <div
            className="child"
            style={flag ? { position: "relative" } : { position: "absolute" }}
          >
            b
          </div>
          <div
            className="child"
            style={flag ? { position: "relative" } : { position: "absolute" }}
          >
            c
          </div>
        </div>
        <div className="buttonCover">
          <input
            type="button"
            value="button"
            onClick={() => setIsPress(!isPress)}
          />
          <p>{isPress ? "true" : "false"}</p>
        </div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";

        section {
          @include flex-center("", 100vh);
          font-size: 3rem;
          background-color: bisque;
          .cover {
            @include flex-center(200px, 200px);
            flex-direction: column;
            position: relative;
            .child {
              @include flex-center(200px, 200px);
              position: absolute;
            }
          }
          .child:nth-child(1) {
            z-index: 20;
            background-color: aqua;
          }
          .child:nth-child(2) {
            background-color: rgb(72, 255, 0);
          }
          .child:nth-child(3) {
            background-color: rgb(255, 0, 0);
          }
          .buttonCover {
            width: 100px;
            input {
              width: 100px;
            }
          }
        }
      `}</style>
    </>
  );
};
export default Ani08;
