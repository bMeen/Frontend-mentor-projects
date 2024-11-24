import Header from "../../components/Header";
import { useContentContext } from "../../context/ContentContext";
import Loader from "../../ui/Loader";

import MainHome from "./MainHome";

function Home() {
  const { isLoading } = useContentContext();
  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-blue-900 bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover bg-no-repeat sm:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')]">
      <Header />
      <MainHome />
    </div>
  );
}

export default Home;
