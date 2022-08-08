import { Grid } from "@mui/material";
import background from "../assets/Inn.png";

function Image(props) {
	return (
		<Grid
			container
			width="100%"
			minHeight="100vh"
			direction="row"
			sx={{ backgroundColor: "#f9f7ee" }}
		>
			<Grid
				xs={12}
				lg={6}
				item
				container
				height={{ xs: "70vh", sm: "70vh", md: "70vh", lg: "100vh" }}
			>
				{props.children}
			</Grid>

			<Grid
				xs={12}
				lg={6}
				item
				container
				height={{ xs: "30vh", sm: "30vh", md: "30vh", lg: "100vh" }}
				sx={{
					backgroundImage: `url(${background})`,
					backgroundSize: "cover",
				}}
			></Grid>
		</Grid>
	);
}

export default Image;
