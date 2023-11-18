import "./customer.css";
import man from "../../../assets/boy.png";
import left from "../../../assets/left.svg";
import right from "../../../assets/right.svg";
function Customer() {
  return (
    <section className=" mt-[266px] mb-[227px]">
      <div className="container mx-auto">
        <div className="customer pt-16 pb-24 rounded-3xl">
          <h3 className="font-bold text-white text-4xl text-center ">
            What our customer are saying
          </h3>
          <div className="w-14 h-0.5 bg-white mb-20 rounded-md mt-6 mx-auto"></div>
          <div className="flex items-center justify-center gap-28 ">
            <div className="flex items-center">
              <img src={man} alt="man" />
              <div className="text-white ps-7">
                <p className="font-bold text-lg pt-6">Edward Newgate</p>
                <p className="text-base">Founder Circle</p>
              </div>
            </div>
            <blockquote className="w-[420px] ps-10 h-32 text-lg text-white">
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </blockquote>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-5 justify-center">
        <img src={left} alt="" />
        <div className="dots flex items-center gap-5">
          <div className="dot w-3 h-3 bg-[#5B9BF3] rounded-full"></div>
          <div className="dot w-3 h-3 bg-[#B5D2FB] rounded-full"></div>
          <div className="dot w-3 h-3 bg-[#B5D2FB] rounded-full"></div>
          <div className="dot w-3 h-3 bg-[#B5D2FB] rounded-full"></div>
        </div>
        <img src={right} alt="" />
      </div>
    </section>
  );
}
export default Customer;
