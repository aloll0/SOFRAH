"use client";

import Image from "next/image";
import style from "./Hero.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import Button from "../ui/Button";

// CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroImage = [
  {
    src: "/hero1.png",
    alt: "Hero Image",
    width: 1180,
    height: 470,
    className: `hero-image ${style.heroImage}`,
  },
  {
    src: "/hero2.png",
    alt: "Hero Image",
    width: 1180,
    height: 470,
    className: `hero-image ${style.heroImage}`,
  },
  {
    src: "/hero3.png",
    alt: "Hero Image",
    width: 1180,
    height: 470,
    className: `hero-image ${style.heroImage}`,
  },
];

const heroText = {
  title: "نكهاتنا المميزة توصل لسفرتك بكل حب",
  description:
    "استمتع بأشهى الأطباق الطازجة، مُحضّرة بعناية، تجمع بين الوصفات التقليدية والنكهات العصرية",
    btn: "اطلب الآن",
};

export default function Hero() {
  return (
    <div>
      <section className={`hero-section ${style.heroSection}`}>
        <div className={`container ${style.container}`}>
          <div className={`content ${style.content}`}>
            <h1 className="text-4xl font-bold text-center mb-4">
              {heroText.title}
            </h1>
            <p className="text-[20px] text-center text-gray-700 mb-6">
              {heroText.description}
            </p>
            <Button text={heroText.btn} />
          </div>
          <div className={`image-wrapper ${style.imageWrapper}`}>
            <Swiper
              modules={[Navigation, Pagination, EffectFade]}
              navigation
              pagination={{ clickable: true }}
              loop={true} 
              spaceBetween={20}
              slidesPerView={1}
              effect="fade"
            >
              {heroImage.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className={style.heroImageWrapper}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className={image.className}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}