import React, { useState, useEffect, useRef } from "react";

function SmoothScroller({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(containerRef.current.scrollTop);
    };

    containerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseWheel = (event) => {
    const delta = event.deltaY * 0.5; // Reduce scroll amount by half (adjust factor)
    const newScrollPosition = Math.max(0, scrollPosition + delta);
    containerRef.current.scrollTo({
      top: newScrollPosition,
      behavior: "smooth",
    });
  };

  return (
    <div ref={containerRef} onWheel={handleMouseWheel}>
      {children}
    </div>
  );
}

export default SmoothScroller;
