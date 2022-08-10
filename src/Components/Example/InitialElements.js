import { MarkerType } from "react-flow-renderer";

export const cooridinates = {
    verticalGap: 200,
    horizontalGap: 250,
}

export const nodes = [
	{
		id: "Courses",
		type: "Course",
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
        type: "Internship",
		targetPosition: "top",
        sourcePosition: "bottom",
	},
	{
		id: "Jobs",
		data: {
			label: "Jobs",
		},
		position: { x: 0, y: 400 },
		type: "Job",
		sourcePosition: "top",
	},
];

export const edges = [
	{
		id: "courses-internships",
		source: "Courses",
		target: "Internships",
		animated: true,
		markerEnd: {
			type: MarkerType.Arrow,
			width: 30,
			height: 40,
		},
        sourceHandle: "Courses-source",
        key: 3
	},
	{
		id: "internships-jobs",
		source: "Internships",
		target: "Jobs",
		animated: true,
		markerEnd: {
			type: MarkerType.Arrow,
			width: 30,
			height: 40,
        },
        sourceHandle: "Internships-source",
        key: 88
	},
];
