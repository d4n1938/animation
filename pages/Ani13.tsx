import anime from "animejs";
import { useEffect } from "react";
const Ani13 = () => {
  useEffect(() => {
    anime({ targets: ".rect", translateX: 250 });
  });
  return (
    <>
      <section>
        <div className="rect"></div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";

        section {
          @include flex-center("", 500px);
          background-color: rgb(83, 81, 81);
          div {
            @include flex-center(100px, 100px);
            background-color: #ff00ff;
          }
        }
      `}</style>
    </>
  );
};
export default Ani13;
