import React from 'react';

import NewsletterHeader from '../NewsletterHeader/NewsletterHeader';
import SustainableFashion from '../SustainableFashion/SustainableFashion';
import FashionSection from '../FashionSection/FashionSection';
import LuxuryFashion from '../LuxuryFashion/LuxuryFashion';
import FastFashion from '../FastFashion/FastFashion'; // You would create and import these
import SneakersWorld from '../SneakersWorld/SneakersWorld'; // following the same pattern

const NewsletterPage = () => {
  return (
    <div className="page-container">
      <NewsletterHeader />
      <main>
        <SustainableFashion />
        <FashionSection />
        <LuxuryFashion />
        <FastFashion />
        <SneakersWorld />
      </main>
    </div>
  );
};

export default NewsletterPage;