import React from "react";
import Banner from "../Banner/Banner";
import Work from "../Work/Work";
import Service from "../Service/Service";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";


const reviewsPromise = fetch('/public/reviews.json')
.then(res=>res.json())



const Home = () => {






  return (
    <div>
      {/* banner section */}
      <section>
        <Banner />
      </section>
      {/* how to work  */}
      <section>
        <Work />
      </section>

      {/* service section */}

      <section>
        <Service />
      </section>

      {/* brands section */}
      <section className="mb-9">
        <Brands />
      </section>

      {/* reviews section */}
      <Reviews reviewsPromise={reviewsPromise}/>
    </div>
  );
};

export default Home;
