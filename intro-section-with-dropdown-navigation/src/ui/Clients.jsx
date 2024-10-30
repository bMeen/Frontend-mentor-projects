import styled from "styled-components";

const clients = [
  "../images/client-databiz.svg",
  "../images/client-audiophile.svg",
  "../images/client-meet.svg",
  "../images/client-maker.svg",
];

const ImgDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 50rem;
  margin: 0 auto;

  & img {
    width: 8rem;
  }

  @media (min-width: 790px) {
    margin: 0;
    width: 100%;
  }
`;

function Clients() {
  return (
    <ImgDisplay>
      {clients.map((item, i) => (
        <img src={item} key={i} />
      ))}
    </ImgDisplay>
  );
}

export default Clients;
