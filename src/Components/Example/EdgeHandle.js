import { useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";
import { handleDescriptors } from "../../utils/calculateSubNodes";
import classes from "./EdgeHandle.module.css";

const CourseHandle = (props) => {

	return (
		<div className={classes.customNode}>
			Courses
			<>{handleDescriptors.CoursesGeneratedHandles}</>
			<Handle
				type="source"
				position={Position.Bottom}
				style={{ background: "#1a192b" }}
				id="Courses-source"
				key="Courses-source"
			/>
		</div>
	);
};

const InternshipHandle = (props) => {
    return (
		<div className={classes.customNode}>
			<Handle
				type="target"
				position={Position.Top}
				style={{ background: "#1a192b" }}
				id="Internships-target"
				key="Internships-target"
			/>
			Internships
			<>{handleDescriptors.InternshipsGeneratedHandles}</>
			<Handle
				type="source"
				position={Position.Bottom}
				style={{ background: "#1a192b" }}
				id="Internships-source"
				key="Internships-source"
			/>
		</div>
	);
}

const JobsHandle = props => {
    return (
		<div className={classes.customNode}>
			Jobs
            <>{handleDescriptors.JobsGeneratedHandles}</>
			<Handle
				type="target"
				position={Position.Top}
				style={{ background: "#1a192b" }}
				id="Jobs-target"
				key="Jobs-target"
			/>
		</div>
	);
}

export { CourseHandle,InternshipHandle,JobsHandle };
