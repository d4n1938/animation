import { useEffect } from "react";
import gsap from "gsap";

const Ani19 = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); // はじめに初期化
    // 続けて動かしたい要素を追加
    tl.set("section>div", { x: 0 }); // 水平方向に移動
    tl.to("section>div", { x: 100, duration: 1 }); // 水平方向に移動
    tl.to("section>div", { x: 0, duration: 1 }); // 水平方向に移動
  });
  return (
    <>
      <section>
        <div>aaaaaa</div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";

        section {
          @include flex-center("", 100vh);
          perspective: 5.5cm;

          div {
            @include flex-center(200px, 200px);
            font-size: 3rem;
            background-color: aqua;
            transform: rotateY(40deg) translateZ(50px);
          }
        }
      `}</style>
    </>
  );
};
export default Ani19;
