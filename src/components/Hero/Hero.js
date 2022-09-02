import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionText style={{ paddingBottom: '0px', marginTop: '6%' }}>
          Welcome To my Personal Portfolio
        </SectionText>
        <SectionTitle main center style={{ paddingTop: '20px' }}>
          Hi, I’m Hiep.
        </SectionTitle>
        <SectionTitle main center style={{ paddingTop: '20px', background: 'linear-gradient(121.57deg,#13ADC7 18.77%,rgba(255,255,255,0.66) 60.15%)', WebkitBackgroundClip: 'text' }}>
          I'm Fullstack Developer based in Viet Nam
        </SectionTitle>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;