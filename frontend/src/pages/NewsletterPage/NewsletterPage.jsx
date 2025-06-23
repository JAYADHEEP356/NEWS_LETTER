import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import './NewsletterPage.css';

// --- Import all necessary components and assets ---
// Note: Ensure your file paths are correct for your project structure.
import NewsletterHeader from '../NewsletterHeader/NewsletterHeader';
import Footer from '../../components/Footer/Footer';
import SustainableFashion from '../SustainableFashion/SustainableFashion';
import LuxuryFashion from '../LuxuryFashion/LuxuryFashion';
import FastFashion from '../FastFashion/FastFashion';
import FashionSection from '../FashionSection/FashionSection';
import SneakersWorld from '../SneakersWorld/SneakersWorld';

const NewsletterPage = () => {
  // --- Refs & State for Dynamic Height Calculation ---
  const frontContentRef = useRef(null);
  const backContentRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState('100vh'); // Default to full screen height

  // --- Core State for Data and Loading ---
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- State for Filters and Animation ---
  const [activeFilter, setActiveFilter] = useState('default'); // Start with the 'default' view
  const [showBack, setShowBack] = useState(false); // false = front face, true = back face
  const [isFlipping, setIsFlipping] = useState(false); // Lock to prevent spam-clicks

  // --- 1. Data Fetching ---
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
        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        const data = await response.json();
        setAllArticles(data.record || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  // --- 2. Dynamic Height Calculation ---
  useEffect(() => {
    const measureHeight = () => {
      requestAnimationFrame(() => {
        const activeRef = showBack ? backContentRef : frontContentRef;
        if (activeRef.current) {
          setContainerHeight(`${activeRef.current.offsetHeight}px`);
        }
      });
    };

    // Measure height after content loads, when filter changes, or when the card flips
    measureHeight();

    window.addEventListener('resize', measureHeight);
    return () => window.removeEventListener('resize', measureHeight);
  }, [loading, activeFilter, showBack]); // Reruns when content or visible face changes

  // --- 3. Filter and Animation Logic ---
  const handleFilterChange = useCallback((newFilter) => {
    if (isFlipping || newFilter === activeFilter) {
      return; // Exit if an animation is in progress or filter is already active
    }

    const isFlippingToBack = newFilter === 'domestic';
    const isFlippingToFront = activeFilter === 'domestic' && newFilter !== 'domestic';
    const needsPhysicalFlip = isFlippingToBack || isFlippingToFront;

    if (needsPhysicalFlip) {
      setIsFlipping(true);
      setShowBack(isFlippingToBack); // Set the target physical face
    }

    // Update the logical filter. Use a timeout to sync with animation end.
    setTimeout(() => {
      setActiveFilter(newFilter);
      setIsFlipping(false); // Unlock buttons after animation/swap
    }, needsPhysicalFlip ? 600 : 50); // 600ms for a full flip, 50ms for a quick content swap

  }, [activeFilter, isFlipping]);

  // --- 4. Memoized Content Filtering for Performance ---
  const domesticContent = useMemo(() => allArticles.filter(a => a.location?.toLowerCase() === 'domestic'), [allArticles]);
  const internationalContent = useMemo(() => allArticles.filter(a => a.location?.toLowerCase() === 'international'), [allArticles]);
  
  // The front face shows either ALL articles or INTERNATIONAL articles
  const articlesForFrontFace = useMemo(() => {
    return activeFilter === 'international' ? internationalContent : allArticles;
  }, [activeFilter, internationalContent, allArticles]);

  // --- 5. Helper Function to Render Content Sections ---
  const renderSections = (articles) => {
    if (loading || !articles) return null;
    
    const sections = [
      { id: 'sustainable', Component: SustainableFashion, posts: articles.filter(p => p.category === 'SustainableFashion')},
      { id: 'luxury', Component: LuxuryFashion, posts: articles.filter(p => p.category === 'LuxuryFashion')},
      { id: 'fashion-feature', Component: FashionSection, post: articles.find(p => p.category === 'FashionFeature')},
      { id: 'fast', Component: FastFashion, posts: articles.filter(p => p.category === 'FastFashion')},
      { id: 'sneakers', Component: SneakersWorld, posts: articles.filter(p => p.category === 'SneakersWorld')}
    ];

    return sections.map(section => {
      if (section.id === 'fashion-feature') {
        return section.post ? <section.Component key={section.id} post={section.post} /> : null;
      }
      if (!section.posts || section.posts.length === 0) return null;
      return <section.Component key={section.id} posts={section.posts} />;
    });
  };

  // --- Loading and Error States ---
  if (loading) return <h2 style={{ color: 'white', textAlign: 'center', marginTop: '150px' }}>Loading...</h2>;
  if (error) return <h2 style={{ color: 'red', textAlign: 'center', marginTop: '150px' }}>Error: {error}</h2>;

  // --- 6. Final Render ---
  return (
    <div className="page-flip-container" style={{ height: containerHeight }}>
      <div className={`flip-card-inner ${showBack ? 'is-flipped' : ''}`}>
        
        {/* === FRONT FACE (Handles 'Default' and 'International') === */}
        <div className="flip-card-face flip-card-front">
          <div ref={frontContentRef} className="content-wrapper">
            <NewsletterHeader
              activeFilter={showBack ? '' : activeFilter} // Only show active state when this face is visible
              onFilterChange={handleFilterChange}
              isFlipping={isFlipping}
            />
            <div className="page-container">
              {renderSections(articlesForFrontFace)}
            </div>
            <Footer />
          </div>
        </div>

        {/* === BACK FACE (Handles 'Domestic' only) === */}
        <div className="flip-card-face flip-card-back">
          <div ref={backContentRef} className="content-wrapper">
            <NewsletterHeader
              activeFilter={showBack ? 'domestic' : ''} // Only show active state when this face is visible
              onFilterChange={handleFilterChange}
              isFlipping={isFlipping}
            />
            <div className="page-container">
              {renderSections(domesticContent)}
            </div>
            <Footer />
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsletterPage;