import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Trending from '../../components/trending/Trending';
import Offer from '../../components/offer/Offer';
import BestSeller from '../../components/best-seller/BestSeller';
import Blog from '../../components/blog/Blog';
import Subscribe from '../../components/subscribe/Subscribe';
import Banner from '../../components/banner/Banner';

function Home() {
  return (
    <div className="home">
      <main className="site-main">
        <Banner />
        <Carousel />
        <Trending />
        <Offer />
        <BestSeller />
        <Blog />
        <Subscribe />
      </main>
    </div>
  );
}

export default Home;
