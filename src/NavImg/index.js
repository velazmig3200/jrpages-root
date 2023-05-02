import React, { useEffect } from "react";
import navImgCss from "./navImg.module.css";
import IMG_5372 from "./IMG_5372.jpg";

function index({ navImgState }) {
	const cssRoot = document.querySelector(":root");
	const cssImgSize = v => cssRoot.style.setProperty("--IMG_5372-size", v);
	const imgSizeMax = 208;
	const imgSizeMin = 100;
	let imgSize = imgSizeMax;
	let navImgAnimationID = null;

	useEffect(() => {
		navImgState == 1 ? (imgSize = imgSizeMax) : (imgSize = imgSizeMin);
		clearInterval(navImgAnimationID);
		navImgAnimationID = setInterval(navImgAnimation, 1, navImgState);
	}, [navImgState]);

	function navImgAnimation(state) {
		if (state == 1) {
			if (imgSize <= imgSizeMin) {
				clearInterval(navImgAnimationID);
				return;
			}
			imgSize -= 1;
			cssImgSize(`${imgSize}px`);
		} else {
			if (imgSize >= imgSizeMax) {
				clearInterval(navImgAnimationID);
				return;
			}
			imgSize += 1;
			cssImgSize(`${imgSize}px`);
		}
	}

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
					className={`${navImgCss.dropdownItem} ${
						navImgState && navImgCss.dropdownOff
					}`}
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
