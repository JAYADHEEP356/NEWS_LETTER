// This file is CORRECT.
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ArticleSimpleHeader.css';
import litLogo from '../../../assets/lit-logo.png'; // This is CORRECT
const ArticleSimpleHeader = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
<header className="article-simple-header">
  <button onClick={handleGoBack} className="back-button">← Back</button>
    <h6 className="main-title">NEWSLETTER</h6>

  <Link to="/" className="header-logo-link">
    <img src={litLogo} alt="Luxury In Taste Logo" className="header-logo-img" />
  </Link>
</header>

  );
};
export default ArticleSimpleHeader;