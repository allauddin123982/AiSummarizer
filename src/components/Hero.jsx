import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="w-full flex p-2 justify-between items-center mb-6 pt-4">
        <img src={logo} alt="Brief logo" className="w-28 object-contain" />
        <button type="button" className="black_btn">
          Github
        </button>
      </nav>

      <h1 className="head_text">
        ByteBriefer <br className="max-md:hidden" />
        <span className="orange_gradient">
          Decode Complexity, Decode Quickness
        </span>
      </h1>
      <h2 className="desc">
        ByteBriefer has the ability to unravel complex information swiftly and
        efficiently. It implies that the app is adept at simplifying intricate
        content and delivering it quickly in a more digestible format.
      </h2>
    </header>
  );
};

export default Hero;
