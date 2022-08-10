import { MarkerType } from "react-flow-renderer";

const createEdges = (data) => {
    const createdEdges = []
    const edgeProps = {
		animated: true,
		markerEnd: {
			type: MarkerType.Arrow,
			width: 30,
			height: 40,
		},
        source : data.parent
	};
    
    for (let i = 0; i < data.noOfChildren; i++){
        edgeProps.target = data.children[i];
        edgeProps.sourceHandle = `${data.parent}-${data.children[i]}`;
        edgeProps.key = `${data.parent}-${data.children[i]}`;
        createdEdges.push({ ...edgeProps });
    };

    return createdEdges;
}

export default createEdges;