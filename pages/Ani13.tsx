const Ani13 = () => {
  return (
    <>
      <section>
        <div></div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";

        section {
          @include flex-center("", 500px);
          background-color: rgb(83, 81, 81);
        }
      `}</style>
    </>
  );
};
export default Ani13;
