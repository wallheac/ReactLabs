import React from 'react';
import {UpvoteCounter} from "./UpvoteCounter";

const StaticJoke = (props) => {
    return <><br></br>
        <span>{ props.joke.setup }</span><br></br>
        {props.visible ?
            <>
                <span onClick={props.handlePunchLineClick}>{ props.joke.punchline }</span><br></br>
            </> :
            <>
                <button onClick={props.handlePunchLineClick}>CLICK TO REVEAL</button>
            </>
        }
        <br></br>
        <div>
            <span>LOLs: </span>
            <UpvoteCounter  voteCount={props && props.joke && props.joke.lols}/>
        </div>
        <div>
            <span>GROANs: </span>
            <UpvoteCounter  voteCount={props && props.joke && props.joke.groans}/>
        </div>
    </>;
}

export default StaticJoke;