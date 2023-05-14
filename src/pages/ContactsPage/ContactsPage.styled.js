import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
