import "./slider.scss";

export const Slider = ({ images }) => {
  return (
    <div className="slider">
      <div className="bigImage">
        <img src={images[0]} alt="" />
      </div>
      <div className="smallImage">
        {images.slice(1).map((image, index) => (
          <img src={image} alt="" key={index} />
        ))}
      </div>
    </div>
  );
};
