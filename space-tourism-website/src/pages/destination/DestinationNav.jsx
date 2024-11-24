import { useSearchParams } from "react-router-dom";
import { useContentContext } from "../../context/ContentContext";

function DestinationNav() {
  const { destinations } = useContentContext();
  const [searchParams, setSearhParams] = useSearchParams();
  const nav = destinations.map((item) => item.name);
  const currentTab = searchParams.get("name") || "Moon";

  function handleClick(item) {
    searchParams.set("name", item);
    setSearhParams(searchParams);
  }

  return (
    <ul className="flex h-8 justify-center gap-400 font-sans-barlow-condensed text-preset-8 tracking-15p text-blue-300 lg:justify-start lg:text-preset-8-lg lg:tracking-[2px]">
      {nav.map((item) => (
        <li
          key={item}
          className={`${currentTab === item ? "dest-nav-active text-white" : "dest-nav"} relative cursor-pointer`}
          onClick={() => handleClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DestinationNav;
