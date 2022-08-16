import { Button, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import { Fragment } from "react";
import classes from "./CustomDrawer.module.css";
import CustomPaper from "./CustomPaper";


const CustomDrawer = (props) => {
	return (
		<Fragment key={"right"}>
			<Drawer
				className={classes.custDrawer}
				anchor={"right"}
				open={props.isVisible}
				onClose={props.closeDrawer}
				transitionDuration={10}
			>
				<h1 className={classes.mainHeader}>
					{props.node.id}
					<Button
						onClick={props.closeDrawer}
						className={classes.closeBtn}
					>
						<CloseIcon></CloseIcon>
					</Button>
				</h1>
				<CustomPaper></CustomPaper>
			</Drawer>
		</Fragment>
	);
};

export default CustomDrawer;
