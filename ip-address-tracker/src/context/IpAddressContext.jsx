import { createContext, useContext, useEffect, useState } from "react";
import { API_KEY } from "../config";

const IpAddressContext = createContext();

function IpAddressProvider({ children }) {
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({});

  useEffect(function () {
    async function getAddress() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`,
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getAddress();
  }, []);

  async function handleSearch(e) {
    try {
      e.preventDefault();
      setIsLoading(true);
      setError("");
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress&domain=${address}`,
      );
      console.log(response);
      if (!response.ok)
        throw new Error(
          `Something went wrong (${response.status}), Try again and input a valid IP Address`,
        );

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
      setAddress("");
    }
  }

  return (
    <IpAddressContext.Provider
      value={{ isLoading, data, address, setAddress, handleSearch, error }}
    >
      {children}
    </IpAddressContext.Provider>
  );
}

function useAddress() {
  const context = useContext(IpAddressContext);
  if (context === undefined)
    throw new Error("IpAddressContext was used outside IpAddressProvider");

  return context;
}

export { IpAddressProvider, useAddress };
