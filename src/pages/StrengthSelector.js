import { Fragment } from 'react';


const StrengthSelector = (props) => {
    // name:
    // target:
    // gifUrl:
// console.log("Hello")


    return (
        <Fragment>
            <table className="table border border-dark table-hover justify-content-center ">
                <thead>
                    <tr> <td className="font-weight-bold">{props.name}</td> </tr>
                </thead> 
                <tbody>
                    <tr>{props.target}</tr>
                    <tr><img src={props.gifUrl} /></tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default StrengthSelector;