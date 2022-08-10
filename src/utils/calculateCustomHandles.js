import { Handle } from "react-flow-renderer";

const parentHeight = 32;

const calculateHandles = (data) => {
	let handleStyle = {
		width: 3,
		height: 3,
		top: 0,
		border: 0,
		background: "#1a192b",
	};
	const children = [];
	const upperChild = [];
	const lowerChild = [];
	if (data.noOfChildren%2 === 0) {
		for (let i = 0; i < data.noOfChildren; i++)
			i % 2 === 0
				? upperChild.push(data.child[i])
				: lowerChild.push(data.child[i]);
	} else {
        for (let i = 0; i < data.noOfChildren; i++) 
            i % 2 === 1
				? upperChild.push(data.child[i])
				: lowerChild.push(data.child[i]);
    }

	let generatedHandles = [];
    if (data.side === "left") handleStyle.left = -1;
    else handleStyle.right = -1;
    const step = data.noOfChildren % 2 === 1 ? parentHeight / (data.noOfChildren + 1) : (parentHeight)/(data.noOfChildren*2); 
    const multiplier = data.noOfChildren % 2 === 1 ? 1 : 2; 
	for (let i = 0; i < data.noOfChildren; i++) {
        handleStyle.top = step * (i + 1) * multiplier;
		const builtHandle = (
			<Handle
				type="source"
				position={data.side}
				id={`${data.parent}-${children[i]}`}
				key={`2-${children[i]}`}
				style={{ ...handleStyle }}
			/>
		);
		generatedHandles.push(builtHandle);
    };
	return generatedHandles;
};

export default calculateHandles;
