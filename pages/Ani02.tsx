const Ani02 = () => {
  return (
    <>
      <section>
        <div>
          <span></span>
        </div>
      </section>

      {/* style--------------------------------------------------- */}

      <style jsx>{`
        @import "../styles/functions.scss";
        div {
          @include flex-center("", 400px);
          background-color: #cfcfcf;
          span {
            clip-path: polygon(50% 0%, 75% 50%, 100% 100%, 0 100%, 25% 50%);

            width: 200px;
            height: 200px;
            background-color: #ffffff;
            animation: ani1 1s ease-in-out infinite;
          }
        }

        @keyframes ani1 {
          0% {
            clip-path: polygon(50% 0%, 75% 50%, 100% 100%, 0 100%, 25% 50%);
          }
          100% {
            clip-path: polygon(100% 50%, 75% 75%, 50% 100%, 0 50%, 50% 0);
          }
        }
        @keyframes ani2 {
          0% {
            clip-path: polygon(50% 0%, 75% 50%, 100% 100%, 0 100%, 25% 50%);
          }
          100% {
            clip-path: polygon(100% 50%, 75% 75%, 50% 100%, 0 50%, 50% 0);
          }
        }
      `}</style>
    </>
  );
};
export default Ani02;
