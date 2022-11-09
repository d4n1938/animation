import { useEffect } from "react";
import { Power0 } from "gsap";
import gsap from "gsap";

let num: number = 3;

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
        {(function () {
          const list: any = [];
          for (let i = 0; i < 10; i++) {
            return list.push(
              <div className="backGround" style={{ background: "#fff" }}></div>
            );
          }
          return <div>{list}</div>;
        })()}
        <div className="backGround" style={{ background: "#ff0" }}></div>
        <div className="backGround" style={{ background: "#0f0" }}></div>
        <div className="backGround" style={{ background: "#090" }}></div>
        <div className="backGround" style={{ background: "#0ff" }}></div>
        <div className="backGround" style={{ background: "#00f" }}></div>
        <div className="backGround" style={{ background: "#0aa" }}></div>
        <div className="backGround" style={{ background: "#f0f" }}></div>
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
            margin: 20px;
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
