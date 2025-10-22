import { studyList } from "@/entities/study";
import { StudyItem } from "./ui/StudyItem";
import { memo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const StudyCarouselComp = () => {
  return (
    <Swiper
      slidesPerView={1}
      autoHeight
      rewind
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      modules={[Navigation, Pagination, Autoplay]}
    >
      {studyList.map((study) =>
        <SwiperSlide key={study.title}>
          <StudyItem {...study} />
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export const StudyCarousel = memo(StudyCarouselComp);
