import { useEffect } from "react";
import { Power0 } from "gsap";
import gsap from "gsap";

const Ani19 = () => {
  useEffect(() => {
    // const tl = gsap.timeline({ repeat: -1 }); // はじめに初期化
    // // 続けて動かしたい要素を追加
    // tl.set("section>div", { x: 0 }); // 水平方向に移動
    // tl.to("section>div", { x: 100, duration: 1 }); // 水平方向に移動
    // tl.to("section>div", { x: 0, duration: 1 }); // 水平方向に移動

    const tl2 = gsap.timeline({ repeat: -1, delay: 2 });
    tl2.fromTo(
      ".backGround",
      { x: 1000, y: -1000 },
      {
        x: -1000,
        y: 1000,
        duration: 2,
        ease: Power0.easeNone,
      }
    );
  });
  return (
    <>
      <section>
        {/* <div>aaaaaa</div> */}
        <div className="backGround"></div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";

        section {
          @include flex-center("", 100vh);
          overflow: hidden;
          /* perspective: 5.5cm; */

          /* div {
            @include flex-center(200px, 200px);
            font-size: 3rem;
            background-color: aqua;
            transform: rotateY(40deg) translateZ(50px);
          } */
          position: relative;
          .backGround {
            width: 80px;
            height: 1200px;
            background-color: red;
            border-radius: 80px;
            position: absolute;
            bottom: 0;
            right: 50%;
            transform: rotate(45deg);
            transform-origin: bottom center;
            z-index: 0;
          }
        }
      `}</style>
    </>
  );
};
export default Ani19;
