
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Pagination } from "swiper";

const Portfolio = () => {
  return (
    <div className="div-menu">
      <div className="About-Header">
        <p className="text-center textmenu-header">Portfolio</p>
      </div>
   
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://s3.catalog-yupin.com/MistineImages/products/44359.jpg.webp" className="img-product"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://s3.catalog-yupin.com/MistineImages/products/44359.jpg.webp" className="img-product"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://s3.catalog-yupin.com/MistineImages/products/44359.jpg.webp" className="img-product"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://s3.catalog-yupin.com/MistineImages/products/44359.jpg.webp" className="img-product"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://s3.catalog-yupin.com/MistineImages/products/44359.jpg.webp" className="img-product"/>

        </SwiperSlide>
        <SwiperSlide>
        <img src="https://s3.catalog-yupin.com/MistineImages/products/44359.jpg.webp" className="img-product"/>

        </SwiperSlide>
      </Swiper>
      </div>
  )
}

export default Portfolio