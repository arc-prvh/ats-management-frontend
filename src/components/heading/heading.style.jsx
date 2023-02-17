import styled from 'styled-components';

export const H1 = styled.h1``;

export const H3 = styled.h3`
  font-size: 30px;
  font-weight: 600;
  position: relative;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #d7e1dc;
  padding: 1rem;

  &::before {
    background-color: #03a84e;
    content: '';
    height: 3px;
    width: 50px;
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%, 0%);
    transform: translate(-50%, 0%);
    bottom: -2px;
  }
`;
