import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { FaArrowLeft } from 'react-icons/fa';
import './ArticlePage.css';

const ArticlePage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { articles, newsletterContent } = useData();

    const [articleData, setArticleData] = useState(null);
    const [isWebsiteArticle, setIsWebsiteArticle] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const findArticle = async () => {
            // Check in context first
            const contextArticle = articles.find(a => a.slug === slug);
            if (contextArticle) {
                setIsWebsiteArticle(true);
                setArticleData({
                    title: contextArticle.title,
                    image: contextArticle.heroImage,
                    description: contextArticle.description,
                    body: contextArticle.bodyContent,
                    category: contextArticle.category.replace(/([A-Z])/g, ' $1').trim(),
                });
                setLoading(false);
                return;
            }

            // If not found, fetch from backend
            try {
                const res = await fetch(`http://localhost:5000/api/articles/slug/${slug}`);
                if (res.ok) {
                    const data = await res.json();
                    setIsWebsiteArticle(true);
                    setArticleData({
                        title: data.title,
                        image: data.heroImage,
                        description: data.description,
                        body: data.bodyContent,
                        category: data.category.replace(/([A-Z])/g, ' $1').trim(),
                    });
                } else {
                    // Check in newsletter content
                    if (newsletterContent && newsletterContent.categories) {
                        for (const categoryId in newsletterContent.categories) {
                            const found = newsletterContent.categories[categoryId].find(item => item.id === slug);
                            if (found) {
                                setArticleData({
                                    title: found.caption,
                                    image: found.imageUrl,
                                    body: `<p>The full article can be found at: <a href="${found.articleUrl}" target="_blank" rel="noopener noreferrer">${found.articleUrl}</a></p>`,
                                    category: categoryId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                                });
                                break;
                            }
                        }
                    }
                }
            } catch (error) {
                console.error('Error fetching article:', error);
            } finally {
                setLoading(false);
            }
        };

        findArticle();
    }, [slug, articles, newsletterContent]);

    return (
        <div className="view-page-wrapper">
            <header className="view-page-fixed-header">
                <button onClick={() => navigate(-1)} className="view-page-back-button">
                    <FaArrowLeft />
                    <span>Back</span>
                </button>
            </header>

            {loading ? (
                <div className="view-page-container"><p>Loading...</p></div>
            ) : !articleData ? (
                <div className="view-page-container">
                    <h1 className="view-title">Content Not Found</h1>
                </div>
            ) : (
                <div className="view-page-container">
                    <div className="view-card">
                        <div className="view-text-content-top">
                            {articleData.category && <p className="view-category">{articleData.category}</p>}
                            <h1 className="view-title">{articleData.title}</h1>
                            {isWebsiteArticle && articleData.description && (
                                <p className="view-description">{articleData.description}</p>
                            )}
                        </div>

                        {articleData.image && (
                            <div className="view-image-wrapper">
                                <img src={articleData.image} alt={articleData.title} />
                            </div>
                        )}

                        <div className="view-body" dangerouslySetInnerHTML={{ __html: articleData.body }} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArticlePage;
