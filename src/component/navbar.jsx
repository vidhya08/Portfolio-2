import React from "react";
import Background from "./background.jsx";
import Experience from "./experience.jsx";
import Projects from "./projects.jsx";
import Skills from "./skills.jsx";

import WOW from "wowjs";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.experience = React.createRef();
		this.projects = React.createRef();
		this.skills = React.createRef();
		this.contact = React.createRef();

		this.scrolling = this.scrolling.bind(this);
	}

	componentDidMount() {
		new WOW.WOW().init();
	}

	navEffect() {
		window.addEventListener("scroll", () => {
			var navBar = document.getElementById("navbar");
			var domRect = navBar.getBoundingClientRect();
			var myBackground = document.getElementById("my-background");
			var domBGRect = myBackground.getBoundingClientRect();

			if (domRect.y <= -domRect.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (-domBGRect.height < domBGRect.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}

	scrolling(instance) {
		let node = document.getElementById(instance.current.props.id);
		window.scrollTo({
			top: node.offsetTop,
			behavior: "smooth"
		});
	}

	render() {
		return (
			<div>
				<Background
					ref={this.navEffect}
					id="my-background"
					experienceRef={this.experience}
					bounceIn={"wow bounceIn"}
				/>
				<nav
					id="navbar"
					className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container">
						<a
							className="home-style navbar-brand"
							onClick={() => {
								window.scrollTo({
									top: 0,
									behavior: "smooth"
								});
							}}>
							Me
						</a>
						
						<a
							className="home-style navbar-brand"
							onClick={() => {
								this.scrolling(this.experience);
							}}>
							Experience
						</a>
						<a
							className="home-style navbar-brand"
							onClick={() => {
								this.scrolling(this.skills);
							}}>
							Skills
						</a>
						<a
							className="home-style navbar-brand"
							onClick={() => {
								this.scrolling(this.projects);
							}}>
							Projects
						</a>
					</div>
				</nav>

				<Experience
					ref={this.experience}
					id="experience-container"
					bounceLeft={"wow bounceInLeft"}
					fadeInLeft={"wow fadeInLeft"}
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
					tada={"wow fadeIn"}
				/>
				<Skills
					ref={this.skills}
					id="skills-container"
					bounceLeft={"wow bounceInLeft"}
					fadeInLeft={"wow fadeInLeft"}
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
					tada={"wow fadeIn"}
				/>
				<Projects
					ref={this.projects}
					id="my-projects"
					fadeInRight={"wow fadeInRight"}
					fadeIn={"wow fadeIn"}
				/>
			</div>
		);
	}
}

export default Navbar;
