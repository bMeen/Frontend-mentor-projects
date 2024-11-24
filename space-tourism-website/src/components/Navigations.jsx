import { useContentContext } from "../context/ContentContext";
import { useMenu } from "../context/MobileMenuContext";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

function Navigations() {
  const { content } = useContentContext();
  const { isOpen, toggleOpen } = useMenu();
  const navigation = ["home", ...Object.keys(content)];

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        navigation={navigation}
        toggleOpen={toggleOpen}
      />

      <Navigation navigation={navigation} />
    </>
  );
}

export default Navigations;
