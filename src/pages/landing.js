import React from "react";
import Image from "../layouts/landing";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const titleVariants = {
	offscreen: {
		y: 300,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

const descVariants = {
	offscreen: {
		y: 200,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 1.2,
		},
	},
};

const buttonVariants = {
	offscreen: {
		y: 150,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 1.6,
		},
	},
};

function Landing() {
	return (
		<Image>
			<Box
				display="flex"
				alignItems="flex-end"
				justifyContent="flex-end"
				sx={{ width: "100%" }}
			>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent={{
						xs: "center",
						sm: "center",
						md: "flex-start",
						lg: "flex-start",
					}}
					alignItems="flex-start"
					sx={{
						width: { xs: "90%", sm: "90%", md: "90%", lg: "80%" },
						height: { xs: "95%", sm: "80%", md: "80%", lg: "50%" },
					}}
				>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
						variants={titleVariants}
					>
						<Box width="80%">
							<Typography
								variant="h2"
								fontSize={{
									xs: "45px",
									sm: "45px",
									md: "55px",
									lg: "55px",
								}}
								fontWeight="bold"
								color="black"
								sx={{
									mb: {
										xs: "5%",
										sm: "5%",
										md: "5%",
										lg: "3%",
									},
								}}
							>
								Cafe Randomizer
							</Typography>
						</Box>
					</motion.div>
					<Box
						sx={{
							width: {
								xs: "90%",
								sm: "70%",
								md: "70%",
								lg: "80%",
							},
						}}
					>
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.8 }}
							variants={descVariants}
						>
							<Typography
								variant="h5"
								fontSize={{
									xs: "20px",
									sm: "20px",
									md: "25px",
									lg: "25px",
								}}
								color="black"
								sx={{
									mb: {
										xs: "5%",
										sm: "5%",
										md: "5%",
										lg: "3%",
									},
								}}
							>
								This application helps you to pick what to eat
								by randomizing a list of cafes for you!
							</Typography>
						</motion.div>
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.8 }}
							variants={descVariants}
						>
							<Typography
								variant="h5"
								fontSize={{
									xs: "20px",
									sm: "20px",
									md: "25px",
									lg: "25px",
								}}
								color="black"
								sx={{
									mb: {
										xs: "10%",
										sm: "10%",
										md: "10%",
										lg: "5%",
									},
								}}
							>
								No more wasting time on deciding what to eat.
							</Typography>
						</motion.div>
					</Box>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
						variants={buttonVariants}
					>
						<Button
							component={Link}
							to="/home"
							variant="contained"
							size="large"
							sx={{
								borderRadius: "10px",
								backgroundColor: "#0091d1",
								"&:hover": {
									backgroundColor: "#0076d1",
								},
							}}
						>
							Get Started
						</Button>
					</motion.div>
				</Box>
			</Box>
		</Image>
	);
}

export default Landing;
