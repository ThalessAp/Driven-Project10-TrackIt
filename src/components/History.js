import { useEffect, useState } from "react";
import { HistoryHabit } from "./services/axios";
import { AiFillCheckSquare, AiFillCloseSquare } from "react-icons/ai";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

export default function History({ Token }) {
	const WeekDays = [
		"Domingo",
		"Seginda",
		"Terça",
		"Quarta",
		"Quinta",
		"Sexta",
		"Sabado",
	];
	const [history, setHistory] = useState([]);
	const token = {
		config: {
			headers: {
				Authorization: `Bearer ${Token}`,
			},
		},
	};

	useEffect(() => {
		HistoryHabit(token).then((res) => {
			setHistory(res.data);
		});
	});

	return (
		<>
			<Header />
			<HistoryFeed className="history">
				<h2>Historico</h2>
				{history.length > 0 ? (
					<ul>
						{history.map((habit) => {
							return (
								<>
									<li key={habit.id}>
										<h2>{habit.day}</h2>
										{habit.habits.map((habit) => {
											return (
												<>
													<Habit className="habit">
														<Description className="desc">
															<span>
																<h3>
																	{WeekDays[`${habit.weekDay}`]},{habit.name}
																</h3>
															</span>
														</Description>
														<Icon className="icon">
															{habit.done ? (
																<AiFillCheckSquare
																	style={{ background: "green" }}
																/>
															) : (
																<AiFillCloseSquare
																	style={{ background: "red" }}
																/>
															)}
														</Icon>
													</Habit>
												</>
											);
										})}
									</li>
								</>
							);
						})}
					</ul>
				) : (
					"Em breve você poderá ver o histórico dos seus hábitos aqui!"
				)}
			</HistoryFeed>
			<Footer />
		</>
	);
}
const HistoryFeed = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 30px;
	h2 {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 23px;
		color: #126ba5;
	}
`;
const Habit = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Description = styled.div`
	display: flex;
	h3 {
		font-family: "Lexend Deca";
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		color: #666;
	}
`;
const Icon = styled.div`
	margin: 10px;
	border-radius: 5px;
`;
