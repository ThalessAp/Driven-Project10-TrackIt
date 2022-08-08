import styled from 'styled-components';
import Logo from './assets/img/TextLogo.svg';

export default function Header() {
  return (
    <>
      <StyledHeader>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="User-Img">
          <img src={Logo} alt="Logo" />
        </div>
      </StyledHeader>
    </>
  );
}
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  
`;
