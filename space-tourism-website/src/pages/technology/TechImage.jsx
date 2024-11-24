function TechImage({ tech }) {
  const { images, name } = tech;

  return (
    <div className="pt-800 lg:order-2 lg:flex lg:items-center lg:justify-end lg:pt-0">
      <img
        src={images.landscape}
        alt={name}
        className="h-[258px] w-full object-cover sm:h-[453px] lg:hidden"
      />
      <img
        src={images.portrait}
        alt={name}
        className="hidden w-[608px] lg:block"
      />
    </div>
  );
}

export default TechImage;
//h-[258px]
//pt-800
//h-[600px] w-[608px]
