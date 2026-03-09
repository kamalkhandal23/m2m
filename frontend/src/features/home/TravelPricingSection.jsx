import { User, Bike, PawPrint, Car, Bus } from "lucide-react";
import video from "../../assets/images/Main-Video.png";

export default function TravelPricingSection() {
  return (
    <section className="bg-[#eef3f7] py-24">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-[36px] font-semibold text-[#0c3f57] mb-16">
          Traveling to Alibaug Made Easy & Affordable
        </h2>

        {/* Pricing row */}
        <div className="grid grid-cols-6 border-t border-b border-gray-300">

          {/* passengers */}
          <div className="flex flex-col items-center py-8 gap-2 border-r border-gray-300">

            <User className="text-[#1b7fc3]" size={26} />

            <p className="text-[#1b7fc3] font-semibold text-[20px]">
              ₹400 <span className="text-gray-500 text-sm font-normal">onwards</span>
            </p>

            <p className="text-gray-700 font-medium">
              Passengers
            </p>

          </div>

          {/* 2 wheelers */}
          <div className="flex flex-col items-center py-8 gap-2 border-r border-gray-300">

            <Bike className="text-[#1b7fc3]" size={26} />

            <p className="text-[#1b7fc3] font-semibold text-[20px]">
              ₹210 <span className="text-gray-500 text-sm font-normal">onwards</span>
            </p>

            <p className="text-gray-700 font-medium">
              2 Wheelers
            </p>

          </div>

          {/* pets */}
          <div className="flex flex-col items-center py-8 gap-2 border-r border-gray-300">

            <PawPrint className="text-[#1b7fc3]" size={26} />

            <p className="text-[#1b7fc3] font-semibold text-[20px]">
              ₹310 <span className="text-gray-500 text-sm font-normal">onwards</span>
            </p>

            <p className="text-gray-700 font-medium">
              Pets
            </p>

          </div>

          {/* 4 wheelers */}
          <div className="flex flex-col items-center py-8 gap-2 border-r border-gray-300">

            <Car className="text-[#1b7fc3]" size={26} />

            <p className="text-[#1b7fc3] font-semibold text-[20px]">
              ₹1020 <span className="text-gray-500 text-sm font-normal">onwards</span>
            </p>

            <p className="text-gray-700 font-medium">
              4 Wheelers
            </p>

          </div>

          {/* bicycles */}
          <div className="flex flex-col items-center py-8 gap-2 border-r border-gray-300">

            <Bike className="text-[#1b7fc3]" size={26} />

            <p className="text-[#1b7fc3] font-semibold text-[20px]">
              ₹110 <span className="text-gray-500 text-sm font-normal">onwards</span>
            </p>

            <p className="text-gray-700 font-medium">
              Bicycles
            </p>

          </div>

          {/* buses */}
          <div className="flex flex-col items-center py-8 gap-2">

            <Bus className="text-[#1b7fc3]" size={26} />

            <p className="text-[#1b7fc3] font-semibold text-[20px]">
              ₹4500 <span className="text-gray-500 text-sm font-normal">onwards</span>
            </p>

            <p className="text-gray-700 font-medium">
              Buses
            </p>

          </div>

        </div>

        {/* Video */}
<div className="mt-16 flex justify-center">

  <img
    src={video}
    className="w-[820px] rounded-[22px] shadow-xl"
  />

</div>

      </div>

    </section>
  );
}