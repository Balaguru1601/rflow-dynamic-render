import React, { useCallback, useMemo } from "react";
import ReactFlow, {
    addEdge,
	Background,
	useNodesState,
    useEdgesState,
} from "react-flow-renderer";
import createEdges from "../../utils/calculateCustomEdges";
import { calculator } from "../../utils/calculateSubNodes";
import { CourseHandle, InternshipHandle, JobsHandle } from "./EdgeHandle";

import {
	nodes as initialNodes,
	edges as initialEdges,
} from "./InitialElements";
    
const nodeTypes = { Course: CourseHandle,Internship: InternshipHandle,Job: JobsHandle };
const arr = ["hsdkh", "jkdkj", "jdsk", "jhacs", "jshd","lkvlk","nmcxkn"];
const arr2 = ["web dev", "UI/UX", "AWS", "Java", "web de", "UI/U", "jhbhj"];

const FlowTest = () => {
    const subs2 = useMemo(() => calculator(arr2,"Courses"),[]);
    const subs = useMemo(
		() =>
			calculator(
				arr,
				"Internships"
			),
		[]
    );
    
    const customInternshipEdges = createEdges({ children: arr, parent: "Internships", noOfChildren: arr.length });
    const customCourseEdges = createEdges({
		children: arr2,
		parent: "Courses",
		noOfChildren: arr2.length,
	});

	const [nodes, setNodes, onNodesChange] = useNodesState([...initialNodes,...subs,...subs2]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([
		...initialEdges,
        ...customInternshipEdges,
        ...customCourseEdges,
	]);
	const onConnect = useCallback(
        (params) => {
            console.log(params);
            return setEdges((eds) => {
                console.log(eds);
                return addEdge(params, eds);
            });
        },
		[setEdges]
	);
	return (
		<ReactFlow
			nodes={nodes}
			edges={edges}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
			fitView
			attributionPosition="top-right"
		>
			<Background color="#aaa" gap={16} />
		</ReactFlow>
	);
};

export default FlowTest;
