import styled from 'styled-components';

const Grid = styled.section`
  display: grid;
  grid-gap: 1.5rem;
  width: 95%;
  max-width: 75rem;
  margin: 1rem auto;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));

  @media (max-width: 300px) {
    grid-template-columns: 1fr;
  }
`;

export default Grid;
