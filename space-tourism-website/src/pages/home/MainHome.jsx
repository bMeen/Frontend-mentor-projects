import Button from "./Button";
import Description from "./Description";

function MainHome() {
  return (
    <div className="p-300 sm:px-500 sm:py-1600 lg:px-1600 lg:p-1600">
      <div className="sm:gap-1000 grid lg:mx-auto lg:max-w-6xl lg:grid-cols-2">
        <Description />
        <Button />
      </div>
    </div>
  );
}

export default MainHome;
//p-300 sm:px-500 sm:py-1600
