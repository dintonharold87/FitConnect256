import React from 'react'
import hero from "../assets/images/hero.png";
const HeroSection = () => {
  return (
    <section id="hero" className="bg-secondary-100 mt-4">
      <div className="container flex flex-col md:flex-row items-center px-6 mx-auto p-10 space-y-0 md:space-y-0 ">
        {/* left section */}
        <div className="flex flex-col mb-8 space-y-10 md:space-y-14 md:w-1/2 mt-8">
          <h1 className="text-4xl md:text-5xl leading-10 text-white font-heading text-left">
            Achieve Your <span className="text-primary">Fitness Goals</span>{" "}
            with <span className="text-primary">Confidence</span>.
          </h1>
          <p className="text-sm md:text-xl font-semibold font-body leading-7 text-white">
            Welcome to Our Community of{" "}
            <span className="text-primary">Expert Coaches</span>! Get
            Personalized Support for Your{" "}
            <span className="text-primary">Fitness and Nutrition Journey</span>.
            Find Your Perfect Coach and{" "}
            <span className="text-primary">
              Start Your Transformation Today
            </span>
            .
          </p>
          <div className="flex items-center justify-center  px-4 py-2 bg-primary rounded-lg w-fit md:justify-start">
            <a
              href="#"
              className="text-sm md:text-base font-semibold font-body leading-normal"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* right section-image */}
        <div className="md:w-1/2">
          <img src={hero} alt="" className="hidden md:block w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection