
import React, { useState } from 'react';
import Stopwatch from './Stopwatch';





const Log = (props) => {

    // const [time, setTime] = useState()
    console.log(props.time) 
    // currently undefined
    
    return (
        <React.Fragment>
                
                <div>
                <h2>Workout Log</h2>
                </div>
           
            
                <div className="col">
                    <table className="table table-striped table-bordered table-hover text-center justify-content-center ">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope ="col">Activity</th>
                                <th scope="col">Time (minutes)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>October 1, 2021</td>
                                <td>Swim</td>
                                <td>62</td>
                            </tr>
                            <tr>
                                <td>October 2, 2021</td>
                                <td>hike</td>
                                <td>78</td>
                            </tr>
                            <tr>
                                <td>October 4, 2021</td>
                                <td>run</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            
                        </tbody>
                    </table>
                 </div>
                 
            
        </React.Fragment>
    )};




export default Log;