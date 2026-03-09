import hero from "../../assets/images/bg-2-mobile-3-1.png"
import FerryBookingBar from "../bookings/FerryBookingBar";
import { Megaphone } from "lucide-react";
export default function HeroSection() {
    return (
        <section
            className="relative h-[760px] pt-[80px] w-full bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage: `url(${hero})`,
                backgroundPosition: "center",
            }}
        >

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            <FerryBookingBar />


            {/* hero content */}
            <div className="relative z-10 max-w-[1200px] mx-auto px-8 h-full flex items-end pb-40">

                <div className="flex justify-between items-end w-full text-white">

                    {/* LEFT SIDE */}
                    <div className="text-white max-w-[1100px]">

                        <h2 className="text-[42px] tracking-wide mb-3">
                            Leave The Road Behind In 2026, Sail Into The Calm With
                        </h2>

                        <div className="flex items-center justify-between">

                            <h1 className="text-[64px] font-semibold leading-none">
                                M2M Ferries
                            </h1>
                            <button className="bg-white text-[#0c3f57] px-6 py-3 rounded-full font-medium flex items-center gap-2">
                                CHECK SCHEDULE
                                <span className="bg-[#0c3f57] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                                    →
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE BUTTON */}


                </div>

            </div>

            {/* slider indicator */}
            {/* curved white slider container */}
            {/* slider pill */}
            {/* slider indicator */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50">

  <div className="relative flex justify-center">

    {/* white curved background */}
    <div className="bg-white w-[200px] h-[30px] rounded-t-[100px] shadow-md flex items-center justify-center">

      <div className="flex gap-3">
        <span className="w-[8px] h-[8px] bg-[#0c3f57] rounded-full"></span>
        <span className="w-[8px] h-[8px] bg-gray-300 rounded-full"></span>
        <span className="w-[8px] h-[8px] bg-gray-300 rounded-full"></span>
        <span className="w-[8px] h-[8px] bg-gray-300 rounded-full"></span>
        <span className="w-[8px] h-[8px] bg-gray-300 rounded-full"></span>
      </div>

    </div>

  </div>

</div>
            <div className="absolute right-20 bottom-112">

                <div className="relative inline-block">

                    {/* Megaphone icon */}
                    <div className="absolute -top-2 -left-2 bg-white rounded-full p-1 shadow-md z-40 -rotate-25">
                        <Megaphone size={17} className="text-pink-500" />
                    </div>

                    {/* Button */}
                    <button className="border border-white/80 text-white px-6 py-2 rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition">
                        ANNOUNCEMENTS
                    </button>

                </div>

            </div>

        </section>

    );
}