import { useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";

const handleStyle = { height: "o.5px", width: "0.5px", left: 0, border: 0 };

function TextUpdaterNode({ data }) {

	return (
		<div className="text-updater-node">
			<Handle type="target" position={Position.Bottom} />
			<div>
				
			</div>
			<Handle
				type="source"
				position={Position.Left}
				id="a"
				style={handleStyle}
			/>
			<Handle type="source" position={Position.Bottom} id="b" />
		</div>
	);
}

export default TextUpdaterNode;
