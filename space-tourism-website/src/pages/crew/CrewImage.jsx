function CrewImage({ currentCrew }) {
  const { images, name } = currentCrew;

  return (
    <div className="py-50">
      <picture>
        <source srcSet={images.webp} type="image/webp" />
        <img
          src={images.png}
          alt={name}
          className="w-72sm:w-[448px] mx-auto lg:w-[540px]"
        />
      </picture>
    </div>
  );
}

export default CrewImage;
