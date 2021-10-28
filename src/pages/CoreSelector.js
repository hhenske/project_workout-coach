import { Fragment } from 'react';


const CoreSelector = (props) => {
    // name:
    // target:
    // gifUrl:
// console.log("Hello")


    return (
        <Fragment>
            <table className="table border border-dark table-hover text-center justify-content-center ">
                <thead>
                    <td className="font-weight-bold">{props.name}</td>
                </thead> 
                <tbody>
                    <tr>{props.target}</tr>
                    <tr><img src={props.gifUrl} /></tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default CoreSelector;