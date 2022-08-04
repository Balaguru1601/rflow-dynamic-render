import { MarkerType } from "react-flow-renderer";

export const cooridinates = {
    verticalGap: 200,
    horizontalGap: 250,
}

export const nodes = [
	{
		id: "Courses",
		type: "input",
		data: {
			label: "Courses",
		},
		position: { x: 0, y: 0 },
		targetPosition: "bottom",
	},
	{
		id: "Internships",
		data: {
			label: "Internships",
		},
		position: { x: 0, y: 200 },
		targetPosition: "top",
		sourcePosition: "bottom",
	},
	{
		id: "Jobs",
		data: {
			label: "Jobs",
		},
		position: { x: 0, y: 400 },
		type: "output",
		sourcePosition: "top",
	},
	{
		id: "4",
		data: {
			label: "Jobs",
		},
		position: { x: -250, y: -27 },
		type: "output",
		sourcePosition: "top",
		style: {
			padding: 5,
		},
	},
	{
		id: "5",
		data: {
			label: "Jobs",
		},
		position: { x: -250, y: 32 },
		type: "output",
		sourcePosition: "top",
		style: {
			padding: 5,
		},
	},
];

export const edges = [
	{ id: "courses-internships", source: "1", target: "2",animated: true },
	{ id: "internships-jobs", source: "1", target: "3",animated:true },
	
];
