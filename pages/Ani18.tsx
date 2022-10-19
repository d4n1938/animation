import anime from "animejs";
import gsap from "gsap";
import { useEffect } from "react";

const Ani18 = () => {
  useEffect(() => {
    // anime({
    //   targets: ".div",
    //   translateX: "50%",
    //   translateY: "50%",
    // });
    gsap.fromTo(
      ".div",
      {
        x: 1000,
        y: -1000,
      },
      {
        x: -1200,
        y: 1200,
        duration: 2,
      }
    );
  });
  return (
    <>
      <section>
        <div className="div"></div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";
        section {
          @include flex-center("", 100vh);
          background-color: rgb(172, 172, 172);
          div {
            @include flex-center(200px, 200vh);
            transform: rotate(45deg);
            background-color: red;
            border-radius: 50%;
          }
        }
      `}</style>
    </>
  );
};
export default Ani18;
