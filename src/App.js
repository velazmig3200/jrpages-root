import React from "react";
import Heading from "./Heading/index";
import Introduction from "./Introduction/index";
import Persuasion from "./Persuasion/index";
import Offers from "./Offers/index";
import NavImg from "./NavImg/index";
import indexCss from "./index.module.css";

function App() {
	return (
		<main>
			{/* <div
				style={{
					height: "var(--header-height)",
					width: "100%",
					backgroundColor: "red",
					zIndex: "4",
					position: "sticky",
					top: "0px"
				}}></div> */}
			<Heading />
			<Introduction />
			<Persuasion />
			<Offers />

			<NavImg />
		</main>
	);
}

export default App;
