import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const StyledGrid = styled(Grid)`
  padding: 10px;
`;

const FormRow: React.FC = ({ children }) => {
  return <StyledGrid item>{children}</StyledGrid>;
};


export default FormRow;