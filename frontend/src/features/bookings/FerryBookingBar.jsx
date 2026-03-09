import {
    ArrowLeftRight,
    User,
    Baby,
    PawPrint,
    Car,
    Bike,
    Bus,
    Megaphone,
} from "lucide-react";

export default function FerryBookingBar() {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-[8rem] z-30 w-full max-w-[1100px] px-4">

            {/* Tabs */}
            <div className="flex gap-2 mb-4 ml-2">

                <button className="bg-[#0c3f57] text-white px-6 py-2 rounded-full text-sm font-medium">
                    One Way
                </button>

                <button className="bg-[#f1f5f9] text-gray-700 px-6 py-2 rounded-full text-sm font-medium">
                    Round Trip
                </button>

            </div>

            {/* Schedule Notice */}
            <div className="absolute right-0 top-2 flex items-center gap-2 text-white text-sm">

                <div className="w-4 h-4 border-2 border-white rounded-full"></div>

                <span>Schedule is live till 27th January 2026.</span>

            </div>

            {/* Booking Bar */}
            <div className="relative flex items-stretch bg-[#f4f6f8] rounded-[24px] border border-[#e5e7eb] shadow-lg">

                {/* From + To */}
                <div className="flex items-center gap-6 px-6 py-4 border-r border-[#d1d5db] w-[250px]">

                    <div>
                        <p className="text-xs text-gray-500">From</p>
                        <p className="font-semibold text-[#1f4c66]">Mumbai</p>
                    </div>

                    <div className="text-gray-400 mt-4">
                        <ArrowLeftRight size={18} />
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">To</p>
                        <p className="font-semibold text-[#1f4c66]">Mandwa</p>
                    </div>

                </div>

                {/* Depart */}
                <div className="px-6 py-4 border-r border-[#d1d5db] w-[150px]">

                    <p className="text-xs text-gray-500">Depart</p>

                    <p className="font-semibold text-[#1f4c66]">
                        12 Jan 2026
                    </p>

                </div>

                {/* Return */}
                <div className="px-6 py-4 border-r border-[#d1d5db] w-[150px]">

                    <p className="text-xs text-gray-500">Return</p>

                    <p className="font-semibold text-[#1f4c66]">
                        15 Jan 2026
                    </p>

                </div>

                {/* Passengers */}
                <div className="px-6 py-4 border-r border-[#d1d5db] w-[200px]">

                    <p className="text-xs text-gray-500 mb-1">
                        Passengers
                    </p>

                    <div className="flex gap-4 text-[#1f4c66]">

                        <div className="flex items-center gap-1">
                            <User size={18} />
                            <span>5</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Baby size={18} />
                            <span>1</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <PawPrint size={18} />
                            <span>2</span>
                        </div>

                    </div>

                </div>

                {/* Vehicles */}
                <div className="px-6 py-4 border-r border-[#d1d5db] w-[220px]">

                    <p className="text-xs text-gray-500 mb-1">
                        Vehicles
                    </p>

                    <div className="flex gap-4 text-[#1f4c66]">

                        <div className="flex items-center gap-1">
                            <Car size={18} />
                            <span>2</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Bike size={18} />
                            <span>0</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Bike size={18} />
                            <span>1</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Bus size={18} />
                            <span>1</span>
                        </div>

                    </div>

                </div>

                {/* Search */}
                <button className="bg-[#123f5a] text-white px-10 flex items-center justify-center font-semibold text-sm rounded-r-[24px]">
                    SEARCH
                </button>

            </div>

            {/* Announcements */}
            <div className="absolute right-6 top-[170px]">

                <div className="relative inline-block">

                    <div className="absolute -top-2 -left-2 bg-white rounded-full p-1 shadow z-10">
                        <Megaphone size={16} className="text-pink-500" />
                    </div>

                    <button className="border border-white text-white px-6 py-2 rounded-lg bg-white/10 backdrop-blur">
                        ANNOUNCEMENTS
                    </button>
                </div>

            </div>

        </div>
    );
}