import React from "react";
import "./TrainingPage.css";
import "../Home/Info/Info.css";
import JourneyAstronaut from "../../img/JourneyAstronaut.png";
import JourneyPeople from "../../img/JourneyPeople.png";
import JourneyPlanes1 from "../../img/JourneyPlanes1.png";
import JourneyPlanes2 from "../../img/JourneyPlanes2.png";

function TrainingPage() {
  return (
    // added classname for div to add flex
    <div className="training-page">
      <h1
        style={{
          textAlign: "center",
          fontSize: "10vh",
          padding: "20px",
          paddingTop: "40px",
        }}
      >
        Training
      </h1>
      <div className="training-container">
        <p
          className="slide-description"
          style={{
            color: "#fff",
            flex: 1,
            textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
          }}
        >
          Future astronauts will require space suits and flight suits that are
          specifically designed to protect them from the harsh conditions of
          spaceflight. These suits will provide a number of functions, including
          insulation from extreme temperatures, protection from radiation, and
          the ability to maintain breathable air and pressure. Future astronauts
          are fitted with tailor-made suits made from a combination of top grade
          material, including nomex, kevlar, gore-tex, mylar, and neoprene.
        </p>
        <img className="journey-image" src={JourneyAstronaut} alt="image" />
      </div>
      <div className="training-container">
        <img className="journey-image" src={JourneyPeople} alt="image" />
        <p
          className="slide-description"
          style={{
            color: "#fff",
            textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
          }}
        >
          Once future astronauts are fitted with their suits, they will need to
          undergo extensive training to prepare them for the unique challenges
          of spaceflight. This training will involve connecting them with
          leaders in the space industry, including engineers, scientists, and
          other experts who can provide them with the knowledge and skills they
          need to succeed in space. Additionally, They will also be trained in
          emergency procedures and survival skills, in case of unexpected events
          during their mission.
        </p>
      </div>
      <div className="training-container">
        <p
          className="slide-description"
          style={{
            color: "#fff",
            textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
          }}
        >
          After the initial training, the second phase takes place at our
          Texas-based training center, where trainees are primed physically to
          ensure a secure journey. This involves adopting a healthy lifestyle
          and diet to maintain peak fitness levels. To simulate the conditions
          of space, trainees will undergo multiple rounds in a spacious
          centrifuge. Additionally, they will experience underwater training and
          parabolic flights. These flights entail high-altitude jets soaring
          through the atmosphere, reaching altitudes of up to 80,000 feet,
          experiencing weightlessness and even nose dives.
        </p>
        <img className="journey-image" src={JourneyPlanes1} alt="image" />
      </div>
      {/* <div className="training-container">
        <img className="journey-image" src={JourneyPlanes2} alt="image" />
      </div> */}
      {/* <h2>Training Page</h2>
      <p>Welcome to our training page!</p>
      <ul>
        <li>Training topic 1</li>
        <li>Training topic 2</li>
        <li>Training topic 3</li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        eleifend nibh id tincidunt eleifend. Sed convallis odio sit amet lorem
        vestibulum, eu elementum quam interdum. Nam eget neque id ex tincidunt
        dictum. Nulla vel dolor at nisi pellentesque fringilla vitae eget dolor.
        Nullam consequat pharetra erat, in rhoncus est interdum vel. Duis
        ultrices auctor sem, eu pellentesque ipsum varius eu. Morbi sit amet
        tortor ut velit molestie pretium.
      </p> */}
    </div>
  );
}

export default TrainingPage;
