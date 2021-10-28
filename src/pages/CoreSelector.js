import { Fragment } from 'react';


const CoreSelector = (props) => {
    // name:
    // target:
    // gifUrl:
// console.log("Hello")


    return (
        <Fragment>
            <table className="table border border-dark table-hover justify-content-center ">
                <tr>
                    <th className="font-weight-bold">{props.name}</th>
                </tr>
               
                    <tr>{props.target}</tr>
                    <tr><img src={props.gifUrl} /></tr>
                
            </table>
        </Fragment>
    )
}

export default CoreSelector;