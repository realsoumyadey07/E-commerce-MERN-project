import { Link } from "react-router-dom"
import Productcard from "../components/Productcard"

const Home = () => {
  const addCartHandler =()=>{

  }
  return (
    <div className="home">
      <section>
        
      </section>
      <h1>
        Latest Products
        <Link className="findmore" to={'/search'}>More</Link>
      </h1>
      <main>
        <Productcard
        productId="adsjbh"
        photo="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg"
        name="macbook"
        price={110000}
        stock={19}
        handler={addCartHandler}
        />
      </main>
      
    </div>
  )
}

export default Home
