import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
// mm
// Import all your section components
import NewsletterHeader from '../NewsletterHeader/NewsletterHeader';
import SustainableFashion from '../SustainableFashion/SustainableFashion';
import LuxuryFashion from '../LuxuryFashion/LuxuryFashion';
import FastFashion from '../FastFashion/FastFashion';
import FashionSection from '../FashionSection/FashionSection'; // Import the special Fashion section
import SneakersWorld from '../SneakersWorld/SneakersWorld';
import ArticleSimpleHeader from '../ArticlePage/ArticleSimpleHeader/ArticleSimpleHeader';
import Card from "../../components/shared/Card/Card";
import Footer from "../../components/Footer/Footer";

const NewsletterPage = () => {
  const { flipping, handleFlip, handleFlipReset, showBack } = useOutletContext();
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('');
  const [pendingFilter, setPendingFilter] = useState(null);

  const onFilterChange = (newFilter) => {
    // First update the back content by setting pendingFilter
   requestAnimationFrame(() => {
    setPendingFilter(newFilter);
    handleFlip();
  });
    
    // After animation completes, make it permanent
    setTimeout(() => {
      setActiveFilter(newFilter);
      setPendingFilter(null);
      handleFlipReset();
    }, 700);
  };
  
  useEffect(() => {
    const fetchArticles = async () => {
      setError(null);
      setLoading(true);
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/684ffbd48960c979a5aac082', {
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': '$2a$10$yPrdfnGK9qK.GcWAGAq92uuTOQWOXjtCtDznwdBWRRuxNjSgc9wqm'
          }
        });
        if (!response.ok) {
          throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setAllArticles(data.record || []);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticles();
  }, []);

  if (loading) {
    return <h2 style={{ color: 'white', textAlign: 'center', marginTop: '150px' }}>Loading...</h2>;
  }
  if (error) {
    return <h2 style={{ color: 'red', textAlign: 'center', marginTop: '150px' }}>Error: {error}</h2>;
  }

  // Use the correct filter for rendering
  // const filterToUse = pendingFilter !== null ? activeFilter : activeFilter;
  const filterToUse = showBack ? pendingFilter : activeFilter;
  const filteredArticles = filterToUse === 'domestic'
    ? allArticles.filter(a => a.location && a.location.toLowerCase() === 'domestic')
    : filterToUse === 'international'
      ? allArticles.filter(a => a.location && a.location.toLowerCase() === 'international')
      : allArticles;

  const sections = [
    {
      id: 'sustainable',
      Component: SustainableFashion,
      posts: filteredArticles.filter(p => p.category === 'SustainableFashion')
    },
    {
      id: 'luxury',
      Component: LuxuryFashion,
      posts: filteredArticles.filter(p => p.category === 'LuxuryFashion')
    },
    {
      id: 'fashion-feature', // The single hero "Fashion" section
      Component: FashionSection,
      post: filteredArticles.find(p => p.category === 'FashionFeature') 
    },
    {
      id: 'fast',
      Component: FastFashion,
      posts: filteredArticles.filter(p => p.category === 'FastFashion')
    },
    {
      id: 'sneakers',
      Component: SneakersWorld,
      posts: filteredArticles.filter(p => p.category === 'SneakersWorld')
    }
  ];

  return (
    <>
      {/* <ArticleSimpleHeader /> */}
      <NewsletterHeader 
        activeFilter={activeFilter}
        onFilterChange={onFilterChange}
      />
      <div className="page-container">
        {/* Map over the sections array to render each one */}
        {sections.map(section => {
          // Special case for the single-post FashionSection
          if (section.id === 'fashion-feature') {
            return section.post ? <section.Component key={section.id} post={section.post} /> : null;
          }
          // Logic for all other sections that have multiple posts
          if (!section.posts || section.posts.length === 0) {
            return null;
          }
          return (
            <section.Component 
              key={section.id} 
              posts={section.posts} 
            />
          );
        })}
      </div>
    </>
  );
};

export default NewsletterPage;