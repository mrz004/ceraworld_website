import imgsrc from "/contact-us/img1.png";

function ContactDetails() {
  return (
    <div className="contact-details">
      <div className="img-container grid place-items-center">
        <img
          className="w-full mx-auto max-h-[30vh] object-cover object-top"
          src={imgsrc}
          alt={imgsrc}
        />
        <h1 className="h-full w-full backdrop-brightness-90">Contact Us</h1>
      </div>
    </div>
  );
}

export default ContactDetails;
