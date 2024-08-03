import bgimg from "/contact-us/img1.png";
import "./Contact.scss";
import { Card as fbCard } from "flowbite-react";

function Contact() {
  return (
    <section className="contact-us">
      <img
        src={bgimg}
        alt={bgimg}
        className="h-[80svh] w-full object-cover object-top"
      />
      {/* //https://maps.app.goo.gl/X21pWnQW2ajh5Yvf6 */}
      <fbCard href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </fbCard>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.8063392055524!2d74.29263867418669!3d16.73651198404392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10066bce752f9%3A0xdf657ed15291df4c!2sCERAWORLD%20Chandwani%20Tiles!5e0!3m2!1sen!2sin!4v1722591590171!5m2!1sen!2sin"
        // width={600}
        // height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

export default Contact;
