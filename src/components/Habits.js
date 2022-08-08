import { AiFillPlusSquare } from "react-icons/ai";
import styled from "styled-components";
import Header from "./Header";
import Habit from "./Habit";
import CreateNewHabit from "./CreateNewHabit";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { GetHabits } from "./services/axios";

export default function Habits(Token) {
	const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState({
    name: "",
    days: []
  });
	const token = {
		config: {
			headers: {
				Authorization: `Bearer ${Token}`,
			},
		},
	};

	useEffect(() => {
		GetHabits(token)
			.then((response) => {
				setHabits(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	});

  function CreateHabit() {
    
		return (
			<>
        <CreateNewHabit newHabit={newHabit } setNewHabit={setNewHabit} token={token} />
			</>
		);
	}

	return (
		<>
			<Header />
			<Subtitle className="subtitle">
				<span>
					<h3>Meus hábitos</h3>

					<div className="add-habit" onClick={CreateHabit}>
						<AiFillPlusSquare />
					</div>
				</span>
			</Subtitle>
			<div className="main">
				{habits ? (
					habits.map((habit) => {
						return (
							<>
								<Habit key={habit.id} name={habit.name} days={habit.days} />
							</>
						);
					})
				) : (
					<h4>
						Você não tem nenhum hábito cadastrado ainda.Adicione um hábito para
						começar a trackear!
					</h4>
				)}
			</div>

			<Footer />
		</>
	);
}

const Subtitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 25px;

	span {
		h3 {
			font-family: "Lexend Deca";
			font-style: normal;
			font-weight: 400;
			font-size: 23px;
			color: #126ba5;
		}
		div {
			width: 40px;
			height: 35px;
			background: #52b6ff;
			border-radius: 5px;
		}
	}
`;
