import { useEffect, useState } from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { CheckHabit, TodayHabit, UncheckHabit } from "./services/axios";

export default function Today({ Token }) {
	const [habits, setHabits] = useState([]);

	const token = {
		config: {
			headers: {
				Authorization: `Bearer ${Token}`,
			},
		},
	};
	useEffect(() => {
		TodayHabit(token).then((response) => {
			setHabits(response.data);
		});
	});

	function ToggleDone(index, id) {
		useEffect(() => {
			if (habits[index].done) {
				CheckHabit(id, habits[index], token)
					.then((response) => {
						setHabits[index](response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			} else {
				UncheckHabit(id, habits[index], token)
					.then((response) => {
						setHabits[index](response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);
	}

	return (
		<>
			<Header />
			<div className="todayFeed">
				<Subtitle className="subtitle">
					<span>
						<h2>Date: {new Date().toLocaleDateString()}</h2>
					</span>
					<span>
						<h3>
							{habits.filter((habit) => (habit.done === true).length) > 0 ? (
								<h3
									style={`
                  ${"background: #8FC549"}
                  `}>
									`(${(habits.done === true).length} / &{habits.length}*100 %)
									dos hábitos concluidos`
								</h3>
							) : (
								<h3
									style={`
                  ${"background: #BABABA"}
                  `}>
									Nenhum hábito concluído ainda
								</h3>
							)}
						</h3>
					</span>
				</Subtitle>
				<Habits className="habits">
					{habits.map((habit, index) => (
						<Habit key={index} className="habit">
							<div className="habit-title">
								<h4>{habit.name}</h4>
							</div>
							<div className="habit-streak">
								<h5>Sequência atual:</h5>
								<h5
									style={`
                  ${
										habit.done === true
											? "background: #8FC549"
											: "background: #666"
									}
                  `}>
									{habit.currentSequence} dia(s)
								</h5>
								<h5>Seu Recorde:</h5>
								<h5
									style={`
                  ${
										habit.done === true
											? "background: #8FC549"
											: "background: #666"
									}
                  `}>
									{habit.highestSequence} dia(s)
								</h5>
							</div>
							<div className="Icon" onClick={ToggleDone(index, habit.id)}>
								<AiFillCheckSquare
									style={`
                  ${
										habit.done === true
											? "background: #8FC549"
											: "background: #EBEBEB"
									}
                  `}
								/>
							</div>
						</Habit>
					))}
				</Habits>
			</div>
			<Footer />
		</>
	);
}
const Subtitle = styled.div`
	font-family: "Lexend Deca";
	font-style: normal;
	font-weight: 400;
	h2 {
		font-size: 23px;
		color: #126ba5;
	}
	h3 {
		font-size: 17px;
	}
`;
const Habits = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
	background: #ffffff;
	border-radius: 5px;
	overflow-y: scroll;
`;
const Habit = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;

	.icon {
		width: 69px;
		height: 69px;
		border: 1px solid #e7e7e7;
		border-radius: 5px;
	}
`;
