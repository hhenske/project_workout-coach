import { Fragment } from 'react';


const StrengthSelector = (props) => {
    

    return (
        <Fragment>
            <table className="table border border-dark table-hover justify-content-center ">
                <tbody>
                    <tr><td className="font-weight-bold">{props.name}</td></tr>
                    <tr><td>{props.target}</td></tr>
                    <tr><td><img src={props.gifUrl} alt="exercise animation" /></td></tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default StrengthSelector;