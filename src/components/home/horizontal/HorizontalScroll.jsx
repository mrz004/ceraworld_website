import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Card from "./Card";
import img1 from "/horizontal/kitchenware.jpg";
import img2 from "/horizontal/bathware.jpg";
import img3 from "/horizontal/tiles.jpg";
import img4 from "/horizontal/sanitaryware.jpg";
import img5 from "/horizontal/modern_lights.jpg";
import img6 from "/horizontal/furniture.jpg";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const cards = [img1, img2, img3, img4, img5, img6];
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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);
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
        style={{ backgroundColor: color }}
        className="sticky top-0 flex h-screen items-center overflow-hidden"
      >
        <motion.div style={{ x }} className="flex gap-12">
          {cards.map((img) => {
            return <Card imgPath={img} key={img} text="Text" />;
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HorizontalScrollCarousel;
