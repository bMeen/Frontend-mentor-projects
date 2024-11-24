function DestinationImage({ destination }) {
  const { images, name } = destination;

  return (
    <div className="py-300">
      <picture>
        <source srcSet={images.webp} type="image/webp" />
        <img
          src={images.png}
          alt={name}
          className="mx-auto w-40 sm:w-80 lg:mx-0 lg:w-[480px]"
        />
      </picture>
    </div>
  );
}

export default DestinationImage;
