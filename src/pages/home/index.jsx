import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import BTC from "../../assets/images/btc.png";
import Wrapper from "../../components/UI/wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getCoinsApi } from "../../api/coinsapi";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getCoinsApi().then((res) => setData(res.data.data));
  }, []);
  console.log(data);
  return (
    <div className={styles.background}>
      <Wrapper>
        {data?.map((item, index) => (
          <div className={styles.control} key={index}>
            <div className={styles.name}>
              <h2>{item.rank}.</h2>
              <h2>`{item.name}`</h2>
            </div>
            <div className={styles.grids}>
              <Swiper
              modules={[Navigation]}
                className={styles.price}
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                  0: {
                    spaceBetween: 50,
                    slidesPerView: 1,
                  },
                  768: {
                    spaceBetween: 50,
                    slidesPerView: 5,
                  },
                  992: {
                    spaceBetween: 50,
                    slidesPerView: 3,
                  },
                }}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide className={styles.td1}>
                  {parseFloat(item.priceUsd).toFixed(2)}$
                </SwiperSlide>

                <SwiperSlide className={styles.td2}>
                  {parseFloat(item.changePercent24Hr).toFixed(2)}%
                </SwiperSlide>
                <SwiperSlide className={styles.td3}>
                  {parseFloat(item.volumeUsd24Hr).toFixed(2)}$
                </SwiperSlide>
                <SwiperSlide className={styles.td4}>
                  {parseFloat(item.supply).toFixed(2)}$
                </SwiperSlide>
              </Swiper>
            </div>

            <div className={styles.info}>
              <h2>{item.info}</h2>
            </div>
          </div>
        ))}
      </Wrapper>
    </div>
  );
};

export default Home;
