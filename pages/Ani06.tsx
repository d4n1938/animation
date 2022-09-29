import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
const Ani06 = () => {
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to("section", {
    //   scrollTrigger: {
    //     trigger: "section",
    //     start: "top center",
    //     markers: true,
    //   },
    //   x: window.innerWidth,
    //   duration: 1,
    // });
  });
  return (
    <>
      <section className="a">a</section>
      <section className="b">b</section>
      <section className="c">c</section>
      <section className="d">d</section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";

        section {
          @include flex-center("", 100vh);
          font-size: 3rem;

          background-color: rgb(101, 101, 101);
          overflow-y: scroll;
          scroll-snap-align: start;
        }

        .a {
          background-color: white;
        }
        .b {
          background-color: rgb(195, 71, 71);
        }
        .c {
          background-color: rgb(14, 165, 142);
        }
        .d {
          background-color: rgb(14, 74, 165);
        }
      `}</style>
    </>
  );
};
export default Ani06;
