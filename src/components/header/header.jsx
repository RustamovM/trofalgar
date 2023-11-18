import logo from "../../assets/logo.svg";
const Header = () => {
  return (
    <header className="pt-[140px] mb-[84px] px-10">
      <div className="container mx-auto flex items-center justify-between">
        <img src={logo} alt="" />
        <ul className="list-none flex items-center gap-10 font-medium text-lg">
          <li>
            <a href="#" className="">
              Home
            </a>
          </li>
          <li>
            <a href="#">Find a doctor</a>
          </li>
          <li>
            <a href="#">Apps</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
