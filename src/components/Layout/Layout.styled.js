import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 800px;
  }
  
  @media screen and (min-width: 1200px) {
    width: 960px;
  }
`;
