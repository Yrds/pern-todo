import styled from 'styled-components';

export const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  thead {
    height: 2rem;
  }
  thead, tbody, tr{
    display:flex;
    width: 100%;
    flex-wrap: wrap;
  }
  tr{
    td, th{
      box-sizing:border-box;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-grow: 1;
      &:first-child {
        flex-basis: 80%;
      }
      &:last-child{
        flex-basis: 20%;
      }
    }

  }
`
