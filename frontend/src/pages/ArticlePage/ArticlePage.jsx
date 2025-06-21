import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ArticlePage.css';

// Import all the components
import ArticleSimpleHeader from './ArticleSimpleHeader/ArticleSimpleHeader';
import ArticleHero from './ArticleHero/ArticleHero';
import ArticleBody from './ArticleBody/ArticleBody';
import ShareButtons from '../../components/ShareButtons/ShareButtons';
import RelatedArticles from './RelatedArticles/RelatedArticles';
import Footer from '../../components/Footer/Footer';

const ArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
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
 if (loading) return <h2 style={{/*..*/}}>Loading...</h2>;
  if (error) return <h2 style={{/*..*/}}>Error: {error}</h2>;
  if (!article) return <h2 style={{/*..*/}}>Article could not be loaded.</h2>;

  return (
    // This is now the single main container for the entire page
    <div className="article-page-wrapper">
      {/* <ArticleSimpleHeader /> */}
      
      <div className="article-content-main">
        <ArticleHero
          headline={article.title}
          description={article.description}
          imageUrl={article.imageUrl}
        />
        <ArticleBody content={article.bodyContent || `<p>No content available.</p>`} />
        <ShareButtons articleTitle={article.title} />
        <RelatedArticles articles={relatedArticles} />

      </div>
              <Footer />

    </div>
  );
};

export default ArticlePage;