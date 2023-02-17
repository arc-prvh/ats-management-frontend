import styled from 'styled-components';

export const JobCard = styled.div`
  padding: 2.625rem 2.5rem 2.5625rem;
  max-width: 370px;
  background-color: #f4f7f7;
  border-radius: 5px;
  color: #272a33;
  transition: all 0.3s ease-out;

  & button {
    height: 38px;
    padding: 4px 5px 6px;
    width: 110px;
    font-size: 15px;
    text-align: center;
  }

  @media (max-width: 1199px) {
    padding: 30px 28px 29px;

    & button {
      height: 34px;
      padding: 4px 4px 4px;
      width: 90px;
      font-size: 13px;
      border-radius: 5px;
      color: #fff;
      font-weight: 400;
    }
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: 0px 5px 15px 0px rgb(114 118 116 / 15%);
  }
`;

export const ImageContainer = styled.div`
  width: 4.6875rem;
  height: 4.6875rem;
  background-color: #656565;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CompanyName = styled.h4`
  font-size: 20px;
  margin-bottom: 9px;
  max-width: 200px;
  height: 20px;
  overflow: hidden;

  & > a {
    color: #272a33;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
  }

  &:hover > a {
    color: #03a84e;
  }

  @media (max-width: 1199px) {
    font-size: 16px;
  }
`;

export const Location = styled.p`
  color: #656565;
  font-size: 15px;
  line-height: 1;
  font-weight: 400;

  @media (max-width: 1199px) {
    font-size: 14px;
  }
`;

export const MainContent = styled.div`
  margin: 24px 0 20px;
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 12px;
  height: 25px;
  overflow: hidden;

  & > a {
    color: #272a33;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
  }

  &:hover > a {
    color: #03a84e;
  }

  @media (max-width: 1199px) {
    font-size: 18px;
  }
`;

export const Type = styled.h5`
  color: #03a84e;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;

  @media (max-width: 1199px) {
    font-size: 14px;
  }
`;

export const Skills = styled.p`
  font-size: 15px;
  line-height: 1.87;
  max-width: 234px;
  word-wrap: break-word;

  @media (max-width: 1199px) {
    font-size: 13px;
    max-width: none;
  }
`;

export const Salary = styled.h4`
  font-size: 22px;
  line-height: 1;

  @media (max-width: 1199px) {
    font-size: 19px;
  }
`;
