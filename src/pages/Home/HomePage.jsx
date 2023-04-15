import React, { useState } from "react";
import NavbarHome from "../../components/NavbarHome/NavbarHome";
import Video from "../../videos/space1.mp4";
import Image from "../../img/home-mobile.jpg";
import {
  HomeContainer,
  HomeBg,
  VideoBg,
  HomeH1,
  HomeBtnContainer,
  HomeContent,
  HomeP,
  ArrowForward,
  ArrowRight,
  Button,
  ImgBG,
} from "./HomePageElements";

const HomePage = () => {
  const [hover, setHover] = useState(false);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <NavbarHome />
      <HomeContainer>
        <HomeBg>
          {isMobile ? (
            <ImgBG src={Image} alt="" />
          ) : (
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
          )}
        </HomeBg>
        <HomeContent>
          <HomeH1>Expand Your Horizons</HomeH1>
          <HomeP>Join us today and embark on a life-changing experience.</HomeP>
          <HomeBtnContainer>
            <Button
              to="https://docs.google.com/forms/d/e/1FAIpQLScywlM8GMAfbV2SDfBNzxAczfnkBLEKZXqjs8CqO5vwbbvwQA/viewform"
              onMouseEnter={onHover}  
              onMouseLeave={onHover}
            >
              Sign up {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HomeBtnContainer>
        </HomeContent>
      </HomeContainer>
    </>
  );
};

export default HomePage;
