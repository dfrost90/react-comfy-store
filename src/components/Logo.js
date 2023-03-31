import styled from 'styled-components';

const Logo = () => {
  return (
    <Wrapper>
      <span>custom</span>STORE
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  color: var(--clr-grey-1);
  margin: 0;
  span {
    color: var(--clr-primary-5);
  }
`;

export default Logo;
