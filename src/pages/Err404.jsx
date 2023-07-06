import NavList from "../components/NavList";
import { useNavigate } from "react-router-dom";

export default function Err404() {
  const navigate = useNavigate();

  const gotoPage = () => {
    navigate("/");
  }

  return (
    <>
      <NavList />
      <h2>Err 404</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/yduFuBC4whg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <br />

      <button onClick={gotoPage}>useNavigate: Home</button>
      
    </>
  );
};