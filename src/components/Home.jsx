import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/sampleimage/img1.png";
import img2 from "../assets/sampleimage/img2.png";
import img3 from "../assets/sampleimage/img3.png";
import img4 from "../assets/sampleimage/img4.png";
import img5 from "../assets/sampleimage/img5.png";
import img6 from "../assets/sampleimage/img6.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  return (
   <div className="p-4 sm:p-6 flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
  {/* Swiper Container */}
  <div className="w-full max-w-md bg-white p-2 rounded-2xl shadow-lg">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="rounded"
    >
      {[img1, img2, img3, img4, img5, img6].map((num) => (
        <SwiperSlide key={num}>
          <img
            src={num}
            alt={`Slide ${num}`}
            className="w-full h-auto rounded-2xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Text Content */}
  <div className="w-full max-w-xl text-white">
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-pink-500 pb-4 text-center md:text-left">
      "DreamSnap – Where Imagination Meets AI!"
    </h1>
    <p className="text-base sm:text-lg md:text-xl leading-relaxed px-2 md:px-0 text-center md:text-left">
      Just type your idea, and watch it come to life as a vivid image.
      Whether you're a designer, creator, student, storyteller, or just
      someone with a wild imagination, DreamSnap transforms your thoughts
      into stunning visuals with the power of AI. No design skills needed —
      simply describe what you see in your mind, and let our intelligent
      engine paint it into reality. From concept art and digital scenes to
      fantasy worlds and product mockups, DreamSnap empowers everyone to
      create, explore, and express their ideas in seconds.
    </p>
  </div>
</div>

  );
};

export default Home;
