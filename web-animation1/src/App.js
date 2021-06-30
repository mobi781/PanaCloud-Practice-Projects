import React from "react";
import { Alice } from "./Components/Alice.jsx";
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
	const sceneryFrames = [
		{ transform: "translateX(100%)" },
		{ transform: "translateX(-100%)" },
	];

	const sceneryTimingBackground = {
		duration: 6000,
		iterations: Infinity,
	};

	// const sceneryTimingForeground = {
	// 	duration: 1200,
	// 	iterations: Infinity,
	// };

	const background1Movement = useWebAnimations({
		keyframes: sceneryFrames,
		animationOptions: sceneryTimingBackground,
	});
	// const { ref, playState, getAnimation } = useWebAnimations({
	// 	keyframes: {
	// 		transform: "translateX(2000px)", // Move by 500px
	// 		// background: ["red", "blue", "green"], // Go through three colors
	// 	},
	// 	animationOptions: {
	// 		// delay: 500, // Start with a 500ms delay
	// 		duration: 3000, // Run for 1000ms
	// 		iterations: Infinity, // Repeat once
	// 		// direction: "forward", // Run the animation forwards and then backwards
	// 		// easing: "ease-in-out", // Use a fancy timing function
	// 	},
	// });
	// 	// onReady: ({ playState, animate, animation }) => {
	// 	//   // Triggered when the animation is ready to play
	// 	// },
	// 	// onUpdate: ({ playState, animate, animation }) => {
	// 	//   // Triggered when the animation enters the running state or changes state
	// 	// },
	// 	// onFinish: ({ playState, animate, animation }) => {
	// 	//   // Triggered when the animation enters the finished state
	// 	// },
	// 	// More useful options...
	// });
	return (
		<>
			{/* <h1 ref={background1Movement.ref}>WEB ANIMATION</h1> */}
			<Alice />
		</>
	);
}

export default App;
