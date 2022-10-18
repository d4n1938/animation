import anime from "animejs";
import { useEffect } from "react";

const Ani18 = () => {
  useEffect(() => {
    anime({
      targets: ".div",
      rotate: 45,
      translateX: "50%",
      translateY: "50%",
    });
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
          }
        }
      `}</style>
    </>
  );
};
export default Ani18;
