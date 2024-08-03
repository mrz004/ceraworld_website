import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { titleCase } from "../../utils/functions";
import LuxuryGallery from "../home/LuxuryImageGallery/LuxuryGallery";
import BGImage from "./BGImage";
import "./ProductCategory.scss";
import API_Config from "../../config/api";

function ProductCategory() {
  const { product } = useParams();

  const [productData, setProductData] = useState(null);

  useEffect(
    (_) => {
      const url = new URL(API_Config.URI);
      url.pathname = `api/get/products/${product}`;
      console.log(url.href);
      fetch(url, {
        headers: {
          authorization: API_Config.API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProductData({
            title: data.name,
            bgImage: "http://localhost:3000/" + data.bannerImage,
            images: data.categories.map((cat) => ({
              title: cat.name,
              src: "http://localhost:3000/" + cat.featureImage,
              link: cat._id,
              text: "",
            })),
          });
        })
        .catch((err) => console.error(err));
    },
    [product]
  );

  return (
    <section className="product-category">
      {productData && (
        <>
          <BGImage imgSrc={productData.bgImage} imgAlt={productData.bgImage}>
            <h1> {titleCase(productData.title)}</h1>
          </BGImage>
          <LuxuryGallery
            margin="sm"
            items={productData.images}
            addSeparator={false}
          />
        </>
      )}
    </section>
  );
}

export default ProductCategory;
