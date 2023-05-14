import styled from 'styled-components';

export const List = styled.ul`
  width: 240px;
  padding: 0 10px;

  @media (min-width: 480px) {
    width: 320px;
  }
`;

export const Item = styled.li`
  list-style: none;
  border-bottom: 2px solid rgb(212, 212, 212);
  margin-bottom: 8px;
`;
