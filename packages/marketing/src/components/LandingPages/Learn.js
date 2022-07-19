import React from 'react';

import ContentSection from './ContentSection';
import ContactForm from '../form/ContactForm';
import LearnMoreSection from '../form/LearnMoreSection';
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