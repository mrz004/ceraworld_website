import React, { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import img1 from "/product_collections/furniture/dining_tables/img_1.jpg";
import img2 from "/product_collections/furniture/dining_tables/img_2.jpg";
import img3 from "/product_collections/furniture/dining_tables/img_3.jpg";
import img4 from "/product_collections/furniture/dining_tables/img_4.jpg";
import img5 from "/product_collections/furniture/dining_tables/img_5.jpg";
import img6 from "/product_collections/furniture/dining_tables/img_6.jpg";
import BGImage from "./BGImage";
import ImageViewModel from "./ImageViewModel";
import { imageCollectionContext } from "./ProductCollection";

function ProductGallery() {
  const { category, collection } = useParams();
  const images = useContext(imageCollectionContext);
  const [openModal, setOpenModal] = useState(false);
  const viewImagePath = useRef("");
  return (
    <>
      <section>
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
