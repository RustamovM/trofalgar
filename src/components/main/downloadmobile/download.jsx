import "./download.css";
function Download() {
  return (
    <section className="download pt-[229px]">
      <div className="container mx-auto">
        <div className="wrapp w-[400px] ms-10">
          <h1 className="font-bold text-4xl pb-8 ">Download our mobile apps</h1>
          <div className="w-14 h-0.5 bg-black mb-8 rounded-md"></div>
          <p className="text-[#7D7987] text-xl font-normal pb-[45px]">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <button className="px-10 w-[200px] h-[56px] text-white font-bold bg-[#458FF6] rounded-3xl">
            Download
          </button>
        </div>
      </div>
    </section>
  );
}
export default Download;
