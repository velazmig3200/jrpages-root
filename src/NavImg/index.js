import React from "react";
import navImgCss from "./navImg.module.css";
import IMG_5372 from "./IMG_5372.jpg";

function index() {
	function dropdownItems(items) {
		let result = [];
		let topLeftValue = [
			{ left: "0", top: "50%" },
			{ left: "13%", top: "20%" },
			{ left: "50%", top: "0" },
			{ left: "87%", top: "20%" },
			{ left: "100%", top: "50%" }
		];

		for (let i in items) {
			result.push(
				<a
					key={i}
					className={`${navImgCss.dropdownItem}`}
					style={{ ...topLeftValue[i] }}>
					{items[i]}
				</a>
			);
		}
		return result;
	}

	return (
		<div className={`${navImgCss.mainContainer}`}>
			<div className={`${navImgCss.imgCircleContainer}`}>
				<img
					className={`${navImgCss.IMG_5372}`}
					src={IMG_5372}
					alt="self portrait"
				/>
			</div>
			{dropdownItems(["Home", "About", "Services", "home", "about"])}
		</div>
	);
}

export default index;
