import anime from "animejs";
import { useEffect } from "react";
import { useUpdateEffect } from "usehooks-ts";

const Ani15 = () => {
  useEffect(() => {
    let path = anime.path("path");

    anime({
      targets: "section>div",
      translateX: path("x"),
      translateY: path("y"),
      duration: 2000,
      easing: "linear",
    });
  });
  return (
    <>
      <section>
        <div>😃</div>
        <svg
          height="100%"
          stroke-miterlimit="10"
          viewBox="0 0 200 800"
          width="10%"
        >
          <defs />
          <clipPath id="ArtboardFrame">
            <rect height="800" width="200" x="0" y="0" />
          </clipPath>
          <g>
            <path
              d="M54.5347 0C56.9314 149.636 72.1106 215.373 113.654 278.514C155.197 341.655 182.359 378.848 135.224 482.642C88.0887 586.436 69.1546 570.995 69.1546 650.571C69.1546 730.146 70.8361 718.625 68.6739 800"
              fill="none"
              opacity="0.984615"
              stroke="#000000"
              stroke-linecap="butt"
              stroke-linejoin="round"
              stroke-width="45.5202"
            />
          </g>
        </svg>
      </section>
      {/* style--------------------------------------------------- */}
      <style jsx>{``}</style>
    </>
  );
};
export default Ani15;
