import React, { useState } from "react";
import "./imageIcon.sass";
interface Props {
  src: string;
  alt?: string;
  avatar?: boolean;
  callback?: boolean;
}
const ImageIcon = ({ src, alt, avatar = false, callback = false }: Props) => {
  const [progress, setProgress] = useState(true);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const onLoadImg = () => {
    setProgress(false);
  };
  const onErrorImg = () => {
    onLoadImg();
    setError(true);
  };
  const buildBody = () => (
    <>
      {progress ? <span className="bx bx-loader-alt bx-spin"></span> : null}
      <img
        className={`imageIcon-img ${
          callback ? "imageIcon-img-callback" : "imageIcon-no-callback"
        }`}
        src={src}
        alt={alt}
        onLoad={() => onLoadImg()}
        onError={() => onErrorImg()}
        onClick={() => callback && setShow(true)}
      />
      {error && src?.trim() === "" ? (
        <span className="bx bx-block imageIcon-loading"></span>
      ) : null}
    </>
  );
  return (
    <>
      {avatar ? (
        <div className="imageIcon__avatar">{buildBody()}</div>
      ) : (
        buildBody()
      )}
      {show ? <h1>Image View</h1> : null}
    </>
  );
};

export default ImageIcon;
