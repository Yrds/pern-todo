import styled from 'styled-components';
import { StyledInput } from './StyledInput';
import { StyledButton } from './StyledButton';
import { Color } from './Color';

export const StyledInputGroup = styled.div`
  border: solid ${Color.PRIMARY} 1px;
  ${StyledInput},
  ${StyledButton}{
    height: 100%;
    border: none;
    border-right: solid ${Color.PRIMARY} 1px;
    border-radius: 0px;

    &:last-child{
      border-right: none;
    }
  }


`;
