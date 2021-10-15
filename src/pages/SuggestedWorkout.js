import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Form from './Form';

const SuggestedWorkout = (props) => {

    return (
        <Fragment>
            <h2>How about....</h2>
            <br />
            {/* This code will be dynamic...it'll be the randomly chosen workout from the category the user chose on the form */}
            <div>
                <p>{props.enteredCategory}</p>
                {/* How do I access form choices here? */}
            </div>
            <br /><br />
            <NavLink to="Timer" type="button" class="btn btn-info">Yes! Ready to work out!</NavLink>
                {/* this button will link to stopwatch page */}
                {' '}
                <NavLink to="Form" button type="button" class="btn btn-info">No, choose another workout
                </NavLink>

        </Fragment>

    );
};

export default SuggestedWorkout;