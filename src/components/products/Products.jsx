import { useEffect, useRef, useState } from "react";
import BGImage from "./BGImage";
import Card from "./ProductCard";
import img1 from "/products/sanitaryware.jpg";
import API_Config from "../../config/api";

function Products() {
  const [products, setProducts] = useState([]);
  const isLoaded = useRef(false);

  useEffect((_) => {
    if (isLoaded.current) return;
    isLoaded.current = true;
    const url = new URL(API_Config.URI);
    url.pathname = "/api/get/products";
    console.log(url.href);
    fetch(url, {
      headers: {
        authorization: API_Config.API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.map((p) => ({
            id: p._id,
            title: p.name,
            imgSrc: "https://" + url.hostname + "/" + p.featureImage,
            link: p._id,
          }))
        )
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <BGImage imgSrc={img1} imgAlt={img1}>
        <h1>Our Products</h1>
      </BGImage>
      <section className="flex justify-center flex-wrap py-12 px-4 md:px-8 xl:px-12 gap-8">
        {products && products.length
          ? products.map((product) => (
              <Card
                key={product.id}
                src={product.imgSrc}
                title={product.title}
                link={product.link}
              />
            ))
          : " "}
      </section>
    </>
  );
}

export default Products;
