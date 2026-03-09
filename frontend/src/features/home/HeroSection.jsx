import hero from "../../assets/images/bg-2-mobile-3-1.png";
import FerryBookingBar from "../bookings/FerryBookingBar";
import { Megaphone } from "lucide-react";

export default function HeroSection() {
    return (
        <section
            className="relative w-full min-h-[760px] bg-cover bg-center"
            style={{ backgroundImage: `url(${hero})` }}
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* container */}
            <div className="relative z-10 max-w-[1320px] mx-auto px-6 h-full flex flex-col">

                {/* BOOKING BAR */}
                <div className="mt-[110px] flex justify-center">
                    <FerryBookingBar />
                </div>

                {/* HERO TEXT */}
                <div className="mt-auto pb-[120px] text-white">

                    <h2 className="text-[50px] mt-140">
                        Leave The Road Behind In 2026, Sail Into The Calm With
                    </h2>

                    <div className="flex items-center justify-between">

                        <h1 className="text-[64px] font-semibold">
                            M2M Ferries
                        </h1>

                        <button className="bg-white text-[#0c3f57] px-6 py-3 rounded-full flex items-center gap-2">
                            CHECK SCHEDULE
                            <span className="bg-[#0c3f57] text-white w-6 h-6 flex items-center justify-center rounded-full">
                                →
                            </span>
                        </button>

                    </div>

                </div>

            </div>

            {/* SLIDER DOTS */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">

                <div className="bg-white w-[200px] h-[30px] rounded-t-[100px] flex items-center justify-center">

                    <div className="flex gap-3">
                        <span className="w-2 h-2 bg-[#0c3f57] rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    </div>

                </div>

            </div>

        </section>
    );
}