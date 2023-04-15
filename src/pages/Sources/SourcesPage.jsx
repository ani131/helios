import React from "react";
import "./SourcesPage.css";
import WorkLog from "./pdf/TSAWorkLog.pdf";
import CopyrightChecklist from "./pdf/TSACopyrightChecklist.pdf";

const SourcesPage = () => {
  return (
    <div className="source">
      <div className="ref-container">
        <h1>References</h1>
        <ul>
          <li>
            <a href={WorkLog} target="_blank">
              TSA Plan of Work Log
            </a>
          </li>
          <li>
            <a href={CopyrightChecklist} target="_blank">
              TSA Copyright Checklist
            </a>
          </li>
        </ul>
      </div>
      <div className="sources-container">
        <h1>Sources</h1>
        <ul>
          <li>
            <a href="https://react.dev/">ReactJS</a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              HTML5
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>
          </li>
        </ul>
      </div>
      <div className="sources-container">
        <h1>Royalty-Free Media</h1>
        <ul>
          <li>
            <a href="https://www.pexels.com/video/video-presentation-of-the-outer-space-3194277/">
              Video presentation of the outer space by Pexels
            </a>
          </li>
          <li>
            <a href="https://www.freepik.com/free-photo/earth-galaxy-elements-this-image-furnished-by-nasa_13180419.htm#query=earth%20space&position=0&from_view=keyword&track=robertav1_2_sidr">
              Earth and galaxy elements image by tawatchai07 on Freepik
            </a>
          </li>
          <li>
            <a href="https://www.vecteezy.com/png/17173363-first-aid-icon-medical-flat-icons-elements-design">
              Medical PNGs by Vecteezy
            </a>
          </li>
          <li>
            <a href="https://www.pexels.com/photo/blue-and-gray-moon-during-nighttime-5439/">
              Blue and gray moon during nighttime photo by Pexels
            </a>
          </li>
          <li>
            <a href="https://www.pexels.com/photo/milky-way-illustration-1169754/">
              Milky Way by Philippe Donn
            </a>
          </li>
          <li>
            <a href="https://pixabay.com/photos/space-galaxy-universe-astronomy-2742113/">
              Space image by Gerd Altmann from Pixabay
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/photos/F-pSZO_jeE8?fbclid=IwAR2Qf6MTZasilrVvkPHvp0VCTgLmdAXVmMB6fjZwi-KWrJcPoFok4wTIFLE">
              Photo by Jongsun Lee on Unsplash
            </a>
          </li>
        </ul>
      </div>
      <div className="sources-container">
        <h1>AI-Generated Art (free to use)</h1>
        <ul>
          <li>
            <a href="https://starryai.com/">StarryAI</a>
          </li>
          <li>
            <a href="https://www.fotor.com/features/ai-image-generator/">
              Fotor AI
            </a>
          </li>
          <li>
            <a href="https://nightcafe.studio/">NightCafe</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SourcesPage;
