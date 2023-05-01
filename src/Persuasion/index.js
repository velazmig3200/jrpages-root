import React from "react";
import indexCss from "../index.module.css";

function index() {
	return (
		<div className={`${indexCss.container}`}>
			<h2>[The Problem]</h2>
			<p>
				[Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
				fermentum eros placerat augue venenatis, eu sagittis eros
				iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nam fermentum eros placerat augue venenatis, eu sagittis eros
				iaculis.]
			</p>
			<h2>[Value Proposition]</h2>
			<p>
				[Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
				fermentum eros placerat augue venenatis, eu sagittis eros
				iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nam fermentum eros placerat augue venenatis, eu sagittis eros
				iaculis.]
			</p>
		</div>
	);
}

export default index;
