import { Link } from "react-router-dom";
import SameElementAllAcross from "./same";
// import Profile from "./profile";
export default function About() {
    return (
        <div>
            < SameElementAllAcross/>
            <h1>About section</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate consequatur a ipsa dolores eveniet officia harum. Exercitationem voluptatum incidunt, nemo, et perferendis pariatur rerum ratione, omnis esse laboriosam vitae ullam.</p>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile page</Link>    
                </li>
            </ul>
        </div>
    );
}