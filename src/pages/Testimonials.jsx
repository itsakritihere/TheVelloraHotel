import "./Testimonials.css";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

import man from "../assets/img/man.jpg";
import man1 from "../assets/img/man1.jpg";
import man3 from "../assets/img/man2.jpg";
import man4 from "../assets/img/men3.jpg";
import woman from "../assets/img/woman1.jpg";
import woman1 from "../assets/img/women2.jpg";



const testimonials = [
  {
    name: "Aryan Sharma",
    place: "Bengaluru",
    img: man,
    quote:
      "The Vellora felt like a true home away from home. Beautiful surroundings and wonderful hospitality.",
  },
  {
    name: "Shreya Desai",
    place: "Dehradun",
    img: woman,
    quote:
      "The perfect place to slow down, relax, and enjoy the beauty of the hills.",
  },
  {
    name: "Rohan Mehta",
    place: "Mumbai",
    img: man1,
    quote:
      "From the misty mornings to the warm bonfires at night, every moment here felt unhurried and special.",
  },
  {
    name: "Ananya Iyer",
    place: "Chennai",
    img: woman1,
    quote:
      "Loved the little details — the staff remembered our names by day two. Genuinely felt looked after.",
  },
  {
    name: "Kabir Khanna",
    place: "Noida",
    img: man3,
    quote:
      "A peaceful stay in Mussoorie with a beautiful atmosphere. Everything felt warm and welcoming.",
  },
  {
    name: "Nitesh Kulkarni",
    place: "Pune",
    img: man4,
    quote:
      "Beautiful property, comfortable rooms, and hospitality that genuinely makes you feel at home.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="section-head">
        <p className="eyebrow">Guest Experiences</p>
        <h2>What Our Guests Say</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={28}
        slidesPerView={1}
        centeredSlides={false}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        breakpoints={{
          640: { slidesPerView: 1.2, centeredSlides: true },
          992: { slidesPerView: 2.3, centeredSlides: false },
          1280: { slidesPerView: 3, centeredSlides: false },
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.name}>
            <div className="testimonial-card">
              <span className="testimonial-quote-mark">“</span>

              <div className="testimonial-avatar">
                <img src={t.img} alt={t.name} />
              </div>

              <div className="testimonial-stars">★★★★★</div>

              <p className="testimonial-text">{t.quote}</p>

              <h4>{t.name}</h4>
              <span className="testimonial-place">{t.place}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;