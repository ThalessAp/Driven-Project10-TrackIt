import styled from "styled-components";

export default function CreateHabit() {
  
	return (
		<>
			<HabitName className="habit">
				<form>
					<input type="text" placeholder="Nome da atividade" />
					<span>
						<Day className="day">
							<input type="checkbox" id="0" name="Dom" value="0" />
							<label htmlFor="0">D</label>
						</Day>
						<Day className="day">
							<input type="checkbox" id="1" name="Dom" value="1" />
							<label htmlFor="1">S</label>
						</Day>
						<Day className="day">
							<input type="checkbox" id="2" name="Dom" value="2" />
							<label htmlFor="2">T</label>
						</Day>
						<Day className="day">
							<input type="checkbox" id="3" name="Dom" value="3" />
							<label htmlFor="3">Q</label>
						</Day>
						<Day className="day">
							<input type="checkbox" id="4" name="Dom" value="4" />
							<label htmlFor="4">Q</label>
						</Day>
						<Day className="day">
							<input type="checkbox" id="5" name="Dom" value="5" />
							<label htmlFor="5">S</label>
						</Day>
						<Day className="day">
							<input type="checkbox" id="6" name="Dom" value="6" />
							<label htmlFor="6">S</label>
						</Day>
          </span>
          <span>
            <button type="">Cancelar</button>
            <button type="submit">Salvar</button>
          </span>
				</form>
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
