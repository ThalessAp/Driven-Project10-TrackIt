import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<StyledFooter>
				<div>
					<Link to={"/habitos"}>
						<div className="habits">
							<h3>Hábitos</h3>
						</div>
					</Link>

					<Link to={"/hoje"}>
						<div className="today">
							<div className="circle">
								<CircularProgressbar value={10} text={"Hoje"} />
							</div>
						</div>
					</Link>

					<Link to={"/historico"}>
						<div className="history">
							<h3>Histórico</h3>
						</div>
					</Link>
				</div>
			</StyledFooter>
		</>
	);
}
const StyledFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	bottom: 0;
	left: 0;
	width: 100%;
	div {
		background: #fff;
	}
	h3 {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 17.976px;
		line-height: 22px;
		text-align: center;
		color: #52b6ff;
	}
	.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;

		background: #52b6ff;
	}
`;
