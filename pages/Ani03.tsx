const Ani03 = () => {
  return (
    <>
      <section>
        <div>
          <span className="content">content</span>
          <span className="cover">cover</span>
        </div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";
        div {
          @include flex-center("", 400px);
          position: relative;

          span {
            position: absolute;
            @include flex-center(400px, 200px);
            border-radius: 20px;
            color: white;
            font-size: 1.44rem;
          }
          .content {
            background-color: red;
            z-index: 0;
            transform: scale(0.5);
          }
          .cover {
            background-color: rgb(0, 170, 255);
            z-index: 1;
          }
          .content,
          .cover:hover {
            .content {
              animation: ani1 1s ease-in-out;
            }
            .cover {
              animation: ani2 1s ease-in-out;
            }
          }
        }
        @keyframes ani1 {
          50% {
            transform: translateY(-120px);
            z-index: 0;
          }

          100% {
            z-index: 100;
            transform: scale(1);
            z-index: 100;
          }
        }
        @keyframes ani2 {
          50% {
            transform: translateY(100px);
            z-index: 10;
          }
          100% {
            transform: scale(0.5);
            z-index: 0;
          }
        }
      `}</style>
    </>
  );
};
export default Ani03;
