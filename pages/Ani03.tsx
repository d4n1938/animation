const Ani03 = () => {
  return (
    <>
      <section>
        <div>
          <span>aaa</span>
        </div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";
        div {
          @include flex-center("", 400px);
        }
      `}</style>
    </>
  );
};
export default Ani03;
