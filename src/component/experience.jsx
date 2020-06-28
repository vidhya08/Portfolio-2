import React from "react";
import webdevelopment from "../img/webdevelopment.png";
import dsa from "../img/dsa.png";
import pen from "../img/pen.png";
import myImage from "../img/photo.jpg";
import PropTypes from "prop-types";

export default class Experience extends React.Component {
	render() {
		return (
			<div
				id="experience-container"
				className="content-containers container text-center mt-5">
				<h1 id="experience" className={this.props.bounceLeft}>
					Experience
				</h1>
				<div className="row mt-5">
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
						<img src={webdevelopment} style={{backgroundColor:"white"}} alt=""/>
						<h4>Web Development</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
						<img src={pen} alt=""/>
						<h4>Design</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={dsa} alt=""/>
						<h4>Data Structures & Algorithms</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={webdevelopment} alt=""/>
						<h4>Code</h4>
					</div>
				</div>

			</div>
		);
	}
}

Experience.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
