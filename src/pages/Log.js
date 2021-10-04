import React, { useState } from 'react';





const Log = () => {

    

   const activities = [
        { 
          activity: 'cardio',
          time: '80',
          date: new Date(2021, 2, 28)
        },
        {
          activity: 'core',
          time: '40',
          date: new Date(2021, 2, 29)
        },
        {
          activity: 'yoga',
          time: '62',
          date: new Date(2021, 3, 1)
        },
        {
          activity: 'cardio',
          time: '90',
          date: new Date(2021, 3, 2)
        }
      ];


      const [activity, setActivity] = useState();

    return (
        <React.Fragment>
            
                <h2>Workout Log</h2>
           
            
                <p className="col">
                    <table className="table table-striped table-bordered table-hover">
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
                 </p>
                 
            
        </React.Fragment>
    )};




export default Log;