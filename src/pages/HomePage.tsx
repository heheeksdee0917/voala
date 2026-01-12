import React, { useState, Suspense } from 'react';
import HeroSection from '../components/HeroSection';
import VoalaAwardProjects from '../components/VoalaAwardProjects';
import ServicesSection from '../components/ServicesSection';
import TimelineSection from '../components/TimelineSection';
import VoalaIntroGallery from '../components/VoalaIntroGallery';
import QuoteModal from '../components/QuoteModal';
import BackToTop from '../components/BackToTop';
import { 
  LazyAboutSection,
  LazySignatureProjects,
  LazyTestimonialCarousel,
  LazyCallUsNowCTA,
  LazyRecognitionGrid,
  LazyFooter
} from '../components/LazyComponents';

const ComponentLoader = () => (
  <div className="py-20 flex justify-center">
    <div className="animate-pulse bg-gray-200 h-64 w-full max-w-4xl rounded-lg"></div>
  </div>
);

interface HomePageProps {
  isQuoteModalOpen: boolean;
  onOpenQuoteModal: () => void;
  onCloseQuoteModal: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  isQuoteModalOpen,
  onOpenQuoteModal,
  onCloseQuoteModal,
}) => {
  const voalaIntroSlides = [
    {
      image: '/ProjectSource/Voala Intro/1.png',
      title: 'INTRODUCING',
      description: 'VOALA INTERIOR',
      logo: '/Logo/VOALA NEW_WHITE.png'
    },
    {
      image: '/ProjectSource/Voala Intro/2.png',
      title: 'COST-EFFECTIVE',
      description: 'SOLUTIONS that exceed the value you pay'
    },
    {
      image: '/ProjectSource/Voala Intro/3.png',
      title: 'CONTINUOUS GROWTH & VALUABLE CONSULTATION',
      description: 'most valuable consultations to our clients'
    },
    {
      image: '/ProjectSource/Voala Intro/4.png',
      title: 'AWARD-WINNING DESIGN SOLUTIONS',
      description: 'ensuring excellence in every project we undertake'
    }
  ];
//test
  return (
    <>
      <HeroSection onOpenQuoteModal={onOpenQuoteModal} />
      <ServicesSection />
      <TimelineSection />
      <VoalaAwardProjects />
      <Suspense fallback={<ComponentLoader />}>
        <LazySignatureProjects />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LazyAboutSection />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LazyTestimonialCarousel />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LazyCallUsNowCTA />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LazyRecognitionGrid />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LazyFooter />
      </Suspense>
      <BackToTop />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={onCloseQuoteModal} />
    </>
  );
};

export default HomePage;