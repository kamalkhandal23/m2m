import {
    ArrowLeftRight,
    User,
    Baby,
    PawPrint,
    Car,
    Bike,
    Bus,
} from "lucide-react";

export default function FerryBookingBar() {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-[110px] z-30 w-full max-w-[1200px] px-4">

            {/* Tabs */}
            <div className="flex gap-2 mb-3">
                <button className="bg-[#0c3f57] text-white px-6 py-2 rounded-full text-sm font-medium">
                    One Way
                </button>

                <button className="bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium shadow">
                    Round Trip
                </button>
            </div>

            {/* Booking Bar */}
            <div className="flex items-center bg-white rounded-[24px] shadow-xl overflow-hidden">

                {/* From + To combined */}
                <div className="flex items-center gap-6 px-6 py-4 border-r w-[260px]">

                    <div>
                        <p className="text-xs text-gray-500">From</p>
                        <p className="font-semibold text-[#0c3f57]">Mumbai</p>
                    </div>

                    {/* swap */}
                    <div className="text-gray-400 mt-4">
                        <ArrowLeftRight size={18} />
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">To</p>
                        <p className="font-semibold text-[#0c3f57]">Mandwa</p>
                    </div>

                </div>

                {/* Depart */}
                <div className="px-6 py-4 border-r w-[150px]">
                    <p className="text-xs text-gray-500">Depart</p>
                    <p className="font-semibold text-[#0c3f57]">12 Jan 2026</p>
                </div>

                {/* Return */}
                <div className="px-6 py-4 border-r w-[150px]">
                    <p className="text-xs text-gray-500">Return</p>
                    <p className="font-semibold text-[#0c3f57]">15 Jan 2026</p>
                </div>

                {/* Passengers */}
                <div className="px-6 py-4 border-r w-[200px]">
                    <p className="text-xs text-gray-500 mb-1">Passengers</p>

                    <div className="flex gap-4 text-[#0c3f57]">

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
                <div className="px-6 py-4 border-r w-[230px]">
                    <p className="text-xs text-gray-500 mb-1">Vehicles</p>

                    <div className="flex gap-4 text-[#0c3f57]">

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

                <div className="absolute  -top-1 bottom-17 left-230 flex items-center gap-2 text-white text-sm">

                    <div className="w-4 h-4 border-2 border-white rounded-full"></div>

                    <span>Schedule is live till 27th January 2026.</span>

                </div>

                {/* Search */}
                <button className="bg-[#0c3f57] text-white px-16 py-8 font-semibold text-sm rounded-r-[24px] flex items-center justify-center">
                    SEARCH
                </button>

            </div>

        </div>
    );
}