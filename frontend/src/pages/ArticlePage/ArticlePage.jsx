import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ArticlePage.css';

// Import all the components for the page
import ArticleSimpleHeader from './ArticleSimpleHeader/ArticleSimpleHeader';
import ArticleHero from './ArticleHero/ArticleHero';
import ArticleBody from './ArticleBody/ArticleBody';
import ShareButtons from '../../components/ShareButtons/ShareButtons';
import RelatedArticles from './RelatedArticles/RelatedArticles';

const ArticlePage = () => {
  // Get the unique 'slug' from the URL, e.g., "sustainable-fabric-guide"
  const { slug } = useParams();

  // State to hold the specific article we find
  const [article, setArticle] = useState(null);
  // State for all other articles to show in the "Related" section
  const [relatedArticles, setRelatedArticles] = useState([]);
  // State for loading and error messages
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndFindArticle = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/684ffbd48960c979a5aac082', {
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': '$2a$10$yPrdfnGK9qK.GcWAGAq92uuTOQWOXjtCtDznwdBWRRuxNjSgc9wqm'
          }
        });
        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        
        const data = await response.json();
        const allArticles = data.record || [];

        // --- THIS IS THE KEY LOGIC ---
        // Find the one article where its slug matches the slug from the URL
        const currentArticle = allArticles.find(p => p.slug === slug);

        if (currentArticle) {
          setArticle(currentArticle);
          // Find 3 other articles for the "Related" section, excluding the current one
          const otherArticles = allArticles.filter(p => p.slug !== slug).slice(0, 3);
          setRelatedArticles(otherArticles);
        } else {
          // If no article with that slug is found, set an error
          throw new Error("Article not found.");
        }

      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAndFindArticle();
    // This effect should re-run if the URL slug changes
  }, [slug]);

  // --- Render loading or error states first ---
  if (loading) {
    return <h2 style={{ color: 'white', textAlign: 'center', marginTop: '150px' }}>Loading Article...</h2>;
  }
  if (error) {
    return <h2 style={{ color: 'red', textAlign: 'center', marginTop: '150px' }}>Error: {error}</h2>;
  }

  // If the article hasn't been found yet for any reason
  if (!article) {
    return <h2 style={{ color: 'white', textAlign: 'center', marginTop: '150px' }}>Article could not be loaded.</h2>;
  }

  // --- Render the dynamic article content ---
  return (
    <div className="article-page-container">
      <ArticleSimpleHeader />
      <ArticleHero
        headline={article.title} // Use the title from the fetched article
        description={article.description}
        imageUrl={article.imageUrl}
      />
      <ArticleBody content={article.bodyContent || `<p>This article has no content.</p>`} />
      <ShareButtons articleTitle={article.title} />
      <RelatedArticles articles={relatedArticles} />
    </div>
  );
};

export default ArticlePage;