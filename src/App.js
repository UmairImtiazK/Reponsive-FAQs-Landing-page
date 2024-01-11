import "./App.css";
import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";
import starIcon from './assets/images/icon-star.svg';
import { useState } from "react";

function App() {
  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);
 
  return (
    <div className="parentCont">
    <div className="childCont">
      <div className="headingCont">
      <img className="starIcon" src={starIcon} alt="" />
      <h1>FAQs</h1>
      </div>
      <div className="QuestionCont">
        <div className="question">
          What is Frontend Mentor, and how will it help me?
          <div className="IconCont">
            <img onClick={()=>{setopen1(!open1)}} className="icon" src={!open1?plusIcon : minusIcon} alt="" />
          </div>
        </div>
        { open1 &&

          <div className="answer">
          Frontend Mentor offers realistic coding challenges to help developers
          improve their frontend coding skills with projects in HTML, CSS, and
          JavaScript. It's suitable for all levels and ideal for portfolio
          building.
        </div>
        }
      </div>
      <div className="QuestionCont">
        <div className="question">
          Is Frontend Mentor free?
          <div className="IconCont">
            <img onClick={()=>{setopen2(!open2)}} className="icon" src={!open2?plusIcon : minusIcon} alt="" />
          </div>
        </div>
        { open2 &&
        <div className="answer">
          Yes, Frontend Mentor offers both free and premium coding challenges,
          with the free option providing access to a range of projects suitable
          for all skill levels.
        </div>}
      </div>
      <div className="QuestionCont">
        <div className="question">
          How can I get help if I'm stuck on a Frontend Mentor challenge?
          <div className="IconCont">
            <img onClick={()=>{setopen3(!open3)}} className="icon" src={!open3?plusIcon : minusIcon} alt="" />
          </div>
        </div>
        { open3 &&
        <div className="answer">
          The best place to get help is inside Frontend Mentor's Discord
          community. There's a help channel where you can ask questions and seek
          support from other community members.
        </div>}
      </div>

      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Umair Imtiaz Khokhar</a>.
      </div>
    </div>
    </div>
  );
}

export default App;
