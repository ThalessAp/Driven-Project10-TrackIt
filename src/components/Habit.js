import { VscTrash } from "react-icons/vsc";
import styled from "styled-components";

export default function Habit({ key, name, days }) {
	return (
		<>
			<HabitName className="habit">
				<HabitTitle className="habit-name">
					<span>
						<h3>{name}</h3>
						<VscTrash />
					</span>
				</HabitTitle>
				<span>
					<Day className="day">D</Day>
					<Day className="day">S</Day>
					<Day className="day">T</Day>
					<Day className="day">Q</Day>
					<Day className="day">Q</Day>
					<Day className="day">S</Day>
					<Day className="day">S</Day>
				</span>
			</HabitName>
		</>
	);
}
const HabitName = styled.div`
	display: flex;
	padding: 10px;
	width: 95%;
	height: 90px;
	background: #ffffff;
	border-radius: 5px;
  margin-bottom: 10px;

	font-family: "Lexend Deca";
	font-style: normal;
	font-weight: 400;
`;

const HabitTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #666666;

	span div {
		:nth-child(days) {
			color: #ffffff;
			background: #cfcfcf;
			border: 1px solid #cfcfcf;
		}
	}
`;
const Day = styled.div`
	width: 30px;
	height: 30px;
	gap: 4px;
	background: #ffffff;
	border: 1px solid #d5d5d5;
	border-radius: 5px;
`;
