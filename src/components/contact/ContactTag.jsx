import { Card } from "flowbite-react";

function ContactTag({ icon, link, newTab }) {
  return (
    <Card
      className="max-w-sm aspect-square grid place-items-center text-3xl sm:text-6xl w-18 sm:w-36 shadow hover:shadow-xl"
      target={newTab ? "_blank" : ""}
      href={link}
    >
      {icon}
    </Card>
  );
}

export default ContactTag;
