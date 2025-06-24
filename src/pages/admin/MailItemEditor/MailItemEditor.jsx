import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../../../context/DataContext';
import { FaSave } from 'react-icons/fa';
import '../../../styles/Editor.css'; 

const MailItemEditor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { newsletterContent, updateNewsletterContent, showNotification } = useData();
    
    const [itemData, setItemData] = useState(null);
    const [originalCategory, setOriginalCategory] = useState(null);

    useEffect(() => {
        if (!newsletterContent) return;
        for (const categoryId in newsletterContent.categories) {
            const foundItem = newsletterContent.categories[categoryId].find(item => item.id === id);
            if (foundItem) {
                setItemData(foundItem);
                setOriginalCategory(categoryId);
                break;
            }
        }
    }, [id, newsletterContent]);

    const handleInputChange = (field, value) => {
        setItemData(prev => ({ ...prev, [field]: value }));
    };

    const handleUpdate = () => {
        if (!itemData || !originalCategory) return;
        
        const updatedContent = JSON.parse(JSON.stringify(newsletterContent));
        const itemIndex = updatedContent.categories[originalCategory].findIndex(item => item.id === id);

        if (itemIndex > -1) {
            updatedContent.categories[originalCategory][itemIndex] = itemData;
            updateNewsletterContent(updatedContent);
            showNotification("Content updated successfully!");
            navigate('/admin/mail');
        } else {
            showNotification("Error: Could not find item to update.", "error");
        }
    };

    if (!itemData) {
        return (
            <div className="editor-container">
                <header className="editor-header purple-theme-header">
                    <h1>Loading...</h1>
                </header>
            </div>
        );
    }

    return (
        <div className="editor-container">
            <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} className="editor-form">
                <header className="editor-header purple-theme-header">
                    <h1>Edit Mail Content</h1>
                    <div className="editor-actions">
                        <button type="submit" className="action-btn-primary">
                            <FaSave /> Update
                        </button>
                    </div>
                </header>
                
                <div className="editor-main-layout" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="editor-content-area">
                        <div className="editor-input-group">
                            <label htmlFor="caption">Caption / Headline</label>
                            <input id="caption" type="text" value={itemData.caption} onChange={(e) => handleInputChange('caption', e.target.value)} placeholder="e.g., The Latest Sneaker Drops This Week" />
                        </div>
                        <div className="editor-input-group">
                            <label htmlFor="articleUrl">Article URL</label>
                            <input id="articleUrl" type="url" value={itemData.articleUrl} onChange={(e) => handleInputChange('articleUrl', e.target.value)} placeholder="https://example.com/article-link" />
                        </div>
                        <div className="editor-input-group">
                            <label htmlFor="imageUrl">Image URL</label>
                            <input id="imageUrl" type="url" value={itemData.imageUrl} onChange={(e) => handleInputChange('imageUrl', e.target.value)} placeholder="https://example.com/image.jpg" />
                        </div>
                        {itemData.imageUrl && (
                            <div className="editor-input-group">
                                <label>Image Preview</label>
                                <img src={itemData.imageUrl} alt="Preview" className="image-preview" />
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MailItemEditor;