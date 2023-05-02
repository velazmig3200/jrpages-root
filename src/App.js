import React, { useEffect, useRef, useState } from "react";
import Heading from "./Heading/index";
import Introduction from "./Introduction/index";
import Persuasion from "./Persuasion/index";
import Offers from "./Offers/index";
import NavImg from "./NavImg/index";
import indexCss from "./index.module.css";

function App() {
	const mainRef = useRef(null);
	const [navImgState, setNavImgState] = useState(0);

	async function getMainRef() {
		await mainRef.current;
		const mainRefTop = mainRef.current.getBoundingClientRect().top;

		mainRefTop < (window.innerHeight / 3) * -1
			? setNavImgState(1)
			: setNavImgState(0);
	}

	return (
		<main ref={mainRef} onWheel={getMainRef}>
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

			<NavImg navImgState={navImgState} setNavImgState={setNavImgState} />
		</main>
	);
}

export default App;
