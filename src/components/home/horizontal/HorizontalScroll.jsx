import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Card from "./Card";
import img1 from "/horizontal/kitchenware.webp";
import img2 from "/horizontal/bathware.webp";
import img3 from "/horizontal/tiles.webp";
import img4 from "/horizontal/sanitaryware.webp";
import img5 from "/horizontal/modern_lights.webp";
import img6 from "/horizontal/furniture.webp";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const cards = [
    { src: img1, text: "Kitchenware" },
    { src: img2, text: "Bathware" },
    { src: img3, text: "Tiles" },
    { src: img4, text: "Sanitarywares" },
    { src: img5, text: "Modern Lights" },
    { src: img6, text: "Furniture" },
  ];
  const colors = [
    "#d5d3c1",
    "#825C33",
    "#84496C",
    "#60849A",
    "#56360E",
    "#184E3E",
    "#421A14",
  ];
  // const colors = [
  //   "#F7A041",
  //   "#C64D96",
  //   "#7BAAC5",
  //   "#F5A849",
  //   "#3ABB94",
  //   "#F15A45",
  // ];
  // .map((c) => `linear-gradient(transparent, ${c}, transparent)`);

  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-70%"]);
  const color = useTransform(
    scrollYProgress,
    Array.from({ length: colors.length }, (val, i) => i / colors.length),
    colors
  );

  return (
    <section
      ref={targetRef}
      style={{ position: "relative" }}
      className="relative h-[300vh] bg-neutral-900"
    >
      <motion.div
        style={{ backgroundColor: color, position: "sticky" }}
        className="sticky top-0 flex h-screen items-center overflow-hidden"
      >
        <motion.div
          style={{ x }}
          className="flex h-[60svh] justify-evenly gap-[20vmin]"
        >
          {cards.map((img) => {
            return <Card imgPath={img.src} key={img.src} text={img.text} />;
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HorizontalScrollCarousel;
