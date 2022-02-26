import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards } from "swiper";
import img1 from "../asset/img/1.jpg";
import img2 from "../asset/img/2.jpg";
import img3 from "../asset/img/3.jpg";
import img4 from "../asset/img/4.jpg";
import Fancybox from "./Fancybox";
const CardPortfolio = () => {
  return (
    <div className="mb-3">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Fancybox options={{ infinite: true }}>
            <img src={img1} className="img-product" data-fancybox="gallery" data-src="https://sv1.picz.in.th/images/2022/02/26/rqRzo8.png" />

            </Fancybox>
        </SwiperSlide>
        <SwiperSlide>
        <Fancybox options={{ infinite: true }}>
          <img src={img2} className="img-product"  data-fancybox="gallery" data-src="https://sv1.picz.in.th/images/2022/02/26/rqRYwz.png" />
          </Fancybox>
        </SwiperSlide>
        <SwiperSlide>
        <Fancybox options={{ infinite: true }}>
          <img src={img3} className="img-product"  data-fancybox="gallery" data-src="https://sv1.picz.in.th/images/2022/02/26/rqR4JR.png" />
          </Fancybox>
        </SwiperSlide>
        <SwiperSlide>
        <Fancybox options={{ infinite: true }}>
          <img src={img4} className="img-product"  data-fancybox="gallery" data-src="https://sv1.picz.in.th/images/2022/02/26/rqRtIe.jpg" />
          </Fancybox>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default CardPortfolio;
