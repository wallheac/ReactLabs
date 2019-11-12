import React from "react";
import PropTypes from "prop-types";

export class UpvoteCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {voteCount: 0};
        this.handleUpvote = this.handleUpvote.bind(this)
    }

    handleUpvote(){
        const voteCount = this.state.voteCount + 1;
        this.setState({voteCount})
    }

    render() {
        return <span onClick={this.handleUpvote}>{`${this.state.voteCount} ^`}</span>
    }
}

UpvoteCounter.defaultProps = {
    voteCount: 0
};

UpvoteCounter.propTypes = {
    voteCount: PropTypes.number
};