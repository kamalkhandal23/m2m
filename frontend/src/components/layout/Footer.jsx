import logo from "../../assets/logo/m2mlogo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0c2e4f] text-white relative pt-24 pb-16">

      {/* wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px]"
          fill="#0c2e4f"
        >
          <path d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,74.7C1120,64,1280,64,1360,64L1440,64L1440,0L0,0Z"></path>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-4 gap-12">

        {/* column 1 */}
        <div>
          <img src={logo} className="w-[120px] mb-6" />

          <p className="text-sm text-gray-300 mb-4">
            Follow Us On
          </p>

          <div className="flex gap-3">
            <div className="w-8 h-8 bg-[#1a4d75] rounded flex items-center justify-center">F</div>
            <div className="w-8 h-8 bg-[#1a4d75] rounded flex items-center justify-center">T</div>
            <div className="w-8 h-8 bg-[#1a4d75] rounded flex items-center justify-center">I</div>
            <div className="w-8 h-8 bg-[#1a4d75] rounded flex items-center justify-center">Y</div>
          </div>
        </div>

        {/* column 2 */}
        <div>
          <h3 className="font-semibold mb-4">
            M2M Mumbai Terminal
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            Ferry Wharf, Bhaucha Dhakka
            Mumbai Port, Mumbai - 400010, MH
          </p>

          <p className="text-cyan-400 mt-3 text-sm cursor-pointer">
            Get Direction
          </p>
        </div>


        {/* column 3 */}
        <div>
          <h3 className="font-semibold mb-4">
            More Links
          </h3>

          <ul className="text-sm text-gray-300 space-y-2">
            <li>About M2M Ferries</li>
            <li>In The Spotlight</li>
            <li>Travel Guide</li>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>


        {/* column 4 */}
        <div>
          <h3 className="font-semibold mb-4">
            Contact Us
          </h3>

          <p className="text-sm text-gray-300 mb-2">
            +91 8291902662
          </p>

          <p className="text-sm text-gray-300">
            support@m2mferries.com
          </p>
        </div>

      </div>

    </footer>
  );
}