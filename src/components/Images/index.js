import React, { useState, forwardRef } from "react";
import images from "~/assert/images";
import styles from "./image.module.scss";
import classNames from "classnames";

const Images = forwardRef(({ src, alt, className, ...props }, ref) => {
  const [fallback, setFallBack] = useState("");

  const handleErorr = () => {
    setFallBack(images.noImage);
  };
 
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      slot={alt}
      {...props}
      onError={handleErorr}
    />
  );
});

export default Images;
