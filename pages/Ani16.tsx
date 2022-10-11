import { useEffect, useRef, useState } from "react";
import { useUpdateEffect } from "usehooks-ts";

const Ani16 = () => {
  let [divNum, setDivNum] = useState<number>(0);
  let [leftClicked, setLeftClicked] = useState<boolean>(false);
  let childLength: number;
  useUpdateEffect(() => {}, [divNum]);
  const contentRef = useRef(null);

  useEffect(() => {
    childLength = contentRef.current.children.length;
    console.log(childLength);

    contentRef.current.children[0].className += " center";
    contentRef.current.children[1].className += " right";
    contentRef.current.children[childLength - 1].className += " left";
    console.log("useEffect");
  });
  useUpdateEffect(() => {
    for (let i = 0; i < childLength; i++) {
      contentRef.current.children[i].className = " jsx-2793300352";
      console.log(i);
      setDivNum(divNum + 1);
      contentRef.current.children[divNum].className += " center";
      contentRef.current.children[divNum + 1].className += " right";
      contentRef.current.children[divNum + 2].className += " left";
    }
  }, [leftClicked]);
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
            }}
          >
            left
          </div>
          <div>right</div>
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
export default Ani16;
