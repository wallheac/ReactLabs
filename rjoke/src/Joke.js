import React from 'react';
import PropTypes from 'prop-types'

export class Joke {
  constructor(setup, punchline, lols, groans) {
    this.setup = setup;
    this.punchline = punchline;
    this.lols = lols;
    this.groans = groans;
  }
}

//changed this to a name I can stand. JokeUI suggests the first level container, like App.js
export class JokeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false,
        editing: !props.joke.punchline || !props.joke.setup,
        activeSetup: '',
        activePunchline: ''
    };
    this.handlePunchLineClick = this.handlePunchLineClick.bind(this);
      this.handleSetupChange = this.handleSetupChange.bind(this);
      this.handlePunchlineChange = this.handlePunchlineChange.bind(this);
      this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  handlePunchLineClick(){
      this.setState({visible: !this.state.visible})
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
      this.setState({editing: false})
    }

  renderDisplay(){
      return <><br></br>
          <span>{ this.props.joke.setup }</span><br></br>
          {this.state.visible ?
              <>
                  <span onClick={this.handlePunchLineClick}>{ this.props.joke.punchline }</span><br></br>
              </> :
              <>
                  <button onClick={this.handlePunchLineClick}>CLICK TO REVEAL</button>
              </>
          }
          <br></br>
          <div>
              <span>LOLs: </span>
              <UpvoteCounter  voteCount={this.props && this.props.jokes && this.props.jokes.lols}/>
          </div>
          <div>
              <span>GROANs: </span>
              <UpvoteCounter  voteCount={this.props && this.props.jokes && this.props.jokes.lols}/>
          </div>
      </>;
  }

  renderEdit(){
        return <form onSubmit={this.handleSubmit}>
            <label>
                Setup:
                <textarea type="text" value={this.state.activeSetup} onChange={this.handleSetupChange} />
            </label>
            <label>
                Punchline:
                <textarea type="text" value={this.state.activePunchline} onChange={this.handlePunchlineChange} />
            </label>
            <input type="submit" value="Finish" onSubmit={this.onEditSubmit}/>
        </form>
  }

  render() {
    return this.state.editing ? this.renderEdit() : this.renderDisplay();
  }
}
//PureComponent prevents unnecessary re-rendering. Basically, it handles what was the shouldComponentUpdate lifecycle method for you
// It does a shallow comparison on props and state to see if anything has changed. In many cases, it's more performant.
export class JokeList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        jokes: []
    }
  }
// I prefer this to using the index as the key.
    //also refactored to just have the map in render
  render() {
    return <ul>
          {
              this.props.jokes.map(joke =>
              <li key={joke.punchline}>
                <JokeDisplay joke={joke} />
              </li> )
          }
      </ul>;
  }
}

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