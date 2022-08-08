import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Audio } from "react-loader-spinner";
import { SignUp } from "./services/axios";
import Logo from "./assets/img/Logo.svg";

export default function Cadatrar() {
	const [user, setUser] = useState({
		email: "",
		password: "",
		name: "",
		imgProfile: "",
	});

	function Cadastrar() {
		useEffect(() => {
			SignUp(user)
        .then((response) => {
          
					console.log(response);
					return (
						<>
							<Styledlogo>
								<div className="logo">
									<img src={Logo} alt="Logo" />
								</div>
							</Styledlogo>

							<StyledForm>
								<form onSubmit={Cadastrar()}>
									<input
										type="text"
										placeholder="  email"
										onChange={(e) =>
											setUser({ ...user, email: e.target.value })
										}
										disabled
									/>
									<input
										type="password"
										placeholder="  senha"
										onChange={(e) =>
											setUser({ ...user, password: e.target.value })
										}
										disabled
									/>
									<input
										type="text"
										placeholder="  nome"
										onChange={(e) => setUser({ ...user, name: e.target.value })}
										disabled
									/>
									<input
										type="text"
										placeholder="  foto"
										onChange={(e) =>
											setUser({ ...user, imgProfile: e.target.value })
										}
										disabled
									/>
									<button type="submit" disabled>
										Cadastrar
									</button>
								</form>
							</StyledForm>
							<StyledLink>
								<Audio
									height="80"
									width="80"
									radius="9"
									color="green"
									ariaLabel="three-dots-loading"
									wrapperStyle
									wrapperClass
								/>
								<Link to="/">Já tem uma conta? Faça login!</Link>
							</StyledLink>
						</>
					);
				})
				.catch((error) => {
					console.log(error);
					return (
						<>
							<Styledlogo>
								<div className="logo">
									<img src={Logo} alt="Logo" />
								</div>
							</Styledlogo>

							<StyledForm>
								<form onSubmit={Cadastrar()}>
									<input
										type="text"
										placeholder="  email"
										onChange={(e) =>
											setUser({ ...user, email: e.target.value })
										}
									/>
									<input
										type="password"
										placeholder="  senha"
										onChange={(e) =>
											setUser({ ...user, password: e.target.value })
										}
									/>
									<input
										type="text"
										placeholder="  nome"
										onChange={(e) => setUser({ ...user, name: e.target.value })}
									/>
									<input
										type="text"
										placeholder="  foto"
										onChange={(e) =>
											setUser({ ...user, imgProfile: e.target.value })
										}
									/>
									<button type="submit">Cadastrar</button>
								</form>
							</StyledForm>
							<StyledLink>
								<Link to="/">Já tem uma conta? Faça login!</Link>
							</StyledLink>
						</>
					);
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
				<form onSubmit={Cadastrar()}>
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
					<input
						type="text"
						placeholder="  nome"
						onChange={(e) => setUser({ ...user, name: e.target.value })}
					/>
					<input
						type="text"
						placeholder="  foto"
						onChange={(e) => setUser({ ...user, imgProfile: e.target.value })}
					/>
					<button type="submit">Cadastrar</button>
				</form>
			</StyledForm>
			<StyledLink>
				<Link to="/">Já tem uma conta? Faça login!</Link>
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
