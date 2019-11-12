import React from 'react';
import StaticJoke from './StaticJoke'
import { EditableJoke } from './EditableJoke'

export class JokeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false,
        editing: !props.joke.punchline || !props.joke.setup
    };
    this.handlePunchLineClick = this.handlePunchLineClick.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  handlePunchLineClick(){
      this.setState({visible: !this.state.visible})
    }

    onEditSubmit(joke){
        this.props.addJoke(joke);
        this.setState({editing: false, activeSetup: '', activePunchline: ''});
    }

  render() {
    return this.state.editing ?
        < EditableJoke
            joke={this.props.joke}
            onEditSubmit={this.onEditSubmit}
        /> :
        <StaticJoke
            joke={this.props.joke}
            visible={this.state.visible}
            handlePunchlineClick={this.handlePunchLineClick}
        />;
  }
}