import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { HistoryHabit } from "./services/axios";

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
			<div className="history">
				<h2>Historico</h2>
				<ul>
					{history.map((habit) => {
						return (
							<>
								<li key={habit.id}>
									<h2>{habit.day}</h2>
									{habit.habits.map((habit) => {
										return (
											<>
												<span>
													<h3>
														WeekDays[{habit.weekDay}],
														{habit.name}
													</h3>													
												</span>
											</>
										);
									})}
								</li>
							</>
						);
					})}
				</ul>
			</div>

			<Footer />
		</>
	);
}
