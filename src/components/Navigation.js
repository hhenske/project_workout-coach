import { NavLink } from 'react-router-dom';
import run from '../images/run.png';
import swim from '../images/swim.png';
import bike from '../images/bike.png';
import hike from '../images/hike.png';
import walk from '../images/walk.png';
import lift from '../images/lift.png';
import squat from '../images/squat.png';
import yoga from '../images/yoga.png';
import yoga2 from '../images/yoga2.png';

const Navigation = () => {

    return(       
        <div>
            <br />
            {/* if page is already on Form. we want a refresh or reset*/}
            <div><NavLink to ="/Form" type="button" className="btn btn-secondary btn-lg btn-block active" role="button" aria-pressed="true">
            Home</NavLink>
            </div>
            <br /><br />
            <div><NavLink to="/Log" type="button" className="btn btn-secondary brn-lg btn-block active" role="button" aria-pressed="true">
            Workout Log</NavLink>
            </div>
            <br /><br />
            <div><NavLink to="/Timer" type="button" className="btn btn-secondary brn-lg btn-block active" role="button" aria-pressed="true">
            Timer</NavLink>
            <br /><br />
            </div>
            <br /><br />
            <div className="text-center">
            <table className = "border border-dark text-center justify-content-center">
                <tbody>
                <tr>
                    <td><img src = {run} alt="" width="95" height="95" /></td>
                    <td><img src = {bike} alt="" width="95" height="95" /></td>
                    <td><img src = {yoga2} alt="" width="95" height="95" /></td>
                </tr>
               
                <tr>
                    <td><img src = {lift} alt="" width="95" height="95" /></td>
                    <td><img src = {walk} alt="" width="95" height="95" /></td>
                    <td><img src = {swim} alt="" width="95" height="95" /></td>
                </tr>
                
                <tr>
                    
                    <td><img src = {squat} alt="" width="95" height="95" /></td>
                    <td><img src = {hike} alt="" width="95" height="95" /></td>
                    <td><img src = {yoga} alt="" width="95" height="95" /></td>

                </tr>
                </tbody>
            </table>
            </div>
        </div>
    )};


export default Navigation;