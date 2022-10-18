const Ani18 = () => {
  return (
    <>
      <section></section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";
        section {
          @include flex-center("", 100vh);
          background-color: rgb(172, 172, 172);
        }
      `}</style>
    </>
  );
};
export default Ani18;
