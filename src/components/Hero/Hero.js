import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Galyver <br />
        Welcome to my portfolio
      </SectionTitle>
      <SectionText>
        
      </SectionText>
      <Button onClick={() => window.location = ''}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;