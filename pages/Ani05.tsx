import { gsap } from "gsap/dist/gsap";
import { createElement } from "react";

function Ani05() {
  const div = createElement("div");

  gsap.to(div, {
    duration: 2,
    x: 200,
  });
  return (
    <>
      <section>
        <div></div>
      </section>
      {/* style--------------------------------------------------- */}

      <style jsx>{`
        @import "../styles/functions.scss";

        section {
          @include flex-center("", 600px);
          background-color: rgb(223, 223, 223);
          div {
            width: 10px;
            height: 10px;
            background-color: red;
          }
        }
      `}</style>
    </>
  );
}
export default Ani05;
