import { Paper,Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import classes from "./CustomPaper.module.css";

const homeUrl = "https://www.udemy.com";

const CustomPaper = (props) => {
	return (
		<Paper className={classes.custPaper} elevation={3}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={4}>
					<img className={classes.courseImg}
						src="https://s.udemycdn.com/premium-clp/567828/CourseImage-240x135.jpg"
						alt="course-img"
					/>
				</Grid>
				<Grid item xs={12} md={8}>
					<h3 className={classes.head3}>
						2022 Complete Python Bootcamp From Zero to Hero in
						Python
					</h3>
					<p>
						Learn Python like a Professional Start from the basics
						and go all the way to creating your own applications and
						games
					</p>
					<span>By: Jose portilla</span>
					<a
						href={`${homeUrl}/course/complete-python-bootcamp/`}
						className={classes.wrapperAnchor}
					>
						<ArrowForwardIcon></ArrowForwardIcon>
					</a>
				</Grid>
			</Grid>
		</Paper>
	);
};
export default CustomPaper;
