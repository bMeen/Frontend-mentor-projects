import { useAddress } from "../context/IpAddressContext";
import DetailList from "./DetailList";
import FeedBack from "./FeedBack";

function Details() {
  const { data, isLoading, error } = useAddress();

  const {
    ip,
    location: { country, region, timezone, postalCode } = {},
    isp,
  } = data;

  if (isLoading) return <FeedBack message="Loading" />;

  if (error) return <FeedBack message={error} />;

  return (
    <ul className="relative z-40 mx-auto max-w-sm translate-y-1/2 space-y-6 rounded-2xl bg-white py-6 md:absolute md:bottom-0 md:left-1/2 md:flex md:w-11/12 md:max-w-full md:-translate-x-1/2 md:items-center md:justify-between md:space-y-0 md:divide-x-[1px] md:py-9 md:text-left lg:mx-auto lg:max-w-6xl">
      <DetailList detail="IP Address" value={ip} />
      <DetailList
        detail="Location"
        value={`${region}, ${country} ${postalCode}`}
      />
      <DetailList detail="Timezone" value={`UTC ${timezone}`} />
      <DetailList detail="ISP" value={isp} />
    </ul>
  );
}

export default Details;
