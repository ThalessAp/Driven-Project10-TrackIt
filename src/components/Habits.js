import { AiOutlinePlus } from "react-icons/ai";
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
		days: [],
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
				<CreateNewHabit
					newHabit={newHabit}
					setNewHabit={setNewHabit}
					token={token}
				/>
			</>
		);
	}

	return (
		<>
			<Header />
			<Subtitle className="subtitle">
				<>
					<h3>Meus hábitos</h3>
					<Icon className="add-habit" onClick={CreateHabit}>
						<AiOutlinePlus />
					</Icon>
				</>
			</Subtitle>
			<Main className="main">
				{habits ? (
					<Desc>
						Você não tem nenhum hábito cadastrado ainda.Adicione um hábito para
						começar a trackear!
					</Desc>
				) : (
					habits.map((habit) => {
						return (
							<>
								<Habit key={habit.id} name={habit.name} days={habit.days} />
							</>
						);
					})
				)}
			</Main>

			<Footer />
		</>
	);
}

const Subtitle = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 20px;

	h3 {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 23px;
		color: #126ba5;
	}
`;
const Icon = styled.div`
	width: 40px;
	height: 35px;
	background: #52b6ff;
	border-radius: 5px;

	svg {
		width: 100%;
		height: 100%;
		color: #fff;
	}
`;
const Desc = styled.h4`
	font-family: "Lexend Deca";
	font-style: normal;
	font-weight: 400;
	font-size: 17.976px;
	line-height: 22px;

	color: #666666;
`;
const Main = styled.div`
	height: calc(100%-70px);
`;
