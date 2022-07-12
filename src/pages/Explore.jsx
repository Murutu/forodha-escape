import { Link } from "react-router-dom";
import pexels from "../assets/jpg/pexels.jpg";
import jess from "../assets/jpg/jess.jpg";

function Explore() {
  return (
    <div className="explore">
      <header>
        <div className="pageHeader">Explore</div>
      </header>

      <main>
        <p className="exploreCategoryHeader">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img src={pexels} alt="rent" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img src={jess} alt="sell" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
export default Explore;
