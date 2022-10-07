import gsap, { Power0 } from "gsap";
import { useEffect } from "react";

const Ani11 = () => {
  let tl = gsap.timeline({});
  useEffect(() => {
    tl.to(".ball1", {
      ease: Power0.easeNone,
      transformOrigin: "top right",
      rotate: 360,
      duration: 1,
      repeat: -1,
    })
      .to(
        ".ball2",
        {
          ease: Power0.easeNone,
          transformOrigin: "top left",
          rotate: 360,
          duration: 1,
          repeat: -1,
        },
        "<"
      )
      .to(
        ".ball3",
        {
          ease: Power0.easeNone,
          transformOrigin: "bottom left",
          rotate: 360,
          duration: 1,
          repeat: -1,
        },
        "<"
      )
      .to(
        ".ball4",
        {
          ease: Power0.easeNone,
          transformOrigin: "bottom right",
          rotate: 360,
          duration: 1,
          repeat: -1,
        },
        "<"
      )
      .to(
        ".cover",
        {
          ease: Power0.easeNone,
          transformOrigin: " center",
          rotate: 0,
          duration: 1,
          repeat: -1,
        },
        "<"
      );
  });
  return (
    <>
      <div className="cover">
        <div className="ball1"></div>
        <div className="ball2"></div>
        <div className="ball3"></div>
        <div className="ball4"></div>
      </div>

      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";

        .cover {
          @include flex-center(500px, 500px);
          background-color: rgb(59, 59, 59);

          div {
            background-color: aqua;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            position: absolute;
          }
        }
      `}</style>
    </>
  );
};
export default Ani11;
