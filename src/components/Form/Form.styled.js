import styled from "@emotion/styled";

export const FormStyled = styled.form`
  width: 250px;
  border: 1px dashed olivedrab;
  display: flex;
  flex-direction: column;
  padding: 15px 40px 15px 20px;
`;
export const Label = styled.label`
  align-self: flex-start;
  &:first-child {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  align-self: flex-start;
`;

export const AddButton = styled.button`
  margin-top: 15px;
`;
