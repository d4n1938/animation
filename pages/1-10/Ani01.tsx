const Ani01 = () => {
  return (
    <>
      <section>
        <div>
          <span></span>
        </div>
      </section>

      {/* ------------------------------------------------------- */}
      <style jsx>{`
        @import "../../styles/functions.scss";
        div {
          @include flex-center("", 400px);
          span {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border-color: black;
            border: solid;
            transform-style: preserve-3d;
            transform: rotate3d(1, 0, 0, 0deg);
            animation: transformChape 1s ease-in-out infinite alternate,
              rotate 1s ease-in-out infinite, ani 1s infinite ease-in;
          }
        }

        @keyframes ani {
          0% {
            transform: rotate3d(1, 0, 0, 0deg);
          }
          100% {
            transform: rotate3d(1, 0, 0, 360deg);
          }
        }
        @keyframes transformChape {
          0% {
            border-radius: 10%;
            width: 150px;
            height: 150px;
          }
          100% {
            border-radius: 50%;
          }
        }
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(450deg);
          }
        }
      `}</style>
    </>
  );
};

export default Ani01;
