import React from 'react'

const Footer = () => {
  return (
    <section id="footer" className="bg-secondary-100 mt-auto  bottom-0 w-full">
      <div className="container flex flex-col md:flex-row items-center md:justify-between mx-auto p-6 md:p-10 space-y-2">
        <p className="text-xs md:text-base font-semibold leading-normal text-primary font-body">
          Copyright © 2023 FitConnect256
        </p>
        <div className="flex flex-col md:flex-row items-center space-x-2 space-y-2 md:space-y-0">
          <p className="font-body font-semibold text-primary text-xs md:text-base">
            All rights Reserved{" "}
          </p>
          <p className="font-body font-semibold text-primary text-xs md:text-base">
            Terms and Conditions | Privacy policy
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer