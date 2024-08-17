import React, { createContext, useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import AutoScrollCarousel from "./AutoScrollCarousel";
import BGImage from "./BGImage";
import DescriptionCard from "./DescriptionCard";
import API_Config from "../../config/api";

export const imageCollectionContext = createContext();

function ProductCollections() {
  const { category } = useParams();
  const { pathname } = useLocation();
  const [categoryData, setCategoryData] = useState(null);
  const [imageCollection, setImageCollection] = useState([]);
  useEffect(
    (_) => {
      const url = new URL(API_Config.URI);
      url.pathname = `api/get/categories/${category}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setCategoryData({
            name: data.name,
            description: data.description,
            bannerImage: "http://" + url.hostname + "/" + data.bannerImage,
            featureImage: "http://" + url.hostname + "/" + data.featureImage,
            video: data.video,
          });
          setImageCollection(
            data.imageCollection.map(
              (img) => "http://" + url.hostname + "/" + img
            )
          );
        })
        .catch((err) => console.error(err));
    },
    [category]
  );
  // console.log(categoryData);
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
            <iframe
              className="mx-auto my-8"
              src={categoryData.video}
              title="Category Video"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
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
