import React from 'react';
import {
  JobCard,
  CompanyName,
  FlexContainer,
  ImageContainer,
  Location,
  Title,
  MainContent,
  Salary,
  Skills,
  Type,
} from './card.style';
import Button from '@/components/button/button';

function Card({ companyName, location, title, type, skills, salary }) {
  return (
    <JobCard>
      <FlexContainer>
        <ImageContainer>
          <img src="" alt="alt text" />
        </ImageContainer>
        <div>
          <CompanyName>
            {' '}
            <a href="">{companyName}</a>{' '}
          </CompanyName>
          <Location> {location} </Location>
        </div>
      </FlexContainer>
      <MainContent>
        <Title>
          <a href="">{title}</a>
        </Title>
        <Type>{type}</Type>
        <Skills> {skills} </Skills>
      </MainContent>
      <FlexContainer>
        <Salary>${salary}</Salary>
        <Button>Apply Now</Button>
      </FlexContainer>
    </JobCard>
  );
}

export default Card;
