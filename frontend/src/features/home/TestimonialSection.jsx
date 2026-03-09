import avatar1 from "../../assets/icons/user1.png";
import avatar2 from "../../assets/icons/user2.png";
import avatar3 from "../../assets/icons/user3.png";

export default function TestimonialSection() {
  return (
    <section className="bg-[#f6f8fb] py-24">

      <div className="max-w-[1200px] mx-auto px-6">

        <h2 className="text-center text-[30px] font-semibold text-[#0c3f57] mb-16">
          What Our Travelers Say
        </h2>


        <div className="grid grid-cols-3 gap-8">

          {/* card 1 */}
          <div className="bg-[#e9f2f1] rounded-xl p-6">

            <div className="text-yellow-400 mb-4">★★★★★</div>

            <p className="text-gray-600 text-sm mb-6">
              A pleasant and smooth ferry experience with easy online booking,
              quick boarding, tasty snacks, and efficient embarkation.
            </p>

            <div className="flex items-center gap-3">

              <img src={avatar1} className="w-10 h-10 rounded-full" />

              <div>
                <p className="font-semibold text-sm">Tejas Parekh</p>
                <p className="text-xs text-gray-500">Designation / City</p>
              </div>

            </div>

          </div>


          {/* card 2 */}
          <div className="bg-[#d9e6ef] rounded-xl p-6">

            <div className="text-yellow-400 mb-4">★★★★★</div>

            <p className="text-gray-600 text-sm mb-6">
              A unique and memorable ferry ride with beautiful sunset views,
              comfortable seating, clean washrooms and scenic surroundings.
            </p>

            <div className="flex items-center gap-3">

              <img src={avatar2} className="w-10 h-10 rounded-full" />

              <div>
                <p className="font-semibold text-sm">Suzana F</p>
                <p className="text-xs text-gray-500">Designation / City</p>
              </div>

            </div>

          </div>


          {/* card 3 */}
          <div className="bg-[#e3e7ef] rounded-xl p-6">

            <div className="text-yellow-400 mb-4">★★★★☆</div>

            <p className="text-gray-600 text-sm mb-6">
              A well-maintained ferry offering great ambience, modern
              amenities, punctual departures and scenic views.
            </p>

            <div className="flex items-center gap-3">

              <img src={avatar3} className="w-10 h-10 rounded-full" />

              <div>
                <p className="font-semibold text-sm">Sudesh Tiwari</p>
                <p className="text-xs text-gray-500">Designation / City</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}