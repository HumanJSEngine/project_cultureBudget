import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';

const WriteFormTitle = () => {
  return (
    <Box>
      <FormInput placeholder={'제목을 입력하세요.'}></FormInput>
    </Box>
  );
};

const Box = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  height: 58px;
  padding: 20px 0;
  border-bottom: 1px solid ${colors.gray200};
`;

const FormInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;
  color: ${colors.gray700};
  font: ${fonts.score15Medium};
  &::placeholder {
    color: ${colors.placeholder};
  }
  &:focus {
    outline: none;
  }
`;

export default WriteFormTitle;
