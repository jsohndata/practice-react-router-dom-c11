import NavList from "../components/NavList";
import { useNavigate } from 'react-router-dom';


export default function Page1() {
  const naviagte = useNavigate();

  const gotoPage = () => {
    naviagte('/curious-kaleidoscope');
  }

  return (
    <>      
      <h2>System Overload Solution</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/1MjnSjAe0XU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <br />      
      <button onClick={gotoPage}>useNavigate: Curious Kaleidoscope</button>
      <NavList />
    </>
  )
}