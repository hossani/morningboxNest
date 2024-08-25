import '../../css/bootstrap.css'
import '../../css/responsive.css'
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';import ComponentCard from './componentCard';

const Menu =  () => {

  return (
<section className="food_section layout_padding">
  <div className="container">
    <div className="heading_container heading_center">
      <h2>Our Menu</h2>
    </div>
    <div className="filters-content">

      <ComponentCard/>

  
    </div>

    <div className="btn-box">
      <a href="" className='text-black font-medium'>View More</a>
    </div>
  </div>
</section>
  )
}

export default Menu;