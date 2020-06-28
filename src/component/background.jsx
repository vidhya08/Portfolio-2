import React from "react";
import PropTypes from "prop-types";
import myImage from "../img/photo.jpg";
import git from "../img/git.png";
import linkedin from "../img/linkedin.png";
import gmail from "../img/gmail.png"
import WOW from "wowjs";

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background">
				<div className="top-container flex">
					<div className="row" style={{ marginTop: 3 + "rem" }}>
					<div className="col-12 col-lg-6 ">
						<img
							className={"img-fluid " + this.props.fadeIn}
							src={myImage}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>
						<p className={"mytext"}>
							I love to transform ideas into reality using code. I
							keep exploring new technologies and passionate about using 
							them to create awesome end-products.
						</p>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 "
						}>
							<h1 style={
								{borderBottom:"5px solid #008080"}
							}>Vidhya Chaudhary</h1>
							<h2>Full Stack Developer</h2>
					<div className="container">
								<div className="row">
									<div className="col-12 col-sm-12 col-md-8 mx-auto">
										<a
											className="px-3"
											href="https://github.com/vidhya08"
											target="_blank"
											rel="noopener noreferrer">
											<img src={git} alt=""/>
										</a>
										<a
											href="https://www.linkedin.com/in/vidhya-chaudhary"
											target="_blank"
											rel="noopener noreferrer">
											<img src={linkedin} alt=""/>
										</a>
										<a
											className="px-3"
											href="mailto:vidhyachaudhary08@gmail.com"
											target="_blank"
											rel="noopener noreferrer">
											<img src={gmail} alt=""/>
										</a>
									</div>
								</div>
							</div>
							<button
							className={"work-button " + this.props.bounceIn}
							data-wow-offset="0"
							onClick={() => {
								let node = document.getElementById(
									this.props.experienceRef.current.props.id
								);
								window.scrollTo({
									top: node.offsetTop,
									behavior: "smooth"
								});
							}}>
							View More
							</button>
						<a href="https://docs.google.com/document/d/1phmI_N0EArTXJM6p4X0oYVD-IgDGgJoIeZaAKuARYU8/edit?usp=sharing" target="_blank">
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						>
						View Resume
					</button>
					</a>
					</div>
					</div>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	experienceRef: PropTypes.object,
	bounceIn: PropTypes.string
};
