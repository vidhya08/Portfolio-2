import React from "react";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row">
							<div
								className={
									"project col-12 col-lg-6 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>React-Node-Postgres-Project</h2>
									</div>
									<div className="text-subTitle">
									<h6>E-commerce website built using React, NodeJs/Express, Axios, Sequelize(ORM), PostgreSQL</h6>
									</div>
									<div>
										<a href="https://github.com/vidhya08/React-Node-Postgres-Project" target="_blank">
										<button className="project-button"											>
											View More
										</button>
										</a>
									</div>
								</div>
							</div>
							<div
								className={
									"project col-12 col-lg-6 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Portfolio App</h2>
									</div>
									<div className="text-subTitle">
									<h6>Basic portfolio application using Flutter</h6>
									</div>
									<div>
										<a href="https://github.com/vidhya08/Portfolio-App" target="_blank">
										<button className="project-button"											>
											View More
										</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>				
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
