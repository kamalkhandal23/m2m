import qr from "../../assets/icons/qr.png";
import playstore from "../../assets/icons/playstore.svg";
import appstore from "../../assets/icons/appstore.svg";

export default function ReadyToDiveSection() {
  return (
    <section className="bg-[#0c2e4f] py-16">

      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">

        {/* left content */}
        <div className="text-white max-w-[520px]">

          <h2 className="text-[30px] font-semibold mb-4">
            Ready To Dive In?
          </h2>

          <p className="text-[14px] opacity-80 leading-relaxed">
            It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout.
          </p>

        </div>


        {/* right download card */}
        <div className="bg-white rounded-xl p-6 flex items-center gap-6">

          <img src={qr} className="w-[80px]" />

          <div className="flex flex-col gap-3">

            <img src={playstore} className="w-[140px]" />

            <img src={appstore} className="w-[140px]" />

          </div>

        </div>

      </div>

    </section>
  );
}