import React from "react";
import { v4 as getId } from "uuid";
import LuxuryImageCard from "./LuxuryImageCard";
import Separator from "../utils/Separator";
import "./LuxuryGallery.scss";

function LuxuryGallery({ items, margin, animate, addSeparator = true }) {
  return (
    <section className="luxury-image-gallery py-10">
      <div className="card-container grid gap-20">
        {items.map((img, i, arr) => {
          return (
            <React.Fragment key={img.src}>
              <LuxuryImageCard
                imgSrc={img.src}
                imgAlt="Luxury Image"
                link={img.link}
                text={img.text}
                title={img.title}
                reverse={i & 1}
                margin={margin}
                animate={animate}
              />

              {addSeparator && i + 1 < arr.length && <Separator />}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default LuxuryGallery;
