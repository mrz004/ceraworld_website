import React from "react";
import Hero from "./Hero/Hero";
import LuxuryGallery from "./LuxuryImageGallery/LuxuryGallery";
import HorizontalScroll from "./horizontal/HorizontalScroll";
import img1 from "/luxury/shower.jpeg";
import img2 from "/luxury/comod.jpeg";
import img3 from "/luxury/sofa.jpeg";
import img4 from "/luxury/window.jpeg";
import img5 from "/luxury/table.jpg";

function Home() {
  const imgs = [
    {
      title: "Bath ware",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quae maiores veniam dolores! Porro cumque atque molestiae, voluptatem sunt modi laborum adipisci nulla deserunt sed dolores tempore totam delectus ullam itaque quod!",
      src: img1,
      link: "#",
    },
    {
      title: "Sanatory ware",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quae maiores veniam dolores! Porro cumque atque molestiae, voluptatem sunt modi laborum adipisci nulla deserunt sed dolores tempore totam delectus ullam itaque quod!",
      src: img2,
      link: "#",
    },
    {
      title: "Furniture",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quae maiores veniam dolores! Porro cumque atque molestiae, voluptatem sunt modi laborum adipisci nulla deserunt sed dolores tempore totam delectus ullam itaque quod!",
      src: img3,
      link: "#",
    },
    {
      title: "Tiles",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quae maiores veniam dolores! Porro cumque atque molestiae, voluptatem sunt modi laborum adipisci nulla deserunt sed dolores tempore totam delectus ullam itaque quod!",
      src: img4,
      link: "#",
    },
    {
      title: "Table",
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
