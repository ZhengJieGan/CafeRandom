import React from "react";
import { Grid } from "@mui/material";

function Base(props) {
	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100vh"
			sx={{ backgroundColor: "#f9f7ee" }}
		>
			{props.children}
		</Grid>
	);
}

export default Base;
