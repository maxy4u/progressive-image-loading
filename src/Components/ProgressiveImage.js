import { memo, useState, useEffect } from "react";

const ProgressiveImage = ({ src, thumbnailSrc, ...props }) => {
  const [imageSrc, setImageSrc] = useState(thumbnailSrc || src);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  const customClass =
    thumbnailSrc && src === thumbnailSrc ? "loading" : "loaded";

  return (
    <img
      {...{ src: imageSrc, ...props }}
      alt={props.alt || ""}
      className={`image ${customClass}`}
    />
  );
};

export default memo(ProgressiveImage);
