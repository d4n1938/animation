import anime from "animejs";
import { useEffect } from "react";
const Ani13 = () => {
  useEffect(() => {
    anime({
      targets: ".rect",
      translateX: [
        { value: 300, duration: 1000 },
        { value: 0, duration: 1000 },
        { value: 300, duration: 1000 },
      ],
      translateY: [
        { value: 300, duration: 2000 },
        { value: 0, duration: 1000 },
        { value: 300, duration: 500 },
      ],
      borderRadius: [
        { value: "50%", duration: 3000 },
        { value: 0, duration: 1000 },
        { value: "50%", duration: 500 },
      ],
      rotate: [
        { value: 300, duration: 2000 },
        { value: 0, duration: 1000 },
        { value: 300, duration: 500 },
      ],
    });
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
