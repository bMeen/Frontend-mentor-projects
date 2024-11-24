import { useContentContext } from "../../context/ContentContext";

function TechButtons({ current, goto }) {
  const { technology } = useContentContext();

  return (
    <ul className="mx-auto mb-500 flex max-w-lg justify-center gap-200 font-serif text-preset-4 sm:text-text-preset-4-tab lg:mb-0 lg:flex-col lg:gap-400">
      {Array.from({ length: technology.length }).map((_, index) => (
        <li
          key={index}
          onClick={() => goto(index)}
          className={`${current === index ? "bg-white text-blue-900" : "border-[1px] border-white/25 text-white hover:border-white"} flex h-10 w-10 items-center justify-center rounded-full sm:h-14 sm:w-14 lg:h-20 lg:w-20`}
        >
          {index + 1}
        </li>
      ))}
      {/*  <li className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-900 sm:h-14 sm:w-14">
        1
      </li>
      <li className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-white/25 text-white hover:border-white sm:h-14 sm:w-14">
        2
      </li>
      <li className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-white/25 text-white sm:h-14 sm:w-14">
        3
      </li> */}
    </ul>
  );
}

export default TechButtons;
