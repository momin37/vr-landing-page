import React from "react";

import Users from "./Users";

import Img from "../assets/img/banner-img.png";

const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div>
            <h1
              data-aos="fade-down"
              data-aos-delay="500"
              className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug"
            >
              Let's Explore <br /> Three-Dimentional Visually.
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="600"
              className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0"
            >
              Mollit quis qui elit consectetur aliquip sunt ex. Culpa est ut
              commodo enim ex ea. Ea quis nisi sint irure ex qui.
            </p>
            <div
              data-aos="fade-down"
              data-aos-delay="700"
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none
            lg:justify-start
            "
            >
              <button className="btn">Get it now</button>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-white transition ease-out"
              >
                Explore Devices
              </a>
            </div>
            <Users />
          </div>
          <div data-aos="fade-up" data-aos-delay="800">
            <img src={Img} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
