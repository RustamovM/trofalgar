import logo from "../../assets/logo.svg";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer bg-[#62B2F3] py-28">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mx-auto">
          <div className="">
            <img src={logo} alt="logo" className="mb-5" />
            <p className="w-[391px] text-lg font-light pb-8">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <p className="w-[391px] text-base font-light">
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </div>
          <div className="">
            <h5 className="font-bold text-xl pb-7">Company</h5>
            <ul className="list-none text-lg font flex flex-col gap-5">
              <li className="">About</li>
              <li className="">Testimonials</li>
              <li className="">Find a doctor</li>
              <li className="">Apps</li>
            </ul>
          </div>
          <div className="">
            <h5 className="font-bold text-xl pb-7">Company</h5>
            <ul className="list-none text-lg font flex flex-col gap-5">
              <li className="">About</li>
              <li className="">Testimonials</li>
              <li className="">Find a doctor</li>
              <li className="">Apps</li>
            </ul>
          </div>
          <div className="">
            <h5 className="font-bold text-xl pb-7">Company</h5>
            <ul className="list-none text-lg font flex flex-col gap-5">
              <li className="">About</li>
              <li className="">Testimonials</li>
              <li className="">Find a doctor</li>
              <li className="">Apps</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
