//image-hero-mobile.png
//image-hero-desktop.png

import { useEffect, useState } from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  @media (min-width: 790px) {
    width: 50%;
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;

  @media (min-width: 790px) {
    width: 70%;
    margin: 0;
  }
`;

function Hero() {
  const [imgSrc, setImgsrc] = useState("");

  useEffect(function () {
    function loadResponsiveImg() {
      const width = window.innerWidth;

      if (width > 790) {
        setImgsrc("../images/image-hero-desktop.png");
      } else setImgsrc("../images/image-hero-mobile.png");
    }

    loadResponsiveImg();
    window.addEventListener("resize", loadResponsiveImg);

    return () => window.removeEventListener("resize", loadResponsiveImg);
  }, []);

  return (
    <ImgContainer>
      <Img src={imgSrc} />
    </ImgContainer>
  );
}

export default Hero;
