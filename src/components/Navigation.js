import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return(       
        <div>
            <br />
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
            
            </div>
        </div>
    )};


export default Navigation;