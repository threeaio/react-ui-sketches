
import { getSvgPath } from "figma-squircle";

export const HelloBubble = () => {

const getClipPathWithRoundedPointer = () => {
	const width = 700;
	const height = 400;

	const svgPath = getSvgPath({
		width,
		height,
		cornerRadius: 54,
		cornerSmoothing: 0.8,
	});

	// Pointer parameters (tweak to taste)
	const centerX = width / 2;     // shift if needed
	const pointerHeight = 46;      // how far it sticks out
	const neckWidth = 120;         // width where it meets the box
	const tipRadius = pointerHeight ;          // roundness of the tip
	const sidePull = 1;           // how curvy the sides are


	const baseY = height;
	const leftNeckX = centerX - neckWidth / 2;
	const rightNeckX = centerX + neckWidth / 2;

	// Tip arc anchors (start/end of the rounded cap), both above the bottommost tip by tipRadius
	const tipArcY = baseY + pointerHeight - tipRadius;
	const tipBottomY = baseY + pointerHeight;

	const pointer = [
		`M ${leftNeckX} ${baseY}`,
		`C ${leftNeckX + sidePull} ${baseY}, ${centerX} ${tipArcY - sidePull}, ${centerX} ${tipBottomY}`,
		`C ${centerX} ${tipArcY - sidePull}, ${rightNeckX - sidePull} ${baseY}, ${rightNeckX} ${baseY}`,
		'Z',
	].join(' ');

	return `path(evenodd, '${svgPath} ${pointer}')`;
};
	return (
		<div className="relative h-full w-full flex items-center justify-center">
				<div className="w-[700px] h-[450px] bg-linear-to-t from-pink-500 to-purple-500 flex items-center justify-center relative -top-24" style={{ clipPath: getClipPathWithRoundedPointer() }}
				>
                    <p className="text-[130px] text-white tracking-tighter font-black uppercase -rotate-5  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/5"
                    >Hello!</p>
					<p className="text-[130px] tracking-tighter font-black text-black uppercase -rotate-3  absolute top-1/2 left-1/2 -translate-x-58/120 -translate-y-3/5"
                    >Hello!</p>


				</div>
		</div>
	);
}