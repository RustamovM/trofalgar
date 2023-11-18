import "./provide.css";
function Provides() {
  return (
    <section className="provide pt-[220px]">
      <div className="container mx-auto flex item-center justify-end">
        <div className="wrapp w-[445px]">
          <h1 className="font-bold text-4xl pb-8 ">
            Leading healthcare providers
          </h1>
          <div className="w-14 h-0.5 bg-black mb-8 rounded-md"></div>
          <p className="text-[#7D7987] text-xl font-normal pb-[45px]">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="px-10 w-[200px] h-[56px] text-white font-bold bg-[#458FF6] rounded-3xl">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
export default Provides;
