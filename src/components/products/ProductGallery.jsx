import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import img1 from "/product_collections/furniture/dining_tables/img_1.jpg";
import img2 from "/product_collections/furniture/dining_tables/img_2.jpg";
import img3 from "/product_collections/furniture/dining_tables/img_3.jpg";
import img4 from "/product_collections/furniture/dining_tables/img_4.jpg";
import img5 from "/product_collections/furniture/dining_tables/img_5.jpg";
import img6 from "/product_collections/furniture/dining_tables/img_6.jpg";
import BGImage from "./BGImage";
import ImageViewModel from "./ImageViewModel";

function ProductGallery() {
  const { category, collection } = useParams();
  const images = [img1, img2, img3, img4, img5, img6];
  const [openModal, setOpenModal] = useState(false);
  const viewImagePath = useRef("");
  return (
    <>
      <section>
        <BGImage imgSrc={img6} imgAlt={img6}>
          <h1 className="text-center py-8 text-2xl sm:text-4xl xl:text-6xl">
            {category} - {collection}
          </h1>
        </BGImage>
        <ImageViewModel
          openModal={openModal}
          setOpenModal={setOpenModal}
          imgPath={viewImagePath}
        />
        <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 xl:gap-12 py-8 px-8">
          {images.map((imgSrc) => (
            <div key={imgSrc}>
              <img
                className="h-auto max-w-full rounded-lg hover:scale-110 transition-transform"
                src={imgSrc}
                alt={imgSrc}
                onClick={(_) => {
                  viewImagePath.current = imgSrc;
                  setOpenModal(true);
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductGallery;
