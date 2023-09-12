// import Profile from "./profile";
import { Link } from "react-router-dom";
import SameElementAllAcross from "./same";
const App = () => {
    return (
      <div>
        < SameElementAllAcross/>
        <h1>Hello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
        <nav>
            <ul>
                <li>
                    <Link to="/about">About page</Link>
                </li>
                <li>
                    <Link to="/profile">Profile page</Link>    
                </li>
                <li>
                    <Link to="/profile/child1">child element 1</Link>
                </li>
                <li>
                    <Link to="/profile/child2">child element 2</Link>    
                </li>
            </ul>
        </nav>
      </div>
    );
  };
  
  export default App;
