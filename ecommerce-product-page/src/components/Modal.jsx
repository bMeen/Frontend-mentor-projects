import { cloneElement, createContext, useContext, useState } from "react";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

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

const ModalContext = createContext();

function Modal({ children }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <ModalContext.Provider value={{ open, setOpen, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children }) {
  const { setOpen } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => setOpen(true) });
}

function Window() {
  const { close, open } = useContext(ModalContext);
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

  if (!open) return;

  return (
    <>
      <div
        className={`fixed inset-0 z-20 hidden ${open ? "md:block" : "hidden"} h-screen w-full bg-black opacity-60 transition-all`}
        onClick={close}
      ></div>
      <div
        className={`fixed left-1/2 top-1/2 z-30 mx-auto h-[555px] w-[448px] -translate-x-1/2 -translate-y-1/2 ${open ? "md:block" : "hidden"} hidden`}
      >
        <div className="relative">
          <div className="mb-2 flex justify-end" onClick={close}>
            <Icon type="close" />
          </div>
          <div className="h-auto">
            <img
              src={images[current]}
              alt="product-item"
              className="h-full w-full object-cover md:rounded-xl"
            />
          </div>

          <Button onClick={previous} type="left" modal={true}>
            <Icon type="previous" />
          </Button>

          <Button onClick={next} type="right" modal={true}>
            <Icon type="next" />
          </Button>

          <div className="mt-5 hidden w-full justify-center gap-7 md:flex">
            {thumbnails.map((item, i) => (
              <img
                src={thumbnails[i]}
                alt="thumbnail"
                key={i}
                className={`w-16 cursor-pointer rounded-lg hover:opacity-90 ${current === i ? "border-[3px] border-orange-main opacity-90" : ""}`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

//left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
