import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SameElementAllAcross from "./same";
const Profile = () => {
    return (
      <div>
        < SameElementAllAcross/>
        <h1>Hello from profile page!</h1>
        <p>So, how are you?</p>
        <ul>
            <li>
                <Link to="/"> wanna go back?</Link>
            </li>
            <li>
                <Link to="/about">About page</Link>    
            </li>
        </ul>
        <hr />
        <h2>The profile visited is here:</h2>
        <Outlet />
      </div>
    );
  };
  
  export default Profile;