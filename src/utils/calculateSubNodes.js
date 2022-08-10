import { cooridinates, nodes } from "../Components/Example/InitialElements";
import calculateHandles from "./calculateCustomHandles";

const childPadding = 5;
let generatedHandles = [];
const handleDescriptors = {}

const positionMapper = (subNodes = [], descriptors = { side: "", parent: "" }) => {
    const parentNode = nodes.find(node => node.id === descriptors.parent);
    const parentElement = { offsetHeight: 54 };
    const noOfChilds = subNodes.length;
    const horizontalMultiplier = descriptors.side === "left" ? -1 : 1;
    const childHeight = parentElement.offsetHeight - 2 * childPadding;
    const targetPosition = descriptors.side === "left" ? "right" : "left";
    const startingYCoordinate = noOfChilds % 2 === 1 ? childHeight : childHeight / 2;
    const resultNodes = [];
    const posX = cooridinates.horizontalGap * horizontalMultiplier;
    let result = {};
    result.type = "output";
    result.targetPosition = targetPosition;
    result.style = { padding: childPadding };
    result.draggable = false;
    if (noOfChilds % 2) {
        result.id = subNodes[0];
        result.position = { x: posX, y: parentNode.position.y + childPadding};
        result.data = { label: subNodes[0] };
        resultNodes.push({ ...result });
        for (let i = 1; i < subNodes.length; i++) {
			result.id = subNodes[i];
            const posY =
				parentNode.position.y +
				(i % 2 === 1
					? -(startingYCoordinate + childHeight * (i-1)/2)
					: startingYCoordinate + childHeight * (i/2 -1) + 2*childPadding);
            result.position = { x: posX, y: posY };
            result.data = { label: subNodes[i] };
            resultNodes.push({ ...result });
		}
    }
    else {
        for (let i = 0; i < subNodes.length; i++) {
			result.id = subNodes[i];
            const posY =
				parentNode.position.y +
				(i % 2 === 0
					? -(startingYCoordinate + (childHeight * i)/2)
					: startingYCoordinate + ((i - 1) * childHeight)/2);
			result.position = { x: posX, y:  posY };
            result.data = { label: subNodes[i] };

            resultNodes.push({ ...result });
		}
    }
    return resultNodes;
}

const calculator = (
	data ,parent
) => {
    generatedHandles = [];
	const limiter = Math.round(data.length / 2);
	const leftNodes = data.slice(0, limiter);
	const rightNodes = data.slice(limiter);
	let endResult = [];
	endResult.push(
		...positionMapper(leftNodes, { side: "left", parent })
	);
    generatedHandles.push(...calculateHandles({ child: leftNodes, side: "left", parent, noOfChildren: leftNodes.length }));
    generatedHandles.push(...calculateHandles({ child: rightNodes, side: "right", parent, noOfChildren: rightNodes.length }));
	endResult.push(
		...positionMapper(rightNodes, { side: "right", parent })
    );
    handleDescriptors.parent = parent;
    handleDescriptors[`${parent}GeneratedHandles`] = generatedHandles;
	return endResult;
};

export { calculator, handleDescriptors };