import React from "react";
import myImage from "../img/photo.jpg";
import PropTypes from "prop-types";

export default class Skill extends React.Component {
	render() {
		return (
			<div
				id="skill-item"
				className="skill-item">
                    {this.props.value}
                </div>
		);
	}
}

Skill.propTypes = {
    value: PropTypes.string
};
