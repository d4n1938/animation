import gsap from "gsap";
import { useEffect } from "react";
const Ani06 = () => {
  useEffect(() => {
    gsap.to("section", {
      x: window.innerWidth,
      duration: 1,
      delay: 2,
    });
  });
  return (
    <>
      <section>
        <div>welcome</div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../../styles/functions.scss";

        section {
          @include flex-center("", "");

          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgb(101, 101, 101);
        }
      `}</style>
    </>
  );
};
export default Ani06;
