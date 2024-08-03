import React, { createContext, useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import AutoScrollCarousel from "./AutoScrollCarousel";
import BGImage from "./BGImage";
import DescriptionCard from "./DescriptionCard";

export const imageCollectionContext = createContext();

function ProductCollections() {
  const { category } = useParams();
  const { pathname } = useLocation();
  const [categoryData, setCategoryData] = useState(null);
  const [imageCollection, setImageCollection] = useState([]);
  useEffect(
    (_) => {
      fetch(`http://localhost:3000/api/get/categories/${category}`)
        .then((res) => res.json())
        .then((data) => {
          setCategoryData({
            name: data.name,
            description: data.description,
            bannerImage: "http://localhost:3000/" + data.bannerImage,
            featureImage: "http://localhost:3000/" + data.featureImage,
          });
          setImageCollection(
            data.imageCollection.map((img) => "http://localhost:3000/" + img)
          );
        })
        .catch((err) => console.error(err));
    },
    [category]
  );
  console.log(categoryData);
  return (
    categoryData && (
      <section>
        <BGImage
          imgSrc={categoryData.bannerImage}
          imgAlt={categoryData.bannerImage}
        >
          <h1>{categoryData.name}</h1>
        </BGImage>
        {pathname.split(category)[1].length === 0 ? (
          <>
            <DescriptionCard
              imgSrc={categoryData.featureImage}
              imgAlt={categoryData.featureImage}
              text={categoryData.description}
            />

            <AutoScrollCarousel
              images={imageCollection}
              link="view"
              linkText="Explore More"
            />
          </>
        ) : (
          <imageCollectionContext.Provider value={imageCollection}>
            <Outlet />
          </imageCollectionContext.Provider>
        )}
      </section>
    )
  );
}

export default ProductCollections;
