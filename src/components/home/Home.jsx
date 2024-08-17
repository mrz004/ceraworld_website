import React from "react";
import Hero from "./Hero/Hero";
import LuxuryGallery from "./LuxuryImageGallery/LuxuryGallery";
import HorizontalScroll from "./horizontal/HorizontalScroll";
import img1 from "/luxury/shower.webp";
import img2 from "/luxury/comod.webp";
import img3 from "/luxury/sofa.webp";
import img4 from "/luxury/window.webp";
import img5 from "/luxury/table.webp";

function Home() {
  const imgs = [
    {
      title: "bathware",
      text: "Transform your bathroom into a sanctuary of elegance and comfort with our exquisite range of luxury bathware. Crafted from the finest materials, our collection offers a perfect blend of sophistication and functionality. Whether you're looking for a sleek and modern design or a timeless classic, our products are designed to elevate your bathing experience",
      src: img1,
      link: "/products",
    },
    {
      title: "Sanitaryware",
      text: "Discover the epitome of elegance and functionality with our premium range of luxury sanitary ware. Designed to cater to the most discerning tastes, our collection seamlessly combines cutting-edge technology with timeless aesthetics. Elevate your bathroom experience with products that are as beautiful as they are practical.",
      src: img2,
      link: "/products",
    },
    {
      title: "Furniture",
      text: "Transform your interiors with our exquisite collection of luxury tiles, where artistry meets innovation. Designed for those who appreciate the finer things in life, our tiles offer unparalleled beauty and quality. Whether you're looking to create a stunning backsplash, an elegant floor, or a striking wall feature, our selection has something to suit every style and preference.",
      src: img3,
      link: "/products",
    },
    {
      title: "Tiles",
      text: "Transform your interiors with our exquisite collection of luxury tiles, where artistry meets innovation. Designed for those who appreciate the finer things in life, our tiles offer unparalleled beauty and quality. Whether you're looking to create a stunning backsplash, an elegant floor, or a striking wall feature, our selection has something to suit every style and preference.",
      src: img4,
      link: "/products",
    },
    {
      title: "Modern lights",
      text: "Discover the perfect blend of style and functionality with our collection of modern luxury lighting. Designed to complement contemporary interiors, our lighting fixtures offer a sophisticated and sleek aesthetic that elevates any room. From statement chandeliers to subtle accent lights, our range is crafted to provide both illumination and artistry.",
      src: img5,
      link: "/products",
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
