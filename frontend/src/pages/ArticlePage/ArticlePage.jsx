
// --- IMAGE IMPORT ADDED ---
import React from 'react';
import { useParams } from 'react-router-dom';
import './ArticlePage.css';

// Import all the components
import ArticleSimpleHeader from './ArticleSimpleHeader/ArticleSimpleHeader';
import ArticleHero from './ArticleHero/ArticleHero';
import ArticleBody from './ArticleBody/ArticleBody';
import ShareButtons from '../../components/ShareButtons/ShareButtons';
import RelatedArticles from './RelatedArticles/RelatedArticles';
// import heroArticleImage from '../../assets/sneaker1.jpg';
import heroArticleImage from '../../assets/red.png';

// --- Static Content ---
// In a real app, this would be fetched based on the URL slug
const articleData = {
  brandName: 'Luxury In Totes', // Corrected brand name
  headline: 'The Unseen Elegance of Minimalist Fashion',
  description: 'Discover how embracing simplicity, clean lines, and a neutral palette can redefine your style and create a timeless, sophisticated wardrobe.',
  imageUrl: heroArticleImage, // You would replace this with an imported image
  bodyContent: `<p>Minimalism in fashion is more than just an aesthetic; it's a philosophy. It champions the idea of 'less is more', focusing on quality over quantity and functionality over fleeting trends. At its core, it involves curating a wardrobe of high-quality, versatile pieces that can be mixed and matched effortlessly.</p><h2>The Core Principles</h2><p>The first step towards a minimalist wardrobe is a significant declutter. This means letting go of items that no longer serve you, don't fit well, or don't align with the style you aspire to. The goal is to create a collection of clothes that you genuinely love and feel confident wearing.</p><blockquote>"The secret of all victory lies in the organization of the non-obvious."</blockquote><p>Once you have a streamlined collection, the focus shifts to mindful consumption. Instead of impulse buys, every new addition should be a deliberate choice—a piece that complements your existing wardrobe and is built to last. This not only elevates your personal style but also promotes sustainability by reducing waste. For more inspiration, check out this <a href="#" target="_blank" rel="noopener noreferrer">guide to sustainable fabrics</a>.</p>`,
};

const relatedArticlesData = [
  { title: 'Autumn Style Guide', imageUrl: 'https://via.placeholder.com/400x300?text=Autumn+Style', articleUrl: "/article/autumn-style" },
  { title: 'The Rise of Techwear', imageUrl: 'https://via.placeholder.com/400x300?text=Techwear', articleUrl: "/article/techwear-rise" },
  { title: 'Vintage Finds', imageUrl: 'https://via.placeholder.com/400x300?text=Vintage+Finds', articleUrl: "/article/vintage-finds" },
];

const ArticlePage = () => {
  const { slug } = useParams();
  console.log('Displaying article for slug:', slug);

  return (
    <div className="article-page-container">
      {/* <ArticleSimpleHeader brandName={articleData.brandName} /> */}
      <ArticleSimpleHeader />
      <ArticleHero
        headline={articleData.headline}
        description={articleData.description}
        imageUrl={articleData.imageUrl}
      />
      <ArticleBody content={articleData.bodyContent} />

      {/* --- THIS IS THE UPDATED LINE --- */}
      {/* We are now passing the article's headline as a prop */}
      <ShareButtons articleTitle={articleData.headline} />

      <RelatedArticles articles={relatedArticlesData} />
    </div>
  );
};

export default ArticlePage;