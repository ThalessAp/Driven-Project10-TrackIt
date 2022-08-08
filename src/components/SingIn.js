import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SingIn } from "./services/axios";
import Logo from "./assets/img/Logo.svg";

export default function Login() {
	
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	function Logar() {
		useEffect(() => {
			SingIn(user)
				.then((response) => {
				console.log(response);
			});
		});
	}

	return (
		<>
			<Styledlogo>
				<div className="logo">
					<img src={Logo} alt="Logo" />
				</div>
			</Styledlogo>

			<StyledForm>
				<form onSubmit={Logar()}>
					<input
						type="text"
						placeholder="  email"
						onChange={(e) => setUser({ ...user, email: e.target.value })}
					/>
					<input
						type="password"
						placeholder="  senha"
						onChange={(e) => setUser({ ...user, password: e.target.value })}
					/>
					<button type="submit">Entrar</button>
				</form>
			</StyledForm>
			<StyledLink>
				<Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
			</StyledLink>
		</>
	);
}
const Styledlogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyledForm = styled.div`
	form {
		display: flex;
		flex-direction: column;
		margin-left: 36px;
		margin-right: 36px;

		input {
			height: 45px;
			background: #ffffff;
			border: 1px solid #d5d5d5;
			border-radius: 5px;
			margin-bottom: 6px;
		}
		button {
			height: 45px;
			background: #52b6ff;
			border-radius: 5px;

			font-family: "Lexend Deca";
			font-style: normal;
			font-weight: 400;
			font-size: 20.976px;
			line-height: 26px;
			text-align: center;
			color: #ffffff;
		}
	}
`;
const StyledLink = styled.div`
	display: flex;
	justify-content: center;
	a {
		width: 232px;
		height: 17px;
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		text-align: center;
		text-decoration-line: underline;
		color: #52b6ff;
		margin-top: 25px;
	}
`;
