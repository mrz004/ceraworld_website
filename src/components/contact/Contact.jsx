import bgimg from "/contact-us/img1.webp";
import "./Contact.scss";
import ContactTag from "./ContactTag";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import ScheduleTable from "./ScheduleTable";

function Contact() {
  const ContactInfo = {
    location: "https://maps.app.goo.gl/X21pWnQW2ajh5Yvf6",
    phone: "tel:+91 99221 47777",
    email: "mailto:info@ceraworldchandwani.com",
    timing: {
      Monday: "Closed",
      Tuesday: "10 am - 7:30 pm",
      Wednesday: "10 am - 7:30 pm",
      Thursday: "10 am - 7:30 pm",
      Friday: "10 am - 7:30 pm",
      Saturday: "10 am - 7:30 pm",
      Sunday: "10 am - 7:00 pm",
    },
  };

  return (
    <section className="contact-us grid gap-16">
      <div className="hero stacked-elements">
        <img src={bgimg} alt={bgimg} className="h-[90vh] w-full object-cover" />
        <div className="overlay grid place-items-center backdrop-brightness-50">
          <h1 className="text-5xl sm:text-8xl xl:text-[8rem] 2xl:text-[10rem] text-theme-white">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h3 className="text-center text-xl sm:text-2xl xl:text-4xl py-6">
          Reach out to Us
        </h3>
        <div className="tag-container flex justify-evenly flex-wrap">
          <ContactTag
            link={ContactInfo.location}
            icon={<IoLocation />}
            newTab
          />
          <ContactTag link={ContactInfo.phone} icon={<IoCall />} />
          <ContactTag link={ContactInfo.email} icon={<IoMail />} />
        </div>
        <div className="pt-8 mx-auto text-center">
          We would love to hear from you! If you have any questions, feedback,
          or inquiries, please feel free to reach out to us. Our team is ready
          to assist you and provide the information you need. You can contact us
          through phone, email, or by visiting our location.
          <span className="pt-4">
            Address:{" "}
            <a
              target="_blank"
              href={ContactInfo.location}
              className="text-theme-blue hover:underline"
            >
              <address>
                738/3 , Shiroli Marble Line, Shiroli, Maharashtra 416122
              </address>
            </a>
          </span>
        </div>
      </div>
      <div className="container mx-auto overflow-x-auto">
        <h3 className="text-center text-xl sm:text-2xl xl:text-4xl py-6">
          Our Schedule
        </h3>
        <ScheduleTable data={ContactInfo.timing} />
      </div>
      <div className="w-full mx-auto">
        <h3 className="text-center text-xl sm:text-2xl xl:text-4xl py-6">
          Locate us on Map
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.8063392055524!2d74.29263867418669!3d16.73651198404392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10066bce752f9%3A0xdf657ed15291df4c!2sCERAWORLD%20Chandwani%20Tiles!5e0!3m2!1sen!2sin!4v1722591590171!5m2!1sen!2sin"
          style={{ border: 0, width: "100%", height: "500px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default Contact;
