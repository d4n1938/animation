import anime from "animejs";
import { useEffect, useState } from "react";

import { useUpdateEffect } from "usehooks-ts";

const Ani14 = () => {
  let [isShow, setIsShow] = useState<boolean>(false);

  useUpdateEffect(() => {
    if (isShow) {
      let ani = anime({
        targets: "li",
        translateX: 220,
        duration: 1000,
        delay: anime.stagger(100), // increase delay by 100ms for each elements.
      });
      anime({
        targets: "button>div:nth-child(1)",
        translateY: 13,
        rotate: 45,
      });
      anime({
        targets: "button>div:nth-child(2)",
        width: 0,
      });
      anime({
        targets: "button>div:nth-child(3)",
        translateY: -13,
        rotate: -45,
      });
    } else {
      anime({
        targets: "li",
        translateX: 0,
        duration: 1000,
        delay: anime.stagger(100, { direction: "reverse" }), // increase delay by 100ms for each elements.
      });
      anime({
        targets: "button>div:nth-child(1)",
        translateY: 0,
        rotate: 0,
      });
      anime({
        targets: "button>div:nth-child(2)",
        width: 30,
      });
      anime({
        targets: "button>div:nth-child(3)",
        translateY: 0,
        rotate: 0,
      });
    }
  }, [isShow]);

  return (
    <>
      <nav>
        <button
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div className="coverNav">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </div>
      </nav>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";

        nav {
          width: 180px;
          height: 80vh;
          position: fixed;
          top: 50%;
          left: 20px;
          transform: translateY(-50%);
          button {
            width: 50px;
            height: 50px;
            padding: 5px;
            border-radius: 20%;
            background-color: rgba(0, 0, 0, 0);
            color: rgb(75, 75, 75);
            border: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;

            div {
              width: 30px;
              height: 2px;
              background-color: rgb(164, 164, 164);
              border-radius: 2px;
            }
          }
          .coverNav {
            @include flex-center(100%, 100%);
            position: absolute;
            flex-direction: column;
            justify-content: space-around;
            left: -220px;
            li {
              width: 100%;
              background-color: aqua;
              text-align: left;
              list-style: none;
            }
          }
        }
      `}</style>
    </>
  );
};
export default Ani14;
