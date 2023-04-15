import React, { useState, useEffect } from "react";

import Info from "./Info.css";
import InfoImage from "../../../img/HomeInfo.jpg";
import { Link } from "react-router-dom";

const quotes = [
  {
    text: "Space tourism is a thrilling adventure that will open up new opportunities for exploration and discovery, and inspire future generations to reach for the stars.",
    author: "Richard Branson",
    company: "Virgin Galactic",
  },
  {
    text: "The stars are not just out of reach, they are within reach. Space tourism will allow us to experience the wonder and majesty of our universe in a way that was once only the province of astronauts and scientists.",
    author: "Elon Musk",
    company: "SpaceX",
  },
  {
    text: "Space tourism is more than just a novelty or a luxury experience. It is a gateway to a new era of human exploration and discovery, where we can learn more about ourselves and our place in the cosmos.",
    author: "Jeff Bezos",
    company: "Blue Origin",
  },
  {
    text: "The beauty of space is something that cannot be fully captured in words or images. It is an experience that must be felt firsthand. Space tourism will give people the opportunity to see the world from a whole new perspective.",
    author: "Anousheh Ansari",
    company: "Private space explorer",
  },
  {
    text: "Space tourism will not only allow us to explore the cosmos, but also to appreciate the fragility of our planet and the need to protect it. It is a transformative experience that can change the way we think about our place in the universe.",
    author: "Peter Diamandis",
    company: "XPRIZE",
  },
];

const InfoSection = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const [quoteIndex, setQuoteIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="quote-container">
        <div className="quote">
          <p className="quote-text">"{quotes[quoteIndex].text}"</p>
          <p className="quote-author">
            - {quotes[quoteIndex].author}, {quotes[quoteIndex].company}
          </p>
        </div>
      </div>
      <div className="text-container">
        <h1 className="text-title">
          Welcome to <span style={{ color: "#f4a261" }}>Helios.</span>
        </h1>
        <p className="text-paragraph">
          We make space travel accessible to all through safe and affordable
          trips. Our company is comprised of skilled engineers, scientists, and
          enthusiasts who have collaborated with top space agencies to ensure
          reliable and unforgettable experiences.
        </p>
      </div>
      <section className="info-section-wrapper">
        <h1 className="section-title" title="Section Title">
          The Final Frontier
        </h1>

        <div className="info-container">
          {/* <div className="info-text-wrapper">
            {/* <h2 className="info-title">Rocket Info</h2> */}
          {/* {isMobile ? (
              <p className="info-subtitle-mobile">
                Welcome to Helios: a passionate team that aims to make space
                travel accessible to all through safe and affordable trips. Our
                company is comprised of skilled engineers, scientists, and
                enthusiasts who have collaborated with top space agencies to
                ensure reliable and unforgettable experiences.
              </p>
            ) : (
              <p className="info-subtitle">
                Welcome to Helios: a passionate team that aims to make space
                travel accessible to all through safe and affordable trips. Our
                company is comprised of skilled engineers, scientists, and
                enthusiasts who have collaborated with top space agencies to
                ensure reliable and unforgettable experiences.
              </p>
            )} */}
          {/* </div> */}
          <Link to="/training">
            <div className="section-button">
              <h1>Start training now!</h1>
            </div>
          </Link>
          <div className="info-text-wrapper-right">
            {isMobile ? null : (
              <p className="info-subtitle-right">
                Helios is committed to providing a unique journey, from the
                spacecraft's boarding to returning home. Whether you are a
                seasoned traveler or a first-time space tourist, we are here to
                make your dream of space travel a reality. So come join us on
                this incredible adventure - the final frontier awaits!
              </p>
            )}
          </div>

          {/* <div className="info-image-wrapper">
          <img className="info-image" src={InfoImage} alt="helios" />
        </div> */}
        </div>
      </section>
    </>
  );
};

export default InfoSection;

// const SectionTitle = styled.h1`
//   font-size: 4rem;
//   font-weight: 700;
//   color: #fff;
//   margin-top: 0;
// `;

// const InfoSectionWrapper = styled.section`
//   width: 100%;
//   background-color: #040d20;
// `;

// const InfoContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 120px 0;
// `;

// const InfoTextWrapper = styled.div`
//   max-width: 500px;
//   text-align: left;
//   padding-right: 50px;
// `;

// const InfoTitle = styled.h2`
//   font-size: 48px;
//   font-weight: bold;
//   color: #fff;
//   margin-bottom: 16px;
// `;

// const InfoSubtitle = styled.p`
//   font-size: 24px;
//   color: #fff;
//   margin-bottom: 32px;
// `;

// const InfoImageWrapper = styled.div`
//   max-width: 500px;
//   width: 100%;
//   height: 100%;
// `;

// const InfoImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

{
  /* // <InfoSectionWrapper>
    //   <SectionTitle title="Section Title" />
    //   <InfoContainer>
    //     <InfoTextWrapper>
    //       <InfoTitle>Rocket Info</InfoTitle>
    //       <InfoSubtitle>
    //         WOWOWOW did u know u could blast off into the world of rocket
    //         science! Explore the latest advancements and discover the
    //         fascinating history of space travel.
    //       </InfoSubtitle>
    //     </InfoTextWrapper>
    //     <InfoImageWrapper>
    //       <InfoImage
    //         src="https://via.placeholder.com/500x500/FEFBFF/040D20/?text=Rocket+Image"
    //         alt="rocket"
    //       />
    //     </InfoImageWrapper>
    //   </InfoContainer>
    // </InfoSectionWrapper> */
}
