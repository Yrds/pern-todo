import styled from 'styled-components';
import { Color } from './Color';

export const StyledInput = styled.input`
  background-color: rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border: none;
  ::placeholder {
    color: ${Color.PRIMARY};
  }
  color: ${Color.SUCCESS};
  padding: 1rem;
`;
