import '../css/bootstrap.css'
import '../css/responsive.css'
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/accueil/hero";
import Famous from "./components/accueil/famous";

export default function Home() {
  return (
<>

<div className="hero_area">
  <div className="bg-box bg-home bg-black">
    <img src="images/food.png" alt="" />
  </div>
  {/* header section strats */}
  <header className="header_section">
    <div className="container">
    </div>
  </header>
  <Hero/>
</div>
<Famous/>
</>


  );
}
