import Image from "next/image";
import Link from 'next/link';
import "../styles/home.css";

export const metadata = {
  title: "HOME",
};

const Home = () => {
  return (
    <div className="home-cards">
      <Link className="home-card" href="clock/">Clock</Link>
      <Link className="home-card" href="cuereceiver/">CueReceiver</Link>
      <Link className="home-card" href="cuesender/">CueSender</Link>
    </div>
  )
}

export default Home;
