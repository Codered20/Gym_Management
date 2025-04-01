import React, { useRef, useEffect, useState } from "react";

function ZumbaScroller() {
  const images = [
    "https://img.freepik.com/free-photo/smiley-people-having-fun-zumba-class_23-2149074876.jpg",
    "https://athletechnews.com/wp-content/uploads/2024/07/210801_FallCampClass_K0I6464-1600x1067.webp",
    "https://media.istockphoto.com/id/680886440/photo/exercising-at-the-gym.jpg?s=612x612&w=0&k=20&c=qc3lPk3k-yzz_HKhbuRtN8rfQDR8d3mDD6Xyv1YFC8E=",
    "https://www.hplearnpro.com/sites/default/files/2022-02/Zumba%20Fitness.jpg",
    "https://st2.depositphotos.com/1046535/7982/i/950/depositphotos_79822324-stock-photo-fitness-zumba-dance-workout-in.jpg",
    "https://post.healthline.com/wp-content/uploads/2019/02/zumba_class-1296x728-header-1296x728.jpg",
    "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg",
    "https://moveonpointe.files.wordpress.com/2014/04/step-beto.jpg",
    "https://wavesgym.com/wp-content/uploads/2017/12/Zumba-2-768x512.jpg",
    "https://fitnessability.org/wp-content/uploads/2024/01/6EF65A98-5A69-4F22-828B-419D49F05A48-1.webp",
  ];

  const sliderRef = useRef(null);
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStartScroll(true), 5000); // Start scrolling after 3 seconds
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!startScroll || !sliderRef.current) return;

    let speed = 0.4; // Scroll speed (px per frame)
    let animationFrameId;

    const scrollLeft = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft -= speed;
        if (sliderRef.current.scrollLeft <= 0) {
          sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 2; // Reset to middle
        }
      }
      animationFrameId = requestAnimationFrame(scrollLeft);
    };

    animationFrameId = requestAnimationFrame(scrollLeft);

    return () => cancelAnimationFrame(animationFrameId);
  }, [startScroll]);

  return (
    <div
      ref={sliderRef}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        marginTop: "2rem",
      }}
    >
      {/* Duplicate images for seamless infinite scroll */}
      {[...images, ...images].map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          style={{
            width: "400px",
            height: "300px",
            marginRight: "10px",
            borderRadius: "10px",
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

export default ZumbaScroller;
