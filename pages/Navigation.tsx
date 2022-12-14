import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <nav>
        <p>Navigation</p>
        <p>button</p>
        <p>
          <Link href="/">home</Link>
        </p>
        <p>
          <Link href="/pages/ParallaxPage">Parallax</Link>
        </p>
      </nav>
      {/* ----------------------------------------------------- */}
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 50px;
            position: relative;
            z-index: 100000;
            align-items: center;
            color: black;
            background-color: #9b9b9b;
            p {
              margin-left: 20px;
              margin-right: 20px;
              font-size: 1.2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navigation;
