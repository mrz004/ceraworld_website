import { Card } from "flowbite-react";

// function AboutCard({ title, text, reverse }) {
//   return (
//     <div
//       className={`about-card flex flex-col px-8 gap-8 mx-auto  lg:max-w-[60svw] items-center text-justify   ${
//         reverse ? "md:flex-row-reverse" : "md:flex-row"
//       }`}
//     >
//       <h3
//         className={`text-7xl aspect-square grid place-items-center font-black text-theme-blue font-cursive ${
//           reverse ? "rotate-45" : "-rotate-45"
//         }`}
//       >
//         {title}
//       </h3>
//       <p className="text-xl text-theme-black">{text}</p>
//     </div>
//   );
// }

function AboutCard({ title, text, reverse }) {
  return (
    <Card className="p-8 min-h-[40vh]">
      <h5 className="text-4xl font-bold tracking-tight text-theme-blue dark:text-theme-pale">
        {title}
      </h5>
      <p className="font-normal text-theme-black dark:text-theme-white">
        {text}
      </p>
    </Card>
  );
}

export default AboutCard;
