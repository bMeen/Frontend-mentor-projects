import { useAddress } from "../context/IpAddressContext";

function Input() {
  const { address, setAddress, handleSearch } = useAddress();

  return (
    <form className="mx-auto -mb-[125px] flex w-full max-w-sm cursor-pointer justify-center md:mb-16 md:max-w-xl">
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        type="text"
        placeholder="Search for any IP address or domain"
        className="w-11/12 cursor-pointer rounded-l-2xl px-6 py-3 text-base outline-none md:text-lg"
      />
      <button
        onClick={(e) => handleSearch(e)}
        className="rounded-r-2xl bg-very-dark-gray px-4 py-3 hover:bg-dark-gray"
      >
        <img src="/images/icon-arrow.svg" alt="icon" />
      </button>
    </form>
  );
}

export default Input;
//-mb-[125px]
