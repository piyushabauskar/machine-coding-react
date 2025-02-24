import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <nav>
        <ul>
            <li><Link to="team">Team</Link></li>
            <li><Link to="company">Company</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default About;
