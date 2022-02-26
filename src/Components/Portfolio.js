import { Swiper, SwiperSlide } from "swiper/react";
import React, { useLayoutEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper";
import img1 from '../asset/img/1.jpg'
import img2 from '../asset/img/2.jpg'
import img3 from '../asset/img/3.jpg'
import img4 from '../asset/img/4.jpg'

import Fancybox from "./Fancybox";


import CardPortfolio from "./CardPortfolio";

const Portfolio = () => {
  const [size, setSize] = useState([0, 0]);
  const useWindowSize = () => {
    useLayoutEffect(() => {
      const updateSize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    console.log(size[0]);
    return size;
  };

  const ShowWindowDimensions = props => {
    const [width, height] = useWindowSize();
    return (
      <span>
        Window size: {width} x {height}
      </span>
    );
  };

  ShowWindowDimensions();

  return (
    <div className="div-menu">
      <div className="About-Header">
        <p className="text-center textmenu-header">Certifications</p>
      </div>
      {size[0] > 1224 ? (
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
      ) : (
        <div>
          <CardPortfolio />
        </div>
      )}
    </div>
  );
};

export default Portfolio;