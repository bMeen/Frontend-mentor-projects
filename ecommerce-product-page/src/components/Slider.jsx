import { useState } from "react";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Modal from "./Modal";

const images = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg",
];

const thumbnails = [
  "../images/image-product-1-thumbnail.jpg",
  "../images/image-product-2-thumbnail.jpg",
  "../images/image-product-3-thumbnail.jpg",
  "../images/image-product-4-thumbnail.jpg",
];

function Slider() {
  const [current, setCurrent] = useState(0);

  const maxSlide = images.length;

  function next() {
    setCurrent((index) => (index === maxSlide - 1 ? 0 : index + 1));
  }
  function previous() {
    setCurrent((index) => (index === 0 ? maxSlide - 1 : index - 1));
  }
  function goToSlide(slide) {
    setCurrent(slide);
  }

  return (
    <div className="relative md:max-w-md">
      <Modal>
        <Modal.Open>
          <div className="h-72 md:h-full">
            <img
              src={images[current]}
              alt="product-item"
              className="h-full w-full object-cover md:rounded-xl"
            />
          </div>
        </Modal.Open>
        <Modal.Window />
      </Modal>

      <Button onClick={previous} type="left">
        <Icon type="previous" />
      </Button>

      <Button onClick={next} type="right">
        <Icon type="next" />
      </Button>

      <div className="mt-5 hidden w-full justify-between space-x-5 md:flex">
        {thumbnails.map((item, i) => (
          <img
            src={thumbnails[i]}
            alt="thumbnail"
            key={i}
            className={`w-1/5 cursor-pointer rounded-lg hover:opacity-50 ${current === i ? "border-[3px] border-orange-main opacity-50" : ""}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
