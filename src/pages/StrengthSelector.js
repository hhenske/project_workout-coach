import { Fragment } from 'react';


const StrengthSelector = (props) => {
    // name:
    // target:
    // gifUrl:
// console.log("Hello")


    return (
        <Fragment>
            <ul>
                <li>{props.name}</li> 
                <li>{props.target}</li>
                <li>{props.gifUrl}</li>
            </ul>
        </Fragment>
    )
}

export default StrengthSelector;