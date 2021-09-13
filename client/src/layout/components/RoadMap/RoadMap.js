import React from "react";
import "./RoadMap.scss";
import { ReactComponent as WorkIcon } from "./ball.svg";
import { ReactComponent as SchoolIcon } from "./ball.svg";

import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import holo from '../../files/images/sets/3.gif';
import coin from '../../files/images/6.png';
import packs_og from '../../files/images/packs_og.png';
import packs from '../../files/images/packs.png';

function RoadMap() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#e1bd15" };

	return (
		<div className="roadMapContainer">
			<h1 className="roadMapTitle">PATH</h1>
			<VerticalTimeline>
				{timelineElements.map((element, i) => {
				let isWorkIcon = element.icon === "work";
				let showButton =
					element.buttonText !== undefined &&
					element.buttonText !== null &&
					element.buttonText !== "";

				return (
					<VerticalTimelineElement
					key={i}
					date={element.date}
					dateClassName="date"
					iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
					icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
					>
						<h3 className="vertical-timeline-element-title">{element.title}</h3>
						<h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
						<p id="description">{element.description}</p>
						<div className="imgRMContainer">{element.id === 2 ? <img src={packs_og} alt="packs_og" /> : ""} </div>
						<div className="imgRMContainer">{element.id === 3 ? <img src={holo} alt="holo" /> : ""} </div>
						<div className="imgRMContainer">{element.id === 4 ? <img src={packs} alt="packs" /> : ""} </div>
						<div className="imgRMContainer">{element.id === 6 ? <img src={coin} alt="coin" /> : ""} </div>
						{showButton && (
						<a 
							className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`} 
							href={element.url} 
							target="_blank" 
							rel="noreferrer"
						>
							{element.buttonText}
						</a>
					)}
					</VerticalTimelineElement>
				);
				})}
			</VerticalTimeline>
		</div>
	);
}

export default RoadMap;
