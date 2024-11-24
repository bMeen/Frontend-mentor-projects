import { useContentContext } from "../../context/ContentContext";

function CrewPagination({ current, goto }) {
  const { crew } = useContentContext();

  return (
    <ul className="flex items-center justify-center gap-200 lg:absolute lg:bottom-0 lg:justify-start lg:gap-500">
      {Array.from({ length: crew.length }).map((_, index) => (
        <li
          key={index}
          onClick={() => goto(index)}
          className={`h-2.5 w-2.5 rounded-full lg:h-4 lg:w-4 ${current === index ? "bg-white" : "bg-white/20 hover:bg-white/50"}`}
        ></li>
      ))}
    </ul>
  );
}

export default CrewPagination;
