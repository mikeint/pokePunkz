import React from "react";
import "./RoadMap.scss";
import { ReactComponent as WorkIcon } from "./ball.svg";
import { ReactComponent as SchoolIcon } from "./ball.svg";

import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import holo from '../../files/images/sets/3.gif';

function RoadMap() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#e1bd15" };

	return (
		<div className="roadMapContainer">
			<h1 className="roadMapTitle">ROADMAP</h1>
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
						<div className="holoContainer">{element.id === 3 ? <img src={holo} /> : ""} </div>
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
