import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from 'swiper/modules'

import "swiper/css";
const Header = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.first}>
            <div className={styles.name}>
              <h2>Name</h2>
            </div>

            <Swiper
              className={styles.price}
              spaceBetween={50}
              modules={[Navigation]}
              slidesPerView={3}
              navigation

              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className={styles.td1}>Price</SwiperSlide>
              <SwiperSlide className={styles.td2}>Change</SwiperSlide>
              <SwiperSlide className={styles.td3}>Volume</SwiperSlide>
              <SwiperSlide className={styles.td4}>Cap</SwiperSlide>
       
            </Swiper>
            <div className={styles.info}>
              <h2>Info</h2>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
