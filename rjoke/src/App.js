import React from 'react';
import './App.css';
import JokeList from './JokeList'
import { Header } from './Header';
import Footer from './Footer';

export class Joke {
    constructor(setup, punchline, lols, groans) {
        this.setup = setup;
        this.punchline = punchline;
        this.lols = lols;
        this.groans = groans;
    }
}

const jokes = [
    new Joke("Why did the Republican chicken cross the road?",
        "FAKE NEWS!", 0, 0),
    new Joke("Why did the Democrat chicken cross the road?",
        "IMPEACH IT!", 0, 0),
    new Joke("Why did the millennial chicken cross the road?",
        "OK boomer", 0, 0),
    new Joke("Why did Chuck Norris cross the road?",
        "He was hungry for chicken!", 0, 0),
    new Joke("Test joke?",
        null, 0, 0),
];

export default class App extends React.PureComponent {
     constructor(props){
         super(props)
         this.state = {
             jokes
         };

         this.addJoke = this.addJoke.bind(this)
     }

    addJoke(joke){
        this.setState({jokes: this.state.jokes.concat(joke)})
    }

     render() {
         return (
             <div className="App">
                 <Header/>

                 {/* <JokeDisplay joke={jokes[0]} /> */}
                 <JokeList jokes={this.state.jokes} addJoke={this.addJoke}/>

                 <Footer company="Neward &amp; Associates, LLC"/>
             </div>
         )
     };
}
