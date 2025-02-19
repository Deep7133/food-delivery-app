import React, { useEffect, useRef } from "react";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img7 from "../images/7.png";
import img8 from "../images/8.png";
import img9 from "../images/9.png";
import img10 from "../images/10.png";
import img11 from "../images/11.png";
import img12 from "../images/12.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const Section2 = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const speed = 2;

    const scroll = () => {
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
      scrollAmount += speed;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-100 p-4 sm:p-6">
      <div
        className="flex gap-4 sm:gap-6 scroll-container"
        ref={sliderRef}
        style={{
          display: "flex",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          width: "100%",
        }}
      >
        {[...images, ...images].map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

const ImageCard = ({ image }) => {
  return (
    <div className="w-[300px] h-[150px] sm:w-[400px] sm:h-[200px] md:w-[500px] md:h-[250px] rounded-lg shadow-lg overflow-hidden flex-shrink-0">
      <img src={image} alt="Card" className="w-full h-full object-cover" />
    </div>
  );
};

export default Section2;