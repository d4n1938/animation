import { motion, useCycle } from "framer-motion";
const Ani04 = () => {
  const [x, cyclex] = useCycle(0, 50, 100, 150);

  return (
    <>
      <section>
        <motion.div
          style={{ width: "200px", height: "200px", background: "skyblue" }}
          animate={{ x: x }}
          onClick={() => cyclex()}
        />
      </section>

      {/* style--------------------------------------------------- */}
      <style jsx>{`
        @import "../styles/functions.scss";
        section {
          @include flex-center("", 600px);
          background-color: rgb(223, 223, 223);
        }
      `}</style>
    </>
  );
};
export default Ani04;
