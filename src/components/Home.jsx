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
    <div className="p-6 flex items-center justify-center mt-22  ">
      <div className="w-[400px]  bg-white p-1 rounded-2xl">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="rounded shadow-xl"
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
      <div className="content ml-4 text-white">
        <h1 className=" snap text-4xl text-pink-500 pb-2">
        
          "DreamSnap – Where Imagination Meets AI!"
        </h1>
        <p className="ms-5 text-[20px]/loose">
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
