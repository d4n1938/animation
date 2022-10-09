import anime from "animejs";
import { useEffect, useState } from "react";

import { useUpdateEffect } from "usehooks-ts";

const Ani14 = () => {
  let [isShow, setIsShow] = useState<boolean>(false);

  useUpdateEffect(() => {
    if (isShow) {
      anime({
        targets: ".coverNav",
        translateX: 200,
        duration: 1000,
      });
    } else {
      anime({
        targets: ".coverNav",
        translateX: 0,
        duration: 1000,
      });
    }
  }, [isShow]);
  return (
    <>
      <section>
        <nav>
          <button
            onClick={() => {
              setIsShow(!isShow);
            }}
          >
            button
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
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";

        section {
          @include flex-center("", 100vh);
          background-color: rgb(83, 81, 81);
          nav {
            width: 200px;
            height: 80vh;
            position: fixed;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            background-color: rgb(254, 164, 164);
            .coverNav {
              @include flex-center(100%, 100%);
              position: absolute;
              flex-direction: column;
              justify-content: space-around;
              left: -200px;
              li {
                width: 100%;
                background-color: aqua;
                text-align: left;
                list-style: none;
              }
            }
          }
        }
      `}</style>
    </>
  );
};
export default Ani14;
