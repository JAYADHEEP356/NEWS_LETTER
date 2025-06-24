import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../../context/DataContext';
import { FaPlus, FaPaperPlane } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import './MailAdderPage.css';

const CATEGORY_CONFIG = [
    { id: 'fast-fashion', title: 'This Week in Fast Fashion' },
    { id: 'luxury-fashion', title: 'This Week in Luxury Fashion' },
    { id: 'sustainable-fashion', title: 'This Week in Sustainable Fashion' },
    { id: 'sneaker-world', title: 'This Week in The Sneaker World' }
];

const MailAdderPage = () => {
    const navigate = useNavigate();
    const { newsletterContent, updateNewsletterContent, showNotification } = useData();
    const [newItems, setNewItems] = useState({
        'fast-fashion': [], 'luxury-fashion': [], 'sustainable-fashion': [], 'sneaker-world': []
    });

    const handleAddItem = (categoryId) => {
        const item = { id: `new-${Date.now()}-${Math.random()}`, caption: '', articleUrl: '', imageUrl: '' };
        setNewItems(prev => ({ ...prev, [categoryId]: [...prev[categoryId], item] }));
    };

    const handleItemChange = (categoryId, itemId, field, value) => {
        setNewItems(prev => {
            const updated = prev[categoryId].map(item => item.id === itemId ? { ...item, [field]: value } : item);
            return { ...prev, [categoryId]: updated };
        });
    };

    const handlePublishAll = () => {
        const updatedContent = JSON.parse(JSON.stringify(newsletterContent));
        let totalItemsAdded = 0;

        for (const categoryId in newItems) {
            const validItemsToAdd = newItems[categoryId].filter(item => item.caption.trim() !== '');
            if (validItemsToAdd.length > 0) {
                updatedContent.categories[categoryId].push(...validItemsToAdd);
                totalItemsAdded += validItemsToAdd.length;
            }
        }

        if (totalItemsAdded === 0) {
            showNotification("No new items with captions to publish.", "warning");
            return;
        }
        updateNewsletterContent(updatedContent);
        showNotification(`Published ${totalItemsAdded} new item(s) successfully!`);
        navigate('/admin/mail');
    };

    return (
        <div className="adder-page-container">
           <header className="list-page-header">
    <h1 className="purple-gradient-header">Add Content to Send</h1>
    <div className="header-actions">
      
        <button onClick={handlePublishAll} className="publish-button">
            <FaPaperPlane /> Publish
        </button>
    </div>
</header>

            <main className="adder-sections-wrapper">
                {CATEGORY_CONFIG.map(category => (
                    // CORRECTED: Added glowing-card class
                    <section key={category.id} className="adder-section glowing-card">
                        <div className="adder-section-header">
                            <h2>{category.title}</h2>
                            <button onClick={() => handleAddItem(category.id)} className="adder-add-item-btn"><FaPlus /> Add</button>
                        </div>
                        <div className="adder-items-area">
                            {newItems[category.id].map(item => (
                                <div key={item.id} className="adder-item-card">
                                    <div className="adder-card-grid">
                                        <div className="adder-card-field-full"><label>Caption / Headline</label><input type="text" className="adder-input" placeholder="e.g., The Future of Sustainable Denim" value={item.caption} onChange={(e) => handleItemChange(category.id, item.id, 'caption', e.target.value)} /></div>
                                        <div><label>Article URL</label><input type="url" className="adder-input" placeholder="https://example.com/article-link" value={item.articleUrl} onChange={(e) => handleItemChange(category.id, item.id, 'articleUrl', e.target.value)} /></div>
                                        <div><label>Image URL</label><input type="url" className="adder-input" placeholder="https://example.com/image.jpg" value={item.imageUrl} onChange={(e) => handleItemChange(category.id, item.id, 'imageUrl', e.target.value)} /></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
};

export default MailAdderPage;