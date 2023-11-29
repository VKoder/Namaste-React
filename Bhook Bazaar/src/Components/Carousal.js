import { CARD_IMG_URL } from "../Utils/constants";
const Carousal = (props) => {
  const { restData } = props;
  return (
    <div className="slider__item">
      <img
        className="slider__image"
        src={CARD_IMG_URL + restData.imageId}
        alt={restData.accessibility.altText}
      />
    </div>
  );
};
export default Carousal;
