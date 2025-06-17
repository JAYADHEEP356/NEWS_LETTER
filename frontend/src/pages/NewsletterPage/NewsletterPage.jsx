import React, { useState, useEffect } from 'react';

// Import all your section components
import NewsletterHeader from '../NewsletterHeader/NewsletterHeader';
import SustainableFashion from '../SustainableFashion/SustainableFashion';
import LuxuryFashion from '../LuxuryFashion/LuxuryFashion';
import FastFashion from '../FastFashion/FastFashion';
import FashionSection from '../FashionSection/FashionSection'; // Import the special Fashion section
import SneakersWorld from '../SneakersWorld/SneakersWorld';

const NewsletterPage = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // --- This is the clean, data-driven structure ---

  // Define all the sections and filter the data for each one
  const sections = [
    {
      id: 'sustainable',
      Component: SustainableFashion,
      posts: allArticles.filter(p => p.category === 'SustainableFashion')
    },
    {
      id: 'luxury',
      Component: LuxuryFashion,
      posts: allArticles.filter(p => p.category === 'LuxuryFashion')
    },
    {
      id: 'fashion-feature', // The single hero "Fashion" section
      Component: FashionSection,
      // Use .find() because we only expect one post for this section
      post: allArticles.find(p => p.category === 'FashionFeature') 
    },
    {
      id: 'fast',
      Component: FastFashion,
      posts: allArticles.filter(p => p.category === 'FastFashion')
    },
    {
      id: 'sneakers',
      Component: SneakersWorld,
      posts: allArticles.filter(p => p.category === 'SneakersWorld')
    }
  ];

  return (
    <div className="page-container">
      <NewsletterHeader />
      
      {/* Map over the sections array to render each one */}
      {sections.map(section => {
        // Special case for the single-post FashionSection
        if (section.id === 'fashion-feature') {
          return section.post ? <section.Component key={section.id} post={section.post} /> : null;
        }
        
        // Logic for all other sections that have multiple posts
        return section.posts && section.posts.length > 0 ? (
          <section.Component 
            key={section.id} 
            posts={section.posts} 
          />
        ) : null;
      })}
    </div>
  );
};

export default NewsletterPage;