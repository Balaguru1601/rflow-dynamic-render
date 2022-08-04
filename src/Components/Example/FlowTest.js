import React, { useCallback } from "react";
import ReactFlow, {
    addEdge,
    Controls,
	Background,
	useNodesState,
    useEdgesState,
    Position,
    getRectOfNodes
} from "react-flow-renderer";

import {
	nodes as initialNodes,
	edges as initialEdges,
} from "./InitialElements";

const onInit = (reactFlowInstance) =>
    console.log("flow loaded:", reactFlowInstance);
    
console.log(Position);

const FlowTest = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const onConnect = useCallback(
        (params) => {
            console.log(params);
            return setEdges((eds) => {
                console.log(eds);
                return addEdge(params, eds);
            });
        },
		[]
	);

    const r = getRectOfNodes(nodes);
    console.log(r);

	return (
		<ReactFlow
			nodes={nodes}
			edges={edges}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
			onConnect={onConnect}
			onInit={onInit}
			fitView
			attributionPosition="top-right"
		>
			{/* <MiniMap
				nodeStrokeColor={(n) => {
					if (n.style?.background) return n.style.background;
					if (n.type === "input") return "#0041d0";
					if (n.type === "output") return "#ff0072";
					if (n.type === "default") return "#1a192b";

					return "#eee";
				}}
				nodeColor={(n) => {
					if (n.style?.background) return n.style.background;

					return "#fff";
				}}
				nodeBorderRadius={2}
			/> */}
			{/* <Controls /> */}
			<Background color="#aaa" gap={16} />
		</ReactFlow>
	);
};

export default FlowTest;
