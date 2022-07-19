import React from 'react';

import ContentSection from '../LandingPages/ContentSection';
import ContactForm from './ContactForm';
import LearnMoreSection from '../LandingPages/LearnMoreSection';
import Footer from '../footer/Footer';
import SubmitButton from '../buttons/SubmitButton';


export default function Learn() {  
  return (
    <React.Fragment>
      <ContentSection>
        <ContactForm />
        <LearnMoreSection />
        <SubmitButton />
      </ContentSection>
      <Footer />
    </React.Fragment>
  )
};