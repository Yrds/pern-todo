import styled from 'styled-components';

export const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  thead, tbody, tr{
    display:flex;
    width: 100%;
    flex-wrap: wrap;
  }
  tr{
    justify-content: space-around;
    td:nth-child(1), th:nth-child(1){
      text-align: left;
      flex-basis: 80%;
      flex-grow: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  }
`
