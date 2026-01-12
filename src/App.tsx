import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { 
  LazyProjectsPage, 
  LazyProjectDetailPage, 
  LazyAwardWinningProjectDetailPage 
} from './components/LazyComponents';

const LoadingSpinner = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-voala-secondary"></div>
  </div>
);

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-louis-george-cafe">
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              isQuoteModalOpen={isQuoteModalOpen}
              onOpenQuoteModal={handleOpenQuoteModal}
              onCloseQuoteModal={handleCloseQuoteModal}
            />
          } 
        />
        <Route 
          path="/projects" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazyProjectsPage />
            </Suspense>
          } 
        />
        <Route 
          path="/projects/:projectId" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazyProjectDetailPage />
            </Suspense>
          } 
        />
        <Route 
          path="/award-winning-projects/:projectId" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LazyAwardWinningProjectDetailPage />
            </Suspense>
          } 
        />
        </Routes>
    </div>
  );
}

export default App;