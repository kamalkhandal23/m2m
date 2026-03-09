import { DollarSign, ShieldCheck, FilePen } from "lucide-react";
import ferry from "../../assets/images/red-ferry.png";

import curveLeft from "../../assets/styles/curved-line-left.svg";
import curveRight from "../../assets/styles/curved-line-right.svg";

export default function WhyChooseSection() {
  return (
    <section className="relative bg-[#f6f8fb] pt-28 pb-12 overflow-hidden">

      {/* background ferry */}
      <img
        src={ferry}
        alt=""
        className="absolute left-0 bottom-100 w-[520px] opacity-20 pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* heading */}
        <h2 className="text-center text-[36px] font-semibold text-[#0c3f57]">
          Why Travelers Choose M2M Ferries
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-[720px] mx-auto leading-relaxed">
          We prioritize your peace of mind with a booking experience that is simple,
          secure, and completely transparent every step of the way.
        </p>


        {/* ICONS + CURVES */}
        <div className="relative mt-28">

          {/* curves */}
          <img
            src={curveLeft}
            alt=""
            className="absolute top-[10px] left-[240px] w-[255px] opacity-80 pointer-events-none"
          />

          <img
            src={curveRight}
            alt=""
            className="absolute top-[10px] right-[240px] w-[255px] opacity-80 pointer-events-none"
          />


          {/* features */}
          <div className="grid grid-cols-3 gap-24 text-center">

            {/* Feature 1 */}
            <div className="flex flex-col items-center">

              <div className="w-20 h-20 rounded-2xl bg-[#e6eef6] flex items-center justify-center mb-6">
                <DollarSign className="text-[#0c3f57]" size={30} />
              </div>

              <h3 className="text-xl font-semibold text-[#0c3f57]">
                No hidden fees
              </h3>

              <p className="text-gray-600 mt-3 max-w-[220px]">
                Transparent pricing with no hidden fees.
              </p>

            </div>


            {/* Feature 2 */}
            <div className="flex flex-col items-center">

              <div className="w-20 h-20 rounded-2xl bg-[#e6eef6] flex items-center justify-center mb-6">
                <ShieldCheck className="text-[#0c3f57]" size={30} />
              </div>

              <h3 className="text-xl font-semibold text-[#0c3f57]">
                Instant booking
              </h3>

              <p className="text-gray-600 mt-3 max-w-[220px]">
                Get confirmation right after you reserve.
              </p>

            </div>


            {/* Feature 3 */}
            <div className="flex flex-col items-center">

              <div className="w-20 h-20 rounded-2xl bg-[#e6eef6] flex items-center justify-center mb-6">
                <FilePen className="text-[#0c3f57]" size={30} />
              </div>

              <h3 className="text-xl font-semibold text-[#0c3f57]">
                Flexibility
              </h3>

              <p className="text-gray-600 mt-3 max-w-[220px]">
                Flexible options with free cancellation on many listings.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}