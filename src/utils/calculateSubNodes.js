import { cooridinates, nodes, edges } from "../Components/Example/InitialElements";

const childPadding = 5;

const positionMapper = (nodes = [], descriptors = { side: "", parent: "" }) => {
    const parentNode = nodes.find(node => node.id === descriptors.parent);
    const parentElement = document.querySelector(`[data-id=${parentNode.id}]`);
    const parentCoordinates = parentNode.position;
    const childHeight = parentElement.offsetHeight - 2 * childPadding;
    const sourcePosition = descriptors.side === "left" ? "right" : "left";
    const startingYCoordinate = nodes.length % 2 === 0 ? 0 : childHeight / 2;
    const resultNodes = [];
    const count = 0;
    for (let i = 0; i < nodes.length;i++) {
        const result = {};
        result.id = nodes[i];
        const posY = (childHeight*i)
        result.position = {x: -cooridinates.horizontalGap, y: 5}

    }


}

const calculator = (data = ["web dev", "UI/UX", "AWS", "Java", "Python"]) => {
    const limiter = data.length / 2;
    const leftNodes = data.slice(0, limiter);
    const rightNodes = data.slice(limiter);
}

export { calculator }