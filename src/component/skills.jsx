import React from "react";
import PropTypes from "prop-types";
import Skill from "./skill.jsx";

export default class Skills extends React.Component {
	constructor(props)
    {
        super(props);
        this.state={
            'frontEndSkills':['HTML','CSS','Javascript','ReactJS'],
			'backEndSkills':['NodeJS', 'PostgreSQL'],
			'others':['Git','Typescript','ServiceNow']
        };
    }

	render() {
		return (
			<div
				id="skills-container"
				className="content-containers container text-center mt-5">

				<h1 id="skills" className={this.props.bounceLeft}>
					Skills
				</h1>
				
				<div className="row" style={{ marginTop: 5 + "rem" }}>
					<div className="col-12 col-sm-12 col-md-4">
						<h3>Front End Skills</h3>
					{this.state.frontEndSkills.map((value)=>{
                            return <Skill value={value}/>
                        })}
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-4 " 
						}>
						<h3>Back End Skills</h3>
					{this.state.backEndSkills.map((value)=>{
                            return <Skill value={value}/>
                        })}
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-4 " 
						}>
						<h3>Other Skills</h3>
					{this.state.others.map((value)=>{
                            return <Skill value={value}/>
                        })}
					</div>
				</div>
				
				

				
			</div>

		);
	}
}

Skills.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
