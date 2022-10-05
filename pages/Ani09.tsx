import gsap from "gsap";
import { useEffect } from "react";

const Ani09 = () => {
  useEffect(() => {
    gsap.to(".cube", {
      x: 100,
      duration: 1,
    });
  });
  return (
    <>
      <section>
        <div className="cube"></div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";

        section {
          @include flex-center(100vw, 100vh);
          font-size: 3rem;

          background-color: rgb(11, 11, 11);
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2000;
          .cube {
            @include flex-center(100px, 100px);

            background-color: aliceblue;
          }
        }
      `}</style>
    </>
  );
};
export default Ani09;
