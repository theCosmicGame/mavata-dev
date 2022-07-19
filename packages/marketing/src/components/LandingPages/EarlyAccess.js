import React from 'react';
import ContentSection from './ContentSection';
import Footer from '../footer/Footer';

import AccessForm from '../form/AccessForm';

export default function EarlyAccess() {
  return (
    <React.Fragment>
      <ContentSection>
        <AccessForm />
      </ContentSection>
      <Footer />
    </React.Fragment>
  )
};