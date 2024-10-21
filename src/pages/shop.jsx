import React from 'react';
import Hero from '../components/Hero/hero';
import Popular from '../components/popular/popular';
import Offers from '../components/offers/offers';
import NewCollections from '../components/Newcollection/newcollection';
import NewsLetter from '../components/Newsletter/newsletter';

const Shop = () => {
 return(
 <div>
    <Hero/>

    <Popular/>
    
    <Offers/>

    <NewCollections/>
    <NewsLetter/>
  </div>
)
}

export default Shop;