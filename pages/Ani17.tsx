import { getWindowSize } from "./api/GetWindowSize";
import anime from "animejs";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useUpdateEffect, useEffectOnce } from "usehooks-ts";

function Features() {
  const { height, width } = getWindowSize();

  const handleWindowMouseMove = (event: any) => {
    let x, y, z;

    (x = (event.clientX - width / 2) / 35),
      (y = (event.clientY - height / 2) / 20),
      gsap.to(".cover", {
        rotateX: -y,
        rotateY: x,
        // rotateZ: z,
      });
  };

  useEffect(() => {});

  // 初期設定
  // useEffect(() => {
  //   if (contentRef.current != null) {
  //     childLength = contentRef.current.children.length;

  //     contentRef.current.children[0].className += " left";
  //     contentRef.current.children[1].className += " center";
  //     contentRef.current.children[2].className += " right";
  //     console.log("useEffect");
  //   }
  // }, []);

  let [divNum, setDivNum] = useState(1);
  let [leftClicked, setLeftClicked] = useState(false);
  let [rightClicked, setRightClicked] = useState(false);
  let childLength: number;
  const contentRef = useRef<HTMLDivElement>(null);

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
        {
          /* @ts-ignore */
          contentRef.current.children[i].style.cssText = " ";
        }
      }
    }
  };

  // 左を選択時にコンテンツを右に動かす
  useUpdateEffect(() => {
    anime.remove(".center");
    if (contentRef.current != null) {
      childLength = contentRef.current.children.length;

      console.log("childLength" + childLength);
      removeClasses();

      console.log("divNumLL " + divNum);
      if (divNum === NaN) {
        setDivNum(1);
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
      x: "-150%",
      y: "50%",
      scale: 1,
      duration: 0.5,
    });
    gsap.from(".left", {
      opacity: 0,
      x: "-80%",
      y: "0%",
      duration: 0.5,
    });
    gsap.from(".right", {
      x: "-150%",
      y: "-50%",
      scale: 1.6,
      duration: 0.5,
    });
    gsap.to(".rightOut", {
      x: "80%",
      opacity: 0,
      duration: 0.5,
    });
  }, [leftClicked]);

  // 右を選択時にコンテンツを右に動かす
  useUpdateEffect(() => {
    if (contentRef.current != null) {
      childLength = contentRef.current.children.length;

      console.log("childLength" + childLength);

      removeClasses();

      console.log("divNumRR " + divNum);

      contentRef.current.children[divNum].className += " center";
      if (divNum + 1 == childLength) {
        contentRef.current.children[0].className += " right";
      } else {
        contentRef.current.children[divNum + 1].className += " right";
      }

      if (divNum - 2 <= -1) {
        if (divNum - 1 <= -1) {
          contentRef.current.children[childLength - 2].className += " leftOut";
        } else {
          contentRef.current.children[childLength - 1].className += " leftOut";
        }
      } else {
        contentRef.current.children[divNum - 2].className += " leftOut";
      }

      if (divNum - 1 <= -1) {
        contentRef.current.children[childLength - 1].className += " left";
      } else {
        contentRef.current.children[divNum - 1].className += " left";
      }
    }

    gsap.from(".center", {
      x: "150%",
      y: "50%",
      scale: 1,
      duration: 0.5,
    });
    gsap.from(".left", {
      x: "150%",
      y: "-50%",
      scale: 1.6,
      duration: 0.5,
    });
    gsap.from(".right", {
      x: "150%",
      opacity: 0,
      duration: 0.5,
    });
    gsap.to(".leftOut", {
      x: "-80%",
      opacity: 0,
      duration: 0.5,
    });
  }, [rightClicked]);

  return (
    <>
      <section onMouseMove={handleWindowMouseMove}>
        <div className="cover" ref={contentRef}>
          <div className="left item">1</div>
          <div className="center item">2</div>
          <div className="right item">3</div>
          <div className="item">4</div>
        </div>
        <div className="button">
          <div
            className="leftButton"
            onMouseDown={() => {
              setLeftClicked(!leftClicked);
              if (divNum - 1 <= -1) {
                setDivNum(childLength - 1);
              } else {
                setDivNum(divNum - 1);
              }
            }}
          ></div>
          <div
            className="rightButton"
            onClick={() => {
              setRightClicked(!rightClicked);
              console.log(rightClicked);
              if (divNum + 1 >= childLength) {
                setDivNum(0);
              } else {
                setDivNum(divNum + 1);
              }
            }}
          ></div>
        </div>
      </section>
      {/* style--------------------------------------------------- */}

      <style jsx>{`
        section {
          width: 100vw;
          height: 100vh;
          overflow-x: hidden;
          position: relative;

          .cover {
            user-select: none;
            position: relative;
            margin: auto;
            width: 100vw;
            height: 400px;

            .item {
              font-size: 3rem;
              background-color: aqua;
              img {
                width: 100%;
                height: 100%;
                background-size: cover;
              }
            }

            .center {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) scale(1.6);
              display: flex;
            }
            .left {
              top: 70%;
              left: 20%;
              transform: translate(-50%, -50%);
              display: flex;
            }
            .leftOut {
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
            .rightOut {
              top: 70%;
              left: 80%;
              transform: translate(-50%, -50%);
              display: flex;
            }
            div {
              width: 20%;
              height: 40%;
              position: absolute;
              align-items: center;
              justify-content: center;
              display: none;
            }
          }
          .button {
            width: 100vw;
            height: 400px;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            div {
              width: 30%;
              height: 60%;
              bottom: -2%;
              margin: 3%;
              position: absolute;
            }
            .leftButton {
              left: 0;
              background-color: red($color: #ff000074);
            }
            .rightButton {
              background-color: red($color: #ff000074);
              right: 0;
            }
          }
          @media screen and (max-width: 100vw) {
            .cover {
              height: calc(400 / 1200 * 100vw);
            }
            .button {
              height: calc(400 / 1200 * 100vw);
            }
          }
        }
      `}</style>
    </>
  );
}
export default Features;
