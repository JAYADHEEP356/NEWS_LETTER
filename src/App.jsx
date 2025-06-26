import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';

// CORE IMPORTS
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';

// PAGE IMPORTS
import LoginPage from './pages/admin/Auth/LoginPage';
import SignUpPage from './pages/admin/Auth/SignUpPage';
import AdminDashboard from './pages/admin/AdminDashboard/AdminDashboard';
import ContentManager from './pages/admin/ContentManager/ContentManager';
import ArticleEditor from './pages/admin/ArticleEditor/ArticleEditor';
import ArticlePage from './pages/public/ArticlePage';
import MailAdderPage from './pages/admin/MailAdderPage/MailAdderPage'; // NEW
import MailItemEditor from './pages/admin/MailItemEditor/MailItemEditor';

// STYLES
import './styles/App.css';
import './styles/AdminLayout.css'; 

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Routes>
          {/* Public and Auth Routes */}
          <Route path="/" element={<Navigate to="/admin/login" replace />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/signup" element={<SignUpPage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />

          {/* Admin Routes Wrapper */}
          <Route element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            
            {/* Main Content Manager Routes */}
            <Route path="/admin/website" element={<ContentManager section="website" />} />
            <Route path="/admin/mail" element={<ContentManager section="mail" />} />

            {/* Mail Section Specific Routes */}
            <Route path="/admin/mail/add" element={<MailAdderPage />}/>
            <Route path="/admin/mail/edit/:id" element={<MailItemEditor />} />

            {/* Website Section Specific Routes */}
            <Route path="/admin/editor/:section" element={<ArticleEditor />} />
            <Route path="/admin/editor/:section/:slug" element={<ArticleEditor />} />
          </Route>
          
        </Routes>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;