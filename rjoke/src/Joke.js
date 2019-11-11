import React from 'react';

export class Joke {
  constructor(setup, punchline, lols, groans) {
    this.setup = setup;
    this.punchline = punchline;
    this.lols = lols;
    this.groans = groans;
  }
}

export class JokeUI extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.joke.punchline}</div>;
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
      <li key={joke}>
        <JokeUI joke={joke} />
      </li> 
    );
    return <div>
      <ul>{jokes}</ul>
    </div>;
  }
}