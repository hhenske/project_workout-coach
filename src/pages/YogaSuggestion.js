import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import yoga from '../images/yoga.png';
import yoga2 from '../images/yoga2.png';

const YogaSuggestion = (props) => {


    let workoutSuggestion='';


    const videos = [
       "https://www.youtube.com/watch?time_continue=1&v=oX6I6vs1EFs&feature=emb_logo",
       "https://www.youtube.com/watch?time_continue=2&v=FRAEaBtP2r4&feature=emb_logo",
       "https://www.youtube.com/watch?v=Ci3na6ThUJc",
       "https://www.youtube.com/watch?v=w0cLgFg4Zsw",
       "https://www.youtube.com/watch?v=7ciS93shMNQ",
       "https://www.youtube.com/watch?v=GGJzZx4H2K4",
       "https://www.youtube.com/watch?v=tvucPJUJJFk",
    ]

    const restaurative = [
        "https://www.youtube.com/watch?v=rrLkhg3fA0M",
        "https://www.youtube.com/watch?v=ifH3uFL3-YU",
        "https://www.youtube.com/watch?v=40bPxbFUCj4",
        "https://www.youtube.com/watch?v=c56tAJ9KjRg",
        "https://www.youtube.com/watch?v=BtVrPUylxp8",
        "https://www.youtube.com/watch?v=LI6RwT0ulDk",
        "https://www.youtube.com/watch?v=VfNY72G8Q0U"
    ]

    let randomIndex= Math.floor(Math.random() * 6);
        if (props.intensity > 2) {
            workoutSuggestion=restaurative[randomIndex]
        }

        if (props.intensity < 3) {
            workoutSuggestion=videos[randomIndex]
        }

    return (
        <Fragment>
            <h1>Yoga Suggestion</h1>
            <p>Grab a mat or towel, blocks and whatever you need and follow this link for today's yoga practice!</p>
            <table className="table table-sm border border-2 border-dark  text-center justify-content-center ">
                <thead>
                    <tr><td className="font-weight-bold"><Link to={workoutSuggestion} className="link-dark">{workoutSuggestion}</Link></td></tr>
                    <br />
                </thead> 
                
                <tbody>
                    <tr> <td className="justify-content-center"><img src = {yoga} /></td>
                        <td className="justify-content-center"><img src = {yoga2} /></td></tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default YogaSuggestion;