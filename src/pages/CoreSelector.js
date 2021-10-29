import { Fragment } from 'react';


const CoreSelector = (props) => {
    // name:
    // target:
    // gifUrl:
// console.log("Hello")


    return (
        <Fragment>
            <table className="table border border-dark table-hover justify-content-center ">
                <thead>
                <tr>
                    <th className="font-weight-bold">{props.name}</th>
                </tr>
               </thead>
               <tbody>
                    <tr><td>{props.target}</td></tr>
                    <tr><td><img src={props.gifUrl} alt="exercise animation" /></td></tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default CoreSelector;