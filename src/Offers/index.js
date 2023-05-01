import React from "react";
import indexCss from "../index.module.css";

function index() {
	return (
		<div className={`${indexCss.container}`}>
			<h2>[How Does It Work?]</h2>
			<p>
				[Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
				fermentum eros placerat augue venenatis, eu sagittis eros
				iaculis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nam fermentum eros placerat augue venenatis, eu sagittis eros
				iaculis.]
			</p>
			<h2>[Pricing]</h2>
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
