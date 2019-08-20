import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Title extends Component {  /*OR REACT.COMPONENT??*/
    static propTypes = {
        content: PropTypes.string.isRequired,
    }

    render(){
        return <h1>{this.props.content}</h1>
    }
}

Title.propTypes = {
    content: PropTypes.string
};