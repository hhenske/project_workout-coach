import React from 'react';





const Log = (props) => {
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    // const activities = [
    //     { 
    //       activity: 'cardio',
    //       time: '80',
    //       date: new Date(2021, 2, 28)
    //     },
    //     {
    //       activity: 'core',
    //       time: '40',
    //       date: new Date(2021, 2, 29)
    //     },
    //     {
    //       activity: 'yoga',
    //       time: '62',
    //       date: new Date(2021, 3, 1)
    //     },
    //     {
    //       activity: 'cardio',
    //       time: '90',
    //       date: new Date(2021, 3, 2)
    //     }
    //   ];

    return (
        <React.Fragment>
            {/* <ReactBootStrap.Table striped bordered hover> */}
            {/* <h1> Workout Log</h1>
      <table className="table table-striped table-bordered table-hover">
      <Log activity={activities[0].activity} time= {activities[0].time} date={activities[0].date} />
      <Log activity={activities[1].activity} time= {activities[1].time} date={activities[1].date} />
      <Log activity={activities[2].activity} time= {activities[2].time} date={activities[2].date} />
      <Log activity={activities[3].activity} time= {activities[3].time} date={activities[3].date} />
      </table> */}
                <thead>
                    <th>Date</th>
                    <th>Workout</th>
                    <th>Time</th>
                </thead>  
                
                    <tr>
                        {/* <td>{props.date.toLocaleString('en-US', DATE_OPTIONS)}</td> */}
                        <td>{props.activity}</td>
                        <td>{props.time}</td>
                    </tr>
                    
               
            {/* </ReactBootStrap.Table> */}
        </React.Fragment>
    )};




export default Log;