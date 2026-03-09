import voyage1 from "../../assets/images/voyage1.jpg"
import voyage2 from "../../assets/images/voyage2.jpg"
import voyage3 from "../../assets/images/voyage3.jpg"
import voyage4 from "../../assets/images/voyage4.jpg"

import { ArrowUpRight, Heart } from "lucide-react";

export default function VoyageSection() {
  return (
    <section className="bg-[#f6f8fb] py-24">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* title */}
        <h2 className="text-center text-[30px] font-semibold text-[#0c3f57] mb-16">
          A Glimpse Of The Voyage
        </h2>

        {/* grid layout */}
        <div className="grid grid-cols-3 grid-rows-2 gap-6">

          {/* big card */}
          <VoyageCard
            image={voyage1}
            title="Seating Areas"
            className="row-span-2"
          />

          {/* big card */}
          <VoyageCard
            image={voyage2}
            title="Oceanic Views"
            className="row-span-2"
          />

          {/* small */}
          <VoyageCard
            image={voyage3}
            title="M2M - PRINCESS"
          />

          {/* small */}
          <VoyageCard
            image={voyage4}
            title="Explore Now"
          />

        </div>

      </div>

    </section>
  );
}



function VoyageCard({ image, title, className }) {
  return (
    <div className={`group relative rounded-2xl overflow-hidden shadow-lg ${className}`}>

      {/* image */}
      <img
        src={image}
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>


      {/* title bottom */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">

        <span className="text-white text-sm font-medium">
          {title}
        </span>

        <div className="bg-[#2ec5ff] p-2 rounded-full">
          <ArrowUpRight size={16} className="text-white" />
        </div>

      </div>


      {/* heart icon */}
      <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
        <Heart size={16} className="text-red-500"/>
      </div>

    </div>
  );
}