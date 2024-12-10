import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Swipper = ({data}) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper  ">
    <SwiperSlide>
        <img src={data[0].image} />
    </SwiperSlide>
    <SwiperSlide>
    <img src='https://cdn.zeptonow.com/production///tr:w-1000,ar-1210-700,pr-true,f-auto,q-80/inventory/IMAGE/c55e1c9f-8d21-4153-bf29-46892d57c616-Screenshot_2022-08-26_at_15.35.02.png'  />
    </SwiperSlide>
  </Swiper>
  )
}

export default Swipper