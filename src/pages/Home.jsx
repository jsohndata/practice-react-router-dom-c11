import NavList from "../components/NavList";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const gotoPage = () => {
    navigate('/asdf');
  }

  return (
    <>
    <h2>Magic Color XXL</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/fIWf74r5cnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <br />
    <button onClick={gotoPage}>useNavigate: 404</button>
    <NavList />    
    </>
  );
};