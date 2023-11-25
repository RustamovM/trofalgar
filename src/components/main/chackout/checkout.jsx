import img from "../../../assets/woman.png";
import img1 from "../../../assets/Mask.png";
import img2 from "../../../assets/Group.png";
import arrow from "../../../assets/right.svg";
import "./checkout.css";
function Checkout() {
  return (
    <section>
      <div className="container mx-auto">
        <h3 className="font-bold text-4xl text-center pb-6">
          Check out our latest article
        </h3>
        <div className="w-14 h-0.5 bg-black mx-auto mb-16 rounded-md"></div>
        <div className=" flex items-center justify-center gap-10 mb-16">
          <div className="box_card w-[350px] h-[512px] text-center rounded-2xl hover:cursor-pointer hover:scale-105 duration-700	transition-all">
            <img src={img} alt="" width={369} height={246} />
            <div className="ps-3 pe-4">
              <h4 className="font-bold text-xl pt-5">
                Disease detection, check up in the laboratory
              </h4>
              <p className="text-[#7D7987] text-base font-light pb-6 pt-3">
                In this case, the role of the health laboratory is very
                important to do a disease detection...
              </p>
              <div className="flex items-center  ps-3 gap-5">
                <p className="font-semibold text-lg text-[#4089ED]">
                  Read more
                </p>
                <img src={arrow} width={14} height={9} alt="" />
              </div>
            </div>
          </div>
          <div className="box_card w-[350px] h-[512px] text-center rounded-2xl hover:cursor-pointer hover:scale-110 duration-700	transition-all">
            <img src={img1} alt="" width={369} height={246} />
            <div className="ps-3 pe-3">
              <h4 className="font-bold text-xl pt-5">
                Herbal medicines that are safe for consumption
              </h4>
              <p className="text-[#7D7987] text-base font-light pb-6 pt-3">
                Herbal medicine is very widely used at this time because of its
                very good for your health...
              </p>
              <div className="flex items-center  ps-3 gap-5">
                <p className="font-semibold text-lg text-[#4089ED]">
                  Read more
                </p>
                <img src={arrow} width={14} height={9} alt="" />
              </div>
            </div>
          </div>
          <div className="box_card w-[350px] h-[512px] text-center rounded-2xl hover:cursor-pointer hover:scale-110 duration-700	transition-all">
            <img src={img2} alt="" width={369} height={246} />
            <div className="ps-3 pe-4">
              <h4 className="font-bold text-xl pt-5">
                Natural care for healthy facial skin
              </h4>
              <p className="text-[#7D7987] text-base font-light pb-6 pt-3">
                A healthy lifestyle should start from now and also for your skin
                health. There are some...
              </p>
              <div className="flex items-center ps-3 gap-5">
                <p className="font-semibold text-lg text-[#4089ED]">
                  Read more
                </p>
                <img src={arrow} width={14} height={9} alt="" />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn-servis font-bold text-lg text-sky-500 mt-[69px] w-[200px] h-[56px] mb-[300px] "
        >
          View all
        </button>
      </div>
    </section>
  );
}
export default Checkout;
