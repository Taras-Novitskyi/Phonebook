import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
    justify-content: space-between;

    padding-left: 16px;
    padding-right: 16px;
  }
`;
