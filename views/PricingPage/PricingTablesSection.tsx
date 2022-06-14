import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'Styles/GlobalStyles/AutofitGrid';
import PricingCard from 'components/Cards/PricingCard';
import SectionTitle from 'Styles/SectionTitle';
import { Wrapper } from 'Styles/pricingTables.style';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Flexible pricing for agile teams</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="free"
          description="Give us a try for free"
          benefits={['1 seat', '1 active project', 'Ulimited viewers', '10 blocks']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Starter"
          description="Best for individual desginers"
          benefits={['1 seat', '3 active project', 'Ulimited viewers', '100 blocks', 'CSV Downloader', 'Password protection']}
          isOutlined
        >
          $29<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Premium"
          description="Get your team together"
          benefits={[
            '10 seat',
            '10 active project',
            'Ulimited viewers',
            'Unlimited blocks',
            'CSV Downloader',
            'Password protection',
            'Customization',
          ]}
        >
          $79<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}
