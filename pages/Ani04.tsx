import anime from "../anime/lib/anime.es.js";
// import anime from "animejs";

// const anime = require("animejs");
anime({
  targets: "div",
  translateX: 250,
});
const Ani04 = () => {
  return (
    <>
      <section>
        <div>animate</div>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";
        section {
          @include flex-center("", 600px);
          background-color: rgb(255, 0, 0);
        }
      `}</style>
    </>
  );
};
export default Ani04;
