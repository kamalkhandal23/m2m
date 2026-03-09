import ferry from "../../assets/images/red-ferry.png";

export default function AboutSection() {
  return (
    <section className="bg-[#f6f8fb] py-24">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-[32px] font-semibold text-[#0c3f57] mb-16">
          About M2M Ferries
        </h2>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-10 grid grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={ferry}
              className="w-full h-[320px] object-contain"
            />
          </div>

          {/* Content */}
          <div>

            <h3 className="text-[28px] font-semibold text-[#0c3f57] mb-6">
              Redefining Ferry Travel In India
            </h3>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
              Experience the joy of Maharashtra’s first Ro-Pax ferry! Leave
              roadtrip hassles behind and sail from Mumbai to Mandwa in under
              60 minutes with your vehicle. Enjoy the sea breeze, sunshine,
              and scenic Mumbai Harbour.
            </p>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
              We welcome up to 780 passengers and 120 vehicles, including cars,
              buses, bikes, and cycles. Your furry friends are invited too,
              with a special area for them on board.
            </p>

            <button className="bg-[#0c3f57] text-white px-6 py-3 rounded-lg text-sm hover:bg-[#092f42] transition">
              LEARN MORE
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}