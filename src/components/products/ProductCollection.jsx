import React from "react";
import bg_img from "/product_collections/furniture/dining_tables/img_1.jpg";
import desc_img from "/product_collections/furniture/dining_tables/img_2.jpg";
import img_1 from "/product_collections/furniture/dining_tables/img_3.jpg";
import img_2 from "/product_collections/furniture/dining_tables/img_4.jpg";
import img_3 from "/product_collections/furniture/dining_tables/img_5.jpg";
import img_4 from "/product_collections/furniture/dining_tables/img_6.jpg";
import BGImage from "./BGImage";
import { useParams } from "react-router-dom";
import DescriptionCard from "./DescriptionCard";
import AutoScrollCarousel from "./AutoScrollCarousel";

function ProductCollections() {
  const { collection } = useParams();
  const imges = [img_1, img_2, img_3, img_4];
  const desc_text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ab reiciendis assumenda impedit cupiditate porro quos dicta suscipit est enim obcaecati sed aliquam numquam dolorum laboriosam ut nesciunt hic quae aliquid inventore, repudiandae quis voluptatem rem! Aliquam harum molestias, aspernatur repellat laboriosam suscipit dolor animi!";
  return (
    <section>
      <BGImage imgSrc={bg_img} imgAlt={bg_img}>
        <h1>{collection}</h1>
      </BGImage>

      <DescriptionCard imgSrc={desc_img} imgAlt={desc_img} text={desc_text} />

      <AutoScrollCarousel images={imges} link="view" linkText="Explore More" />
    </section>
  );
}

export default ProductCollections;
