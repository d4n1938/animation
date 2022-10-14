/* eslint-disable react-hooks/exhaustive-deps */
import anime from "animejs";
import { animate } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useUpdateEffect, useEffectOnce } from "usehooks-ts";

<<<<<<< HEAD:pages/Ani16.tsx
const Ani16b = () => {
  let [divNum, setDivNum] = useState<number>(1);
  let [leftClicked, setLeftClicked] = useState<boolean>(false);
  let [rightClicked, setRightClicked] = useState<boolean>(false);
  let childLength: number;
  const contentRef = useRef<HTMLDivElement>(null);

=======
const Ani16 = () => {
  let [divNum, setDivNum] = useState(1);
  let [leftClicked, setLeftClicked] = useState(false);
  let [rightClicked, setRightClicked] = useState(false);
  let childLength;
  const contentRef = useRef(null);

  // class and style reset
  const removeClasses = () => {
    for (let i = 0; i < childLength; i++) {
      if (contentRef.current != null) {
        contentRef.current.children[i].classList.remove(
          "center",
          "left",
          "right",
          "leftOut",
          "rightOut"
        );
        contentRef.current.children[i].style = " ";
      }
    }
  };

>>>>>>> 0fa6d6f (ani16 tsx-> jsx):pages/Ani16.jsx
  // 初期設定
  useEffectOnce(() => {
    if (contentRef.current != null) {
      childLength = contentRef.current.children.length;

      contentRef.current.children[0].className += " left";
      contentRef.current.children[1].className += " center";
      contentRef.current.children[2].className += " right";
      console.log("useEffect");
    }
  });
  // 左を選択時にコンテンツを右に動かす
  useUpdateEffect(() => {
    anime.remove(".center");
    if (contentRef.current != null) {
      childLength = contentRef.current.children.length;

      console.log("childLength" + childLength);

      for (let i = 0; i < childLength; i++) {
        contentRef.current.children[i].className = " jsx-2793300352";
        contentRef.current.children[i].style.cssText = " ";
      }

      console.log("divNumLL " + divNum);

      contentRef.current.children[divNum].className += " center";
      if (divNum + 1 == childLength) {
        contentRef.current.children[0].className += " right";
      } else {
        contentRef.current.children[divNum + 1].className += " right";
      }

      if (divNum + 2 >= childLength) {
        if (divNum + 1 >= childLength) {
          contentRef.current.children[1].className += " rightOut";
        } else {
          contentRef.current.children[0].className += " rightOut";
        }
      } else {
        contentRef.current.children[divNum + 2].className += " rightOut";
      }

      if (divNum - 1 <= -1) {
        contentRef.current.children[childLength - 1].className += " left";
      } else {
        contentRef.current.children[divNum - 1].className += " left";
      }
    }
    gsap.from(".center", {
      x: "-80%",
      y: "80%",
      duration: 1,
    });
    gsap.from(".left", {
      opacity: 0,
      x: "-80%",
      y: "0%",
      duration: 1,
    });
    gsap.from(".right", {
      x: "-160%",
      duration: 1,
    });
    gsap.fromTo(
      ".rightOut",
      {
        display: "flex",
        x: "515%",
        y: "178%",
        // backgroundColor: "rgb(30, 253, 156)",
        duration: 1,
      },
      {
        x: "650%",
        opacity: 0,
      }
    );
  }, [leftClicked]);
  useUpdateEffect(() => {
    if (contentRef.current != null) {
      childLength = contentRef.current.children.length;

      console.log("childLength" + childLength);

      for (let i = 0; i < childLength; i++) {
        contentRef.current.children[i].className = " jsx-2793300352";
      }

      console.log("divNumRR " + divNum);

      contentRef.current.children[divNum].className += " center";
      if (divNum + 1 == childLength) {
        contentRef.current.children[0].className += " right";
      } else {
        contentRef.current.children[divNum + 1].className += " right";
      }
      if (divNum - 1 <= -1) {
        contentRef.current.children[childLength - 1].className += " left";
      } else {
        contentRef.current.children[divNum - 1].className += " left";
      }
    }
  }, [rightClicked]);
  return (
    <>
      <section id="aaa">
        <div className="content" ref={contentRef}>
          <div className="item">1</div>
          <div className="item">2</div>
          <div className="item">3</div>
          <div className="item">4</div>
          <div className="item">5</div>
        </div>
        <div className="button">
          <div
            onClick={() => {
              setLeftClicked(!leftClicked);
              console.log(leftClicked);
              if (divNum - 1 <= -1) {
                setDivNum(childLength - 1);
              } else {
                setDivNum(divNum - 1);
              }
            }}
          >
            left
          </div>
          <div
            onClick={() => {
              setRightClicked(!rightClicked);
              console.log(rightClicked);
              if (divNum + 1 >= childLength) {
                setDivNum(0);
              } else {
                setDivNum(divNum + 1);
              }
            }}
          >
            right
          </div>
        </div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        section {
          width: 100vw;
          height: 100vh;
          .content {
            width: 100vw;
            height: 500px;
            position: relative;
            .aaaa {
            }
            .center {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              display: flex;
            }
            .left {
              top: 70%;
              left: 20%;
              transform: translate(-50%, -50%);
              display: flex;
            }
            .right {
              top: 70%;
              left: 80%;
              transform: translate(-50%, -50%);
              display: flex;
            }
            div {
              width: 300px;
              height: 200px;
              position: absolute;
              align-items: center;
              justify-content: center;
              background-color: rgb(30, 253, 156);
              display: none;
            }
          }
          .button {
            height: 100px;
            padding: 30px;
            display: flex;
            div {
              margin: 20px;
              width: 70px;
              height: 20px;
              background-color: red;
            }
          }
        }
      `}</style>
    </>
  );
};
export default Ani16b;
