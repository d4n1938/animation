import { gsap } from "gsap";
import React, { useEffect } from "react";

function Ani05() {
  // react nextjsの性質上、useEffect内ではないと動かなかった

  useEffect(() => {
    gsap.to(".aaa", {
      duration: 2,
      x: 200,
    });
  });

  return (
    <>
      <section>
        <div className="aaa"></div>
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