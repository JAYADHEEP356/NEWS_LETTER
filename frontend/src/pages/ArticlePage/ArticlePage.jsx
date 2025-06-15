import React from 'react';
import { useParams } from 'react-router-dom';
import './ArticlePage.css';

// Import all the new components
import ArticleSimpleHeader from './ArticleSimpleHeader/ArticleSimpleHeader';
import ArticleHero from './ArticleHero/ArticleHero';
import ArticleBody from './ArticleBody/ArticleBody';
import ShareButtons from '../../components/ShareButtons/ShareButtons';
import RelatedArticles from './RelatedArticles/RelatedArticles';

// --- Static Content (as specified in the prompt) ---
// In a real app, this would be fetched based on the URL slug
const articleData = {
  brandName: 'Luxury In Taste',
  headline: 'The Unseen Elegance of Minimalist Fashion',
  description: 'Discover how embracing simplicity, clean lines, and a neutral palette can redefine your style and create a timeless, sophisticated wardrobe.',
  imageUrl: 'https://via.placeholder.com/600x800',
  bodyContent: `<p>Minimalism in fashion is more than just an aesthetic; it's a philosophy. It champions the idea of 'less is more', focusing on quality over quantity and functionality over fleeting trends. At its core, it involves curating a wardrobe of high-quality, versatile pieces that can be mixed and matched effortlessly.</p><h2>The Core Principles</h2><p>The first step towards a minimalist wardrobe is a significant declutter. This means letting go of items that no longer serve you, don't fit well, or don't align with the style you aspire to. The goal is to create a collection of clothes that you genuinely love and feel confident wearing.</p><blockquote>"The secret of all victory lies in the organization of the non-obvious."</blockquote><p>Once you have a streamlined collection, the focus shifts to mindful consumption. Instead of impulse buys, every new addition should be a deliberate choice—a piece that complements your existing wardrobe and is built to last. This not only elevates your personal style but also promotes sustainability by reducing waste. For more inspiration, check out this <a href="#">guide to sustainable fabrics</a>.</p>`,
};

const relatedArticlesData = [
  { title: 'Autumn Style Guide', imageUrl: 'https://via.placeholder.com/400x300?text=Autumn+Style' },
  { title: 'The Rise of Techwear', imageUrl: 'https://via.placeholder.com/400x300?text=Techwear' },
  { title: 'Vintage Finds', imageUrl: 'https://via.placeholder.com/400x300?text=Vintage+Finds' },
];

const ArticlePage = () => {
  const { slug } = useParams();
  // You would use the 'slug' to fetch the correct article data
  console.log('Displaying article for slug:', slug);

  return (
    <div className="article-page-container">
      <ArticleSimpleHeader brandName={articleData.brandName} />
      <ArticleHero
        headline={articleData.headline}
        description={articleData.description}
        imageUrl={articleData.imageUrl}
      />
      <ArticleBody content={articleData.bodyContent} />
      <ShareButtons />
      <RelatedArticles articles={relatedArticlesData} />
    </div>
  );
};

export default ArticlePage;