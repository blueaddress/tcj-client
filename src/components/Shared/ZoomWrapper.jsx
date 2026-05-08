import { useState, useEffect, useCallback } from "react";

export default function ZoomWrapper({ children }) {
  const [scale, setScale] = useState(1);

  const handleWheel = useCallback((e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();

      // Get current scroll position
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      
      // Get mouse position relative to document
      const mouseX = e.clientX + scrollX;
      const mouseY = e.clientY + scrollY;

      // Calculate zoom direction and amount
      const zoomFactor = 0.1;
      const zoomDirection = e.deltaY > 0 ? -1 : 1;
      const newScale = scale + (zoomDirection * zoomFactor);
      
      // Clamp scale between 0.8 and 3
      const clampedScale = Math.min(Math.max(newScale, 1.0), 3);
      
      if (clampedScale !== scale) {
        // Calculate how much the mouse position will move due to scaling
        const scaleRatio = clampedScale / scale;
        const newMouseX = mouseX * scaleRatio;
        const newMouseY = mouseY * scaleRatio;
        
        // Calculate new scroll position to keep mouse position fixed
        const newScrollX = newMouseX - e.clientX;
        const newScrollY = newMouseY - e.clientY;

        setScale(clampedScale);

        // Use requestAnimationFrame for smooth scroll
        requestAnimationFrame(() => {
          window.scrollTo(newScrollX, newScrollY);
        });
      }
    }
  }, [scale]);

  // Reset to normal scale on double click
  const handleDoubleClick = useCallback((e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      setScale(1);
    }
  }, []);

  useEffect(() => {
    const passiveSupport = { passive: false };
    window.addEventListener("wheel", handleWheel, passiveSupport);
    window.addEventListener("dblclick", handleDoubleClick, passiveSupport);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("dblclick", handleDoubleClick);
    };
  }, [handleWheel, handleDoubleClick]);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "0 0",
        width: "100%",
        height: "100%",
        position: "relative"
      }}
      className=""
    >
      {children}
    </div>
  );
}