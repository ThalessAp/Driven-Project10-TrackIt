import styled from "styled-components";
import {
	buildStyles,
	CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { calcDone } from "./Today";

export default function Footer() {
	let value = `{${calcDone} ? ${calcDone} : 0}%`;

	
	return (
		<>
			<StyledFooter>
				<Link to={"/habitos"}>
					<div className="habits">
						<h3>Hábitos</h3>
					</div>
				</Link>

				<Link to={"/hoje"}>
					<div className="today">
						<Circle className="circle">
							<CircularProgressbarWithChildren
								value={value}
								text={`Hoje`}
								background
								backgroundPadding={6}
								styles={buildStyles({
									backgroundColor: "#3e98c7",
									textColor: "#fff",
									pathColor: "#fff",
									trailColor: "transparent",
								})}
							/>
						</Circle>
					</div>
				</Link>

				<Link to={"/historico"}>
					<div className="history">
						<h3>Histórico</h3>
					</div>
				</Link>
			</StyledFooter>
		</>
	);
}
const StyledFooter = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	bottom: 0;
	left: 0;
	margin-top: 50px;
	width: 100%;
	max-height: 70px;
	background: #fff;
	a {
		text-decoration: none;
	}
	h3 {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		color: #52b6ff;
	}
`;
const Circle = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background: #52b6ff;

	font-family: "Lexend Deca";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;

	bottom: 0;
	margin-bottom: 20px;
`;
