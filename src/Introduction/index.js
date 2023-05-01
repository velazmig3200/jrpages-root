import React from "react";
import indexCss from "../index.module.css";
import introductionCss from "./introduction.module.css";
import IMG_5372 from "./IMG_5372.jpg";

function index() {
	return (
		<div className={`${indexCss.container}`}>
			<p>My name is Miguel Velazquez Jr, but you can call me Jr.</p>
			<p>
				I am a skilled web developer and designer looking to help small
				businesses like yours!
			</p>
			<div className={`${introductionCss.imgCircleContainer}`}>
				<img
					className={`${introductionCss.IMG_5372}`}
					src={IMG_5372}
					alt="self portrait"></img>
			</div>
		</div>
	);
}

export default index;
