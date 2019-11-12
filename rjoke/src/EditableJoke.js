import React from 'react';
import {Joke} from "./App";

export class EditableJoke extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activeSetup: '',
            activePunchline: ''
        };
        this.handleSetupChange = this.handleSetupChange.bind(this);
        this.handlePunchlineChange = this.handlePunchlineChange.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this)
    }

    handleSetupChange(event){
        event.preventDefault();
        this.setState({activeSetup: event.target.value})
    }

    handlePunchlineChange(event){
        event.preventDefault();
        this.setState({activePunchline: event.target.value})
    }

    onEditSubmit(event){
        event.preventDefault();
        this.props.onEditSubmit(new Joke(this.state.activeSetup, this.state.activePunchline, 0, 0));
    }

    render() {
        return <form onSubmit={this.props.handleSubmit}>
            <label>
                Setup:
                <textarea type="text" value={this.state.activeSetup} onChange={this.handleSetupChange}/>
            </label>
            <label>
                Punchline:
                <textarea type="text" value={this.state.activePunchline} onChange={this.handlePunchlineChange}/>
            </label>
            <input type="submit" value="Finish" onSubmit={this.onEditSubmit}/>
        </form>
    }
}