import React from 'react'
import about from "../assets/images/about.png"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="bg-black p-10">
      <h2 className="text-3xl md:text-4xl leading-7 text-white uppercase font-heading">
        About Us
      </h2>
      <div className="container flex flex-col px-4 mx-auto p-10 space-y-12 md:space-y-0 md:space-x-0 md:flex-row">
        {/* left side */}
        <div className="md:w-1/2">
          <img src={about} alt="" className="hidden md:block w-full h-auto" />
        </div>
        {/* right side */}
        <div className="flex flex-col mb-32 space-y-6 md:space-y-8 md:w-1/2">
          <h3 className="font-body text-primary text-2xl md:text-3xl">
            What is FITCONNECT256?
          </h3>
          <p className="text-sm md:text-base text-grey-100 text-body">
            FitConnect256 is designed to help individuals in Uganda achieve
            their fitness and health goals with personalized support. Our
            platform connects users with certified and experienced fitness and
            nutrition coaches who can provide tailored workout plans, nutrition
            advice, and ongoing support. Our mission is to make fitness and
            health accessible to everyone, regardless of their fitness level or
            schedule.
            <br />
            Looking for a coach who can help you achieve your fitness and health
            goals? Browse our coach profiles and find the right coach for you
            today.{" "}
            <Link
              className="text-sm font-semibold leading-tight text-primary border-b-2 border-primary"
              to="/coaches"
            >
              Find a coach
            </Link>
          </p>

          <p className="text-sm md:text-base leading-7 text-grey-100">
            We are always looking for certified and experienced coaches to join
            our community. If you are a fitness or nutrition professional, we
            invite you to register as a coach on our platform. As a coach, you
            will have the opportunity to help individuals transform their health
            and reach their fitness goals. You will also be able to build your
            brand, network with other coaches, and grow your business.
            Registering as a coach on our platform is easy, and you can start
            connecting with potential clients right away.
            <br />
            Join our community: Are you a certified fitness or nutrition
            professional looking to grow your business and help others reach
            their goals? Join our community of coaches today and start
            connecting with potential clients.{" "} 
            <Link
              className="text-sm font-semibold leading-tight text-primary border-b-2 border-primary"
              to="/coach_registration"
            >
              Register as a coach
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About