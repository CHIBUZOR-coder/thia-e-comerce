import React, { useEffect } from "react";

export const PreloadImages = (urls) => {
  useEffect(() => {
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [urls]);
};
