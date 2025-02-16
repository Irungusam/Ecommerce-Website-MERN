import React from "react";
import { Title } from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            reiciendis et tempore numquam possimus quisquam aspernatur
            voluptatibus, illum mollitia aliquid?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            asperiores odio dolorum ipsum qui ab neque eius, adipisci, atque
            iure minus consectetur! Dolorem, perspiciatis quod.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nobis pariatur incidunt culpa ab recusandae?
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assuarance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sed
            aliquid. Molestias, consequuntur! Quo fugit vitae perspiciatis ipsa?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sed
            aliquid. Molestias, consequuntur! Quo fugit vitae perspiciatis ipsa?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sed
            aliquid. Molestias, consequuntur! Quo fugit vitae perspiciatis ipsa?
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
