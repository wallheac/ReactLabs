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
        visible: false
    };
    this.handlePunchLineClick = this.handlePunchLineClick.bind(this)
  }

  handlePunchLineClick(){
      this.setState({visible: !this.state.visible})
    };

  render() {
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
}
//PureComponent prevents unnecessary re-rendering. Basically, it handles what was the shouldComponentUpdate lifecycle method for you
// It does a shallow comparison on props and state to see if anything has changed. In many cases, it's more performant.
export class JokeList extends React.PureComponent {
  constructor(props) {
    super(props);
  }
// I prefer this to using the index as the key.
  render() {
    const jokes = this.props.jokes.map((joke) =>
      <li key={joke.punchline}>
        <JokeDisplay joke={joke} />
      </li> 
    );
    return <div>
      <ul>{jokes}</ul>
    </div>;
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