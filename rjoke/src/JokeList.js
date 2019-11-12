import React from 'react';
import { JokeDisplay } from './JokeDisplay'

const JokeList = (props) => {
    return <ul>
        {
            props.jokes.map((joke) =>
                <li key={joke.punchline}>
                    <JokeDisplay joke={joke} addJoke={props.addJoke} />
                </li> )
        }
    </ul>;
};

export default JokeList;