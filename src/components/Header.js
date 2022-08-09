import styled from "styled-components";
import Logo from "./assets/img/TextLogo.svg";
import UserImg from "./assets/img/userimg.jpg";

export default function Header() {
	return (
		<>
			<StyledHeader>
				<div className="logo">
					<img src={Logo} alt="Logo" />
				</div>
				<ImgProfile className="User-Img">
					<img src={UserImg} alt="User" />
				</ImgProfile>
			</StyledHeader>
		</>
	);
}
const StyledHeader = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	top: 0;
	left: 0;
	width: 100%;
	height: 70px;
	padding: 0 20px;
	background: #126ba5;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
const ImgProfile = styled.div`
	img {
    object-fit: fill;
		border-radius: 50%;
	}
`;
