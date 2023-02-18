import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="bg-black">
      <div className="flex container flex-col mx-auto pt-14 pb-24 space-y-2 md:space-y-4">
        <h2 className="font-heading text-3xl md:text-4xl leading-7 text-white uppercase">
          Contact Us
        </h2>
        <p className="text-sm md:text-base leading-7 text-grey-100 text-body">
          We are here to help! Whether you have questions about our platform,
          need assistance with your account, or want to provide feedback, our
          support team is here to assist you.
          <br />
          If you have any questions or concerns, please feel free to reach out
          to us using the following methods:
          <br />
        </p>
        <p className="text-sm md:text-base leading-7 text-grey-100">
          <span className="text-primary">Email:</span> support@fitconnect256.com
          <br />
          <span className="text-primary">Phone:</span> (+256) 782-555-555
          (Monday to Friday, 9 AM to 5 PM)
          
        </p>
        <div className="flex justify-between w-24">
          <FontAwesomeIcon icon={faFacebook} className="text-primary" />
          <FontAwesomeIcon icon={faTwitter} className="text-primary" />
          <FontAwesomeIcon icon={faInstagram} className="text-primary" />
        </div>
      </div>
    </section>
  );
}

export default Contact