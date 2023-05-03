import React from "react";
import "./Testimonial.css";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
function Testimonial() {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum in graphical and textual context refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin dolorem ipsum roughly translated as pain itself Advertisements",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum in graphical and textual context refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin dolorem ipsum roughly translated as pain itself Advertisements",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum in graphical and textual context refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin dolorem ipsum roughly translated as pain itself Advertisements",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum in graphical and textual context refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin dolorem ipsum roughly translated as pain itself Advertisements",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional work</span>
        <span>for me...</span>
      </div>
      <div
        className="blur t-blur1"
        style={{ background: "var(--purple)" }}
      ></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Testimonial;
