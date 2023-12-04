import React from "react";

import FoundingStory from "../assets/FoundingStory.jpg"
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="">
      <section className="">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center">
          <header className="mx-auto py-20 text-3xl font-semibold lg:w-[70%]">
          <h1 className="bg-gradient-to-b from-[#2e973c] via-[#07bb94] to-[#A6FFCB] text-transparent bg-clip-text font-bold text-5xl">
          Welcome to OXYGARDEN
            </h1>
             Nurturing Health Through Indoor Oxygen Plants
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Feel free to customize it based on the tone and style you prefer
              for your website. The title aims to convey a sense of wellness,
              care, and the positive impact that indoor oxygen plants can have
              on health and the living environment.
            </p>
          </header>
        </div>
      </section>
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                In 2020, amidst the challenges of the COVID-19 pandemic,
                OXYGARDEN emerged as a vision to transform indoor spaces into
                sanctuaries of well-being. Fueled by a profound belief in the
                healing power of nature, the founders recognized the importance
                of indoor oxygen plants in promoting health and serenity.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                OXYGARDEN was born from a commitment to provide accessible and
                sustainable solutions, empowering individuals to seamlessly
                integrate these green companions into their lives and create
                oxygen-rich havens within their homes.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767] w-[750px] h-[350px]"
              />

            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                To be the beacon of health and vitality in every home, fostering
                well-being and resilience. OXygarden envisions a world where the
                life-giving essence of indoor oxygen plants is embraced by all,
                creating spaces that inspire rejuvenation and harmony. It
                emphasizes empowerment, transformation, and a focus on the
                positive impact these plants can have on individuals and their
                surroundings.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                To provide accessible and sustainable solutions for a healthier
                living environment by raising awareness about the vital role of
                indoor oxygen plants. In response to the impact of the COVID-19
                era, OXygarden empowers individuals with knowledge and resources
                to seamlessly integrate these plants, enhancing air quality,
                promoting mental well-being, and creating oxygen-rich havens
                within homes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
