import React, { FC } from "react";

interface IImageComponent {
  src: string;
  show: boolean;
}

const ImageComponent: FC<IImageComponent> = ({ src, show }) => {
  return show ? (
    <img src={src} alt="" />
  ) : (
    <div className="loader">loading</div>
  );
};

export default ImageComponent;
