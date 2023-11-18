import lupa from "../../../assets/lupa.svg";
import dori from "../../../assets/Frame.svg";
import planshet from "../../../assets/doska.svg";
import aptechk from "../../../assets/aptech.svg";
import aptechka from "../../../assets/aptechka.svg";
import note from "../../../assets/noot.svg";
import "./servise.css";
const mockServises = [
  {
    img: lupa,
    title: "Search doctor",
    text: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },
  {
    img: dori,
    title: "Online pharmacy",
    text: "Buy  your medicines with our mobile application with a simple delivery system",
  },
  {
    img: planshet,
    title: "Consultation",
    text: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    img: aptechk,
    title: "Details info",
    text: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    img: aptechka,
    title: "Emergency care",
    text: "You can get 24/7 urgent care for yourself or your children and your",
  },
  {
    img: note,
    title: "Tracking",
    text: "Track and save your medical history and health data ",
  },
];
function Servise() {
  return (
    <section className=" servise mt-[113px]">
      <div className="container mx-auto">
        <h3 className="font-bold text-3xl text-center">Our services</h3>
        <div className="my-6 w-[56px] h-0.5 rounded-s-md bg-black mx-auto"></div>
        <p className="text-[#7D7987] text-2xl font-light text-center w-[952px] mx-auto">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
        <div className="box pt-[80px] grid grid-cols-3 gap-16 ms-10 ">
          {mockServises.map((el, index) => (
            <div
              key={index}
              className="wrap_box w-[350px] h-[354px] ps-10 py-10 hover:cursor-pointer"
            >
              <img src={el.img} width={91} height={90} alt="lupa" />
              <h4 className="font-bold text-lg mt-6 w-[160px] h-[56px]">
                {el.title}
              </h4>
              <p className="text-[#7D7987] font-light text-base w-[266px] h-[84px]">
                {el.text}
              </p>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="btn-servis font-bold text-lg text-sky-500 mt-[69px] w-[200px] h-[56px] "
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
export default Servise;
