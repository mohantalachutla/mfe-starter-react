import { NavLink } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Oops! Page not found</p>
      <NavLink to="/">Go to Home</NavLink>
    </div>
  );
};

export default PageNotFound;
