import passengers from "../../assets/icons/passengers-sailed.png";
import vehicles from "../../assets/icons/vehicles-transported.png";
import twowheeler from "../../assets/icons/2-wheeler-transported.png";
import punctuality from "../../assets/icons/punctuality.png";

export default function MilestonesSection() {
  return (
    <section className="bg-[#f6f8fb] py-28 relative">

      <div className="max-w-[1400px] mx-auto px-6 relative">

        {/* title */}
        <h2 className="text-center text-[32px] font-semibold text-[#0c3f57] mb-24">
          Milestones
        </h2>

        {/* SVG connector */}
        <svg
          className="absolute top-[120px] left-0 w-full pointer-events-none"
          viewBox="0 0 1437 380"
          fill="none"
        >
          <path
            d="M0 109.059H32.1853C72.187 109.059 104.615 141.486 104.615 181.488V305.653C104.615 345.654 137.043 378.082 177.044 378.082H343.124C383.125 378.082 415.553 345.655 415.553 305.653V73.8787C415.553 33.877 447.981 1.44922 487.983 1.44922H643.891C683.893 1.44922 716.32 33.877 716.32 73.8786V305.653C716.32 345.654 748.748 378.082 788.75 378.082H946.111C986.113 378.082 1018.54 345.655 1018.54 305.653V73.8787C1018.54 33.877 1050.97 1.44922 1090.97 1.44922H1229.44C1269.44 1.44922 1301.87 33.877 1301.87 73.8786V185.894C1301.87 225.896 1334.3 258.323 1374.3 258.323H1437"
            stroke="#137DC5"
            strokeWidth="2.9"
            strokeDasharray="5.79 5.79"
          />
        </svg>

        {/* milestones */}
        <div className="grid grid-cols-4 relative z-10">

          {/* 1 */}
          <div className="flex flex-col items-center left-[50px]">
            <img src={passengers} className="w-[150px]" />
            <p className="mt-6 text-gray-600 text-sm max-w-[170px] text-center">
              1.5 million passengers sailed
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col items-center mt-[80px]">
            <img src={vehicles} className="w-[150px]" />
            <p className="mt-6 text-gray-600 text-sm max-w-[170px] text-center">
              250k+ vehicles transported
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-col items-center">
            <img src={twowheeler} className="w-[150px]" />
            <p className="mt-6 text-gray-600 text-sm max-w-[170px] text-center">
              75k+ 2 wheelers transported
            </p>
          </div>

          {/* 4 */}
          <div className="flex flex-col items-center mt-[80px]">
            <img src={punctuality} className="w-[150px]" />
            <p className="mt-6 text-gray-600 text-sm max-w-[170px] text-center">
              99% punctuality record
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}