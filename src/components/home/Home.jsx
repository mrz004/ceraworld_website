import React from "react";
import Hero from "./Hero/Hero";
import LuxuryGallery from "./LuxuryImageGallery/LuxuryGallery";
import HorizontalScroll from "./horizontal/HorizontalScroll";
import img2 from "/luxury/comod.jpeg";
import img1 from "/luxury/shower.jpeg";
import img3 from "/luxury/sofa.jpeg";
import img5 from "/luxury/table.jpg";
import img4 from "/luxury/window.jpeg";

function Home() {
  const imgs = [
    {
      title: "Luxury",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quae maiores veniam dolores! Porro cumque atque molestiae, voluptatem sunt modi laborum adipisci nulla deserunt sed dolores tempore totam delectus ullam itaque quod!",
      src: img1,
      link: "#",
    },
    {
      title: "Luxury",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quae maiores veniam dolores! Porro cumque atque molestiae, voluptatem sunt modi laborum adipisci nulla deserunt sed dolores tempore totam delectus ullam itaque quod!",
      src: img2,
      link: "#",
    },
    {
      title: "Luxury",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quae maiores veniam dolores! Porro cumque atque molestiae, voluptatem sunt modi laborum adipisci nulla deserunt sed dolores tempore totam delectus ullam itaque quod!",
      src: img3,
      link: "#",
    },
    {
      title: "Luxury",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quae maiores veniam dolores! Porro cumque atque molestiae, voluptatem sunt modi laborum adipisci nulla deserunt sed dolores tempore totam delectus ullam itaque quod!",
      src: img4,
      link: "#",
    },
    {
      title: "Luxury",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quae maiores veniam dolores! Porro cumque atque molestiae, voluptatem sunt modi laborum adipisci nulla deserunt sed dolores tempore totam delectus ullam itaque quod!",
      src: img5,
      link: "#",
    },
  ];
  return (
    <>
      <Hero />
      <LuxuryGallery animate={true} items={imgs} />
      <HorizontalScroll />
    </>
  );
}

export default Home;
