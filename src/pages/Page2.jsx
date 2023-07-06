import NavList from "../components/NavList";
import { useNavigate } from 'react-router-dom';

export default function Page2() {
  const navigate = useNavigate();

  const gotoPage = () => {
    navigate('/system-overload-solution');
  }

  return (
    <>
      <NavList />
      <h2>Curious Kaleidoscope</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gyRnnNn2q20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <br />
      <button onClick={gotoPage}>useNavigate: System Overload Solution</button>
    </>
  );
};