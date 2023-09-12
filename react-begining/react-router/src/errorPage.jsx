import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      {/* eslint-disable-next-line react/no-unescaped-entities*/}
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;