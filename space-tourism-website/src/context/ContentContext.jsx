import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const ContentContext = createContext();

function ContentContextProvider({ children }) {
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { destinations, crew, technology } = content;

  useEffect(function () {
    async function load() {
      try {
        setIsLoading(true);
        const res = await fetch("./data/data.json");
        const data = await res.json();
        setContent(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  return (
    <ContentContext.Provider
      value={{ destinations, isLoading, crew, technology, content }}
    >
      {children}
    </ContentContext.Provider>
  );
}

function useContentContext() {
  const context = useContext(ContentContext);
  if (context === undefined)
    throw new Error("ContentContext was used outside ContentContextProvider");
  return context;
}

export { ContentContextProvider, useContentContext };
