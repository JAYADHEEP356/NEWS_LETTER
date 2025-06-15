import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleSimpleHeader.css';

const ArticleSimpleHeader = ({ brandName }) => {
  return (
    <header className="article-simple-header">
      <Link to="/" className="back-button">
        ← Back to Newsletters
      </Link>
      <div className="brand-name">{brandName}</div>
    </header>
  );
};

export default ArticleSimpleHeader;