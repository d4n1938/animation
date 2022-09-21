import anime from "animejs";

const Ani05 = () => {
  anime({
    targets: "div",
    transform: 300,
  });
  return (
    <>
      <section>
        <div></div>
      </section>
      {/* style--------------------------------------------------- */}

      <style jsx>{`
        @import "../styles/functions.scss";

        section {
          @include flex-center("", 600px);
          background-color: rgb(223, 223, 223);
          div {
            width: 10px;
            height: 10px;
            background-color: red;
          }
        }
      `}</style>
    </>
  );
};
export default Ani05;
