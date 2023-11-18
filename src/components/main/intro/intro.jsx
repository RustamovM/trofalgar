import "./intro.css";

function Intro() {
  return (
    <section className="intro pt-[84px] px-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="wrapp w-[445px]">
          <h1 className="font-bold text-5xl mb-6">
            Virtual healthcare for you
          </h1>
          <p className="text-[#7D7987] text-xl font-normal pb-[45px]">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className="px-10 w-[200px] h-[56px] text-white font-bold bg-[#458FF6] rounded-3xl">
            Consult today
          </button>
        </div>
      </div>
    </section>
  );
}
export default Intro;
