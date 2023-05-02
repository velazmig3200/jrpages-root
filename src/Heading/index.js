import React from "react";
import indexCss from "../index.module.css";
import headingCss from "./heading.module.css";
import blurry_code_1 from "./blurry_code_1.png";

function index() {
	return (
		<div className={`${indexCss.container} ${headingCss.container}`}>
			<img className={`${headingCss.bgImg}`} src={blurry_code_1} />
			<h1
				className={`${headingCss.class1}`}
				style={{ marginTop: "2.2rem" }}>
				Grow your business with a fully custom webpage
			</h1>
			<p className={`${headingCss.class1}`}>Hello, my name is Jr.</p>
			<p className={`${headingCss.class1}`}>
				I am a skilled web developer and designer looking to help small
				businesses like yours!
			</p>

			<div className={`${headingCss.portraitBuffer}`}></div>
		</div>
	);
}

export default index;
