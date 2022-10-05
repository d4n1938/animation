import gsap, { Back } from "gsap";
import { useEffect } from "react";

const Ani09 = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.set(".cube", {
      borderRadius: 50,
    })
      .to(".cube", {
        scale: 5,
        duration: 1,
        ease: Back.easeOut.config(4),
      })
      .to(".cube", {
        scale: 2,
        rotate: 720,
        borderRadius: 10,
        background: "#00ea00",
        duration: 1,
      })
      .to(".cube", {
        width: window.innerWidth,
      })
      .to(".cube", {
        height: 0,
      })
      .to(".cube", {
        y: -window.innerHeight / 2,
      })
      .to(
        ".GroundTop",
        {
          y: -window.innerHeight / 2,
          duration: 0.5,
        },
        "<"
      )
      .to(
        ".GroundBottom",
        {
          y: window.innerHeight / 2,
          duration: 0.5,
        },
        "<"
      );
  });
  return (
    <>
      <section>
        <div className="GroundTop"></div>
        <div className="GroundBottom"></div>
        <div className="cube"></div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";

        section {
          @include flex-center(100vw, 100vh);
          font-size: 3rem;

          position: fixed;
          top: 0;
          left: 0;
          z-index: 2000;
          .GroundTop,
          .GroundBottom {
            @include flex-center(100vw, 50vh);
            position: fixed;
            background-color: black;
          }
          .GroundTop {
            top: 0;
          }
          .GroundBottom {
            bottom: 0;
          }
          .cube {
            @include flex-center(100px, 100px);
            transform: scale(0);
            background-color: aliceblue;
          }
        }
      `}</style>
    </>
  );
};
export default Ani09;
