import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
  return (
    <>
      <h1>Home Page</h1>
      <button style={{backgroundColor:"light blue",width:'150px'}} onClick={()=>{
        navigate("/contact");
      }}>Go To Contact</button>
    </>
  );
};
export default Home;
