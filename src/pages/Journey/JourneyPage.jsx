import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, React } from "react";
import "./JourneyPage.css";
import "../Home/Info/Info.css";
import JourneyImage from "../../img/JourneyHealth.png";

gsap.registerPlugin(ScrollTrigger);

export default function JourneyPage() {
  const component = useRef();
  const slider = useRef();

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // horizontal scrolling stuff
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: false,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      <div class="firstContainer">
        <div class="header">
          <h1 style={{ textShadow: "5px 5px 4px rgba(0, 0, 0, 1)" }}>
            Your Dream Journey to Space
          </h1>
        </div>
        <div class="plans">
          <div class="plan">
            <h2>In-n-Out (MOST POPULAR)</h2>
            <p>
              Our shortest flight that takes you up into space for a few hours
              for a quick photo opportunity and comes right back down. Spacewalk
              and free photo and video package included.
            </p>
          </div>
          <div class="plan">
            <h2>Orbital</h2>
            <p>
              Ready for a day of fun in space? Our orbital flight plan takes you
              around the world in 24 hours. Take a look at how our planet
              changes over the course of a day and bring back some fun stories
              for family and friends. Spacewalk, photo and video package, and
              food and drinks included.
            </p>
          </div>
          <div class="plan">
            <h2>Residential</h2>
            <p>
              Spend 4 days in an out-of-this world experience. Our residential
              plan takes you up to space and docks at the ISS, allowing you to
              see what astronauts around the world do in space. Spacewalk, photo
              and video package, food and drinks, and Russian lessons included.
            </p>
          </div>
        </div>
        <br />
        <div className="header-p">
          {isMobile ? null : (
            <p className="p-tag">
              Experience the ultimate adventure of a lifetime and become one of
              the few to travel beyond the Earth's atmosphere with our three
              plans!
            </p>
          )}
        </div>
      </div>
      <div ref={slider} className="container">
        <div className="panel blue costs">
          <h1
            className="slide-title header"
            style={{
              color: "#fff",
              textSize: "15vh",
              textShadow: "5px 5px 4px rgba(0, 0, 0, 1)",
            }}
          >
            Cost Breakdown
          </h1>
          {/* <p className="slide-description">
            Launch day is here! As you arrive at the launch site, you'll be
            greeted by our experienced team who will guide you through the
            pre-launch procedures. You'll undergo a final medical checkup,
            receive a safety briefing, and put on your flight suit. You'll then
            board the spacecraft and get ready for the adventure of a lifetime!
          </p> */}
          <div class="table-container">
            <table>
              <tr>
                <th></th>
                <th>In-n-Out</th>
                <th>Orbital</th>
                <th>Residential</th>
              </tr>
              <tr>
                <td>Training</td>
                <td>$30,000</td>
                <td>$30,000</td>
                <td>$50,000</td>
              </tr>
              <tr>
                <td>Board</td>
                <td>$15,000</td>
                <td>$15,000</td>
                <td>$80,000</td>
              </tr>
              <tr>
                <td>Spacecraft Fees</td>
                <td>$200,000</td>
                <td>$445,000</td>
                <td>$670,000</td>
              </tr>
              <tr>
                <td>Travel Insurance</td>
                <td>$5,000</td>
                <td>$10,000</td>
                <td>$100,000</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>$250,000</td>
                <td>$500,000</td>
                <td>$900,000</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="panel red">
          <h1
            className="slide-title header"
            style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 1)" }}
          >
            1) Safety First!
          </h1>
          <div className="panel-content">
            {isMobile ? (
              <p
                className="slide-description"
                style={{
                  color: "#fff",
                  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
                }}
              >
                After attending a free health consultation by our experienced
                team of doctors, move in to our on-site training rooms! Our
                rooms have suite-style living, with your own bathroom, bedroom,
                and kitchen along with many other utilities. You will be living
                here for nearly six months, so get comfortable!
              </p>
            ) : (
              <p
                className="slide-description"
                style={{
                  color: "#fff",
                  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
                }}
              >
                After attending a free health consultation by our experienced
                team of doctors, move in to our on-site training rooms! Our
                rooms have suite-style living, with your own bathroom, bedroom,
                and kitchen along with many other utilities. You will be living
                here for nearly six months, so get comfortable! Passengers who
                select the residential plan will receive more training and will
                have to live on-site for eight months. They will also get more
                luxury accommodations.
              </p>
            )}

            <img className="journey-image" src={JourneyImage} alt="image" />
          </div>
        </div>

        <div className="panel orange">
          <h1 className="slide-title header" style={{ color: "#fff" }}>
            2) Takeoff on the Spacecraft of the Future!
          </h1>
          <p
            className="slide-description"
            style={{
              color: "#808080",
              textShadow: "2px 2px 2px rgba(0, 0, 0, 1)",
            }}
          >
            Our spacecraft is a state-of-the-art vehicle that is designed to
            provide a safe and comfortable journey to space. It is equipped with
            advanced life-support systems and radiation shielding materials that
            can protect passengers from cosmic rays and solar flares. Its
            onboard avionics system includes a sophisticated flight computer
            that can navigation tasks, a high-speed data link that can transmit
            telemetry back to Earth in real time, as well as:
          </p>
          <div>
            <h1 style={{ color: "#f5f5f5" }}>30,000 km/s acceleration</h1>
          </div>
        </div>
        <div className="panel purple">
          <h1
            className="slide-title header"
            style={{
              color: "#fff",
              textShadow: "4px 4px 4px rgba(0, 0, 0, 1)",
            }}
          >
            3) Congrats! You're in space!
          </h1>
          <p
            className="slide-description"
            style={{
              color: "#f5f5f5",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            }}
          >
            Once in space, space tourists experience a weightlessness that is
            both exhilarating and disorienting. They float freely through the
            cabin, their movements unhindered by the pull of gravity. The
            silence of space is palpable, broken only by the hum of the
            spacecraft's systems and the occasional radio transmission from
            mission control. Looking out of the window, the tourists see a vast
            expanse of stars and galaxies stretching out in all directions. The
            beauty and majesty of the universe is awe-inspiring, and the
            astronaut feels a deep sense of wonder and humility in the face of
            its vastness.
          </p>
          <div class="learn-more"></div>
        </div>
      </div>
      <div className="lastContainer">
        <h1
          className="slide-title header"
          style={{ textShadow: "3px 3px 3px rgba(0, 0, 0, 1)" }}
        >
          4) Coming Back to Earth!
        </h1>
        <p
          className="slide-description"
          style={{
            color: "#000",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          After a thrilling spaceflight, it's time to return to Earth. Our
          spacecraft is equipped with a reliable re-entry system that ensures a
          smooth landing. As you return to Earth, you'll experience the thrill
          of acceleration and deceleration. You'll then land back on Earth,
          where you'll be greeted by our team and have the opportunity to
          celebrate your incredible journey.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScywlM8GMAfbV2SDfBNzxAczfnkBLEKZXqjs8CqO5vwbbvwQA/viewform">
          <button class="button">Register Now!</button>
        </a>
      </div>
    </div>
  );
}
