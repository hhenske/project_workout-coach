import React from 'react';
// import Table from 'react-bootstrap/Table';



const Log = (props) => {
    

    return (
        <React.Fragment>
            {/* <ReactBootStrap.Table striped bordered hover> */}
                <thead>
                    <th>Date</th>
                    <th>Workout</th>
                    <th>Time</th>
                </thead>  
                
                    <tr>
                        <td>{props.date.toISOString()}</td>
                        <td>{props.activity}</td>
                        <td>{props.time}</td>
                    </tr>
               
            {/* </ReactBootStrap.Table> */}
        </React.Fragment>
    )};




export default Log;