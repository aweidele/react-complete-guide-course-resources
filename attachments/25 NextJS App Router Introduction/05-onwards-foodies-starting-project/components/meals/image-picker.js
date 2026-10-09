'use client';

import { useRef } from "react";
import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name = "image" })  => {
  const imageInput = useRef();
  const handlePickClick = () => {
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={name} ref={imageInput} />
        <button className={classes.button} type="button" onClick={handlePickClick}>Pick an image</button>
      </div>
    </div>
  );
};
export default ImagePicker;
