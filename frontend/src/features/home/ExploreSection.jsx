import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import explore1 from "../../assets/images/m2m-siting.png";
import explore2 from "../../assets/images/m2m-siting.png";
import explore3 from "../../assets/images/m2m-siting.png";

export default function ExploreSection() {
  return (
    <section className="bg-[#f6f8fb] pt-28 pb-12">

  <div className="max-w-[1200px] mx-auto px-6">

    <h2 className="text-center text-[34px] font-semibold text-[#0c3f57] mb-16">
      Explore the World of M2M
    </h2>

    <div className="flex justify-center">

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-[900px] rounded-[22px]"
      >

        <SwiperSlide>
          <img
            src={explore1}
            className="w-full h-[420px] object-cover rounded-[22px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={explore2}
            className="w-full h-[420px] object-cover rounded-[22px]"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={explore3}
            className="w-full h-[420px] object-cover rounded-[22px]"
          />
        </SwiperSlide>

      </Swiper>

    </div>

  </div>

</section>
  );
}