import React from "react";
import { useParams } from "react-router-dom";
import { titleCase } from "../../utils/functions";
import LuxuryGallery from "../home/LuxuryImageGallery/LuxuryGallery";
import BGImage from "./BGImage";
import "./ProductCategory.scss";
import img1 from "/product_collections/furniture/dining_tables/img_1.jpg";
import img2 from "/product_collections/furniture/massage_chairs/img_1.jpg";
import img3 from "/product_collections/furniture/sofas/img_1.jpg";
import bgImage from "/product_collections/sofa_bg.jpg";

function ProductCategory() {
  const { category } = useParams();

  const images = [
    {
      title: "Dining Tables",
      text: "",
      src: img1,
      link: "dining table",
    },
    {
      title: "Massage Chairs",
      text: "",
      src: img2,
      link: "massage chairs",
    },
    {
      title: "Sofas",
      text: "",
      src: img3,
      link: "sofas",
    },
  ];

  return (
    <section className="product-category">
      <BGImage imgSrc={bgImage} imgAlt={bgImage}>
        <h1> {titleCase(category)}</h1>
      </BGImage>
      <LuxuryGallery margin="sm" items={images} addSeparator={false} />
    </section>
  );
}

export default ProductCategory;
